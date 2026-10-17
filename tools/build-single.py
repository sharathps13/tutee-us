"""Builds one self-contained HTML file (all CSS, JS, fonts and images inlined) that opens
straight from disk. The university directory is included as an in-page view at #/universities.
Run: python3 tools/build-single.py [out.html]"""
import base64, mimetypes, pathlib, re, sys

root = pathlib.Path(__file__).resolve().parent.parent
out = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else root / 'tutee-usa-site.html'
mimetypes.add_type('image/webp', '.webp'); mimetypes.add_type('font/woff2', '.woff2')

def data_uri(rel):
    p = root / rel
    mime = mimetypes.guess_type(str(p))[0] or 'application/octet-stream'
    return f'data:{mime};base64,' + base64.b64encode(p.read_bytes()).decode()

_cache = {}
def inline_assets(text, base=''):
    def rep(m):
        rel = m.group(0)
        if rel.startswith('../'): rel = 'assets/' + rel[3:]
        if rel not in _cache: _cache[rel] = data_uri(rel)
        return _cache[rel]
    return re.sub(r'(?:\.\./|assets/)(?:img|fonts)/[A-Za-z0-9_./-]+\.(?:webp|png|jpg|svg|woff2)', rep, text)

def safe_js(js):
    return js.replace('</script', '<\\/script')

index = (root / 'index.html').read_text(encoding='utf-8')
dirpage = (root / 'universities.html').read_text(encoding='utf-8')
css = (root / 'assets/css/site.css').read_text(encoding='utf-8')
js = lambda n: (root / 'assets/js' / n).read_text(encoding='utf-8')

# --- head: inline css, drop preloads & external scripts (re-added inline at the end) ---
html = index
html = re.sub(r'\s*<link rel="preload"[^>]*>', '', html)
html = re.sub(r'\s*srcset="[^"]*"\s*sizes="[^"]*"', '', html)
html = html.replace('<link rel="stylesheet" href="assets/css/site.css">', '<style>\n' + inline_assets(css) + '\n</style>')
html = re.sub(r'\s*<script defer src="[^"]+"></script>', '', html)
html = html.replace('<script type="module" src="assets/js/hero.js"></script>', '')

html = html.replace("  if (location.hash === '#/universities') location.replace('universities.html');\n", '')

# --- directory view, taken from universities.html ---
dir_main = re.search(r'<main id="main">(.*?)</main>', dirpage, re.S).group(1)
dir_extra = dirpage[dirpage.index('<div class="selbar'):dirpage.index('<!-- ============ FOOTER')]
dir_view = ('<div id="dirView" class="page-dir" hidden>' + dir_main + dir_extra + '</div>\n')
html = html.replace('<main id="main">', '<main id="main" data-landing>', 1)
html = html.replace('<!-- ============ FOOTER ============ -->', dir_view + '\n<!-- ============ FOOTER ============ -->', 1)
html = html.replace('href="index.html#finder"', 'href="#finder"')
html = html.replace('href="universities.html"', 'href="#/universities"')

router = r"""
(function(){
  var landing=document.querySelector('[data-landing]'), dir=document.getElementById('dirView'), rail=document.querySelector('[data-rail]');
  var navLinks=[].slice.call(document.querySelectorAll('a[href="#/universities"]'));
  var last=null, cur=location.hash;
  // the route is kept in memory too, so it also works where the URL can't change (sandboxed previews)
  function go(h){ cur=h; try { history.pushState(null,'',h); } catch (err) {} route(); }
  // reset the page AND the smooth scroller, otherwise the next wheel continues from the old position
  function toTop(){
    var L=window.TCLenis;
    if (L) { if (L.resize) L.resize(); L.scrollTo(0,{immediate:true,force:true}); }
    window.scrollTo(0,0);
  }
  function route(){
    var isDir = cur.indexOf('#/universities') === 0;
    var q = isDir && cur.indexOf('?q=') > -1 ? decodeURIComponent(cur.split('?q=')[1]) : null;
    if (isDir && q !== null && window.TCDir) window.TCDir.search(q);
    var m=document.querySelector('[data-menu]'); if (m && !m.hidden) document.querySelector('[data-menu-close]').click();
    if (isDir === last) { if (!isDir) jump(); return; }
    last = isDir;
    landing.hidden = isDir; dir.hidden = !isDir; if (rail) rail.hidden = isDir;
    document.body.classList.toggle('page-dir', isDir);
    if (window.TCFilm) window.TCFilm.active = !isDir && cur.length < 2;
    navLinks.forEach(function(a){ a.classList.toggle('is-active', isDir); if (isDir) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
    if (isDir) {
      document.title='University Atlas: every US university — Tutee Connect USA';
      toTop(); requestAnimationFrame(toTop); setTimeout(toTop, 120); setTimeout(toTop, 400);
    } else {
      document.title='Tutee Connect - Study in the USA';
      jump();
    }
  }
  function jump(){
    var id = cur.length > 1 ? cur.slice(1) : '';
    setTimeout(function(){
      if (id && document.getElementById(id) && window.TCJump) window.TCJump(id);
      else { if (window.ScrollTrigger) ScrollTrigger.refresh(); toTop(); }
    }, 30);
  }
  // capture phase: handled here before the page's own anchor scrolling
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var h = a.getAttribute('href');
    if (h.indexOf('#/universities') === 0) { e.preventDefault(); e.stopImmediatePropagation(); go(h); return; }
    if (h.length < 2 || !dir || dir.hidden || !document.getElementById(h.slice(1))) return;
    e.preventDefault(); e.stopImmediatePropagation(); go(h);
  }, true);
  window.addEventListener('hashchange', function(){ cur = location.hash; route(); });
  route();
})();
"""

scripts = '<script>window.TC_DIR_BASE = "#/universities";</script>\n' + ''.join('<script>\n' + safe_js(inline_assets(js(n))) + '\n</script>\n' for n in
                  ['vendor/gsap.min.js', 'vendor/ScrollTrigger.min.js', 'vendor/lenis.min.js', 'universities-data.js', 'us-institutions.js', 'forms.js'])
scripts += '<script>\n' + router + '\n</script>\n'
scripts += '<script>\n' + safe_js(inline_assets(js('main.js'))) + '\n</script>\n'
scripts += '<script>\n' + safe_js(inline_assets(js('universities.js'))) + '\n</script>\n'

html = html.replace('</body>', scripts + '</body>')
html = inline_assets(html)

left = re.findall(r'(?:src|href)="assets/[^"]+"', html)
out.write_text(html, encoding='utf-8')
print(out, f'{out.stat().st_size/1e6:.2f} MB', 'unresolved:', left)
