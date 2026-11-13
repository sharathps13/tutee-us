# generates the sapphire silk-ribbon SVG used behind the dark slides
def bez(p): return "M{:.0f} {:.0f} C{:.0f} {:.0f} {:.0f} {:.0f} {:.0f} {:.0f}".format(*[c for pt in p for c in pt])
def lerp(a, b, t): return [(a[i][0]+(b[i][0]-a[i][0])*t, a[i][1]+(b[i][1]-a[i][1])*t) for i in range(4)]
def ribbon(uid):
    # two edges of the silk; strands fan between them (wide on the left, pinched at the bright core, wide again)
    A = [(-140, 140), (520, -60), (860, 880), (1740, 560)]
    B = [(-140, 520), (560, 200), (760, 820), (1740, 900)]
    core = lerp(A, B, .32)
    n = 40
    strands = []
    for i in range(n):
        t = i/(n-1)
        op = .02 + .16*(1-abs(t-.32)/.68)**3
        strands.append('<path d="%s" stroke-opacity="%.3f"/>' % (bez(lerp(A, B, t)), op))
    cd = bez(core)
    return f'''<svg class="rb" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
<defs>
<linearGradient id="rbS{uid}" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#1b4fd8" stop-opacity="0"/><stop offset=".25" stop-color="#2f6bff"/><stop offset=".5" stop-color="#7fb0ff"/><stop offset=".78" stop-color="#2f6bff"/><stop offset="1" stop-color="#1b4fd8" stop-opacity="0"/></linearGradient>
<linearGradient id="rbC{uid}" x1="0" x2="1" y1="0" y2="0"><stop offset=".08" stop-color="#5d93ff" stop-opacity="0"/><stop offset=".42" stop-color="#cfe2ff"/><stop offset=".5" stop-color="#ffffff"/><stop offset=".62" stop-color="#9cc2ff"/><stop offset=".95" stop-color="#3d74ff" stop-opacity="0"/></linearGradient>
<radialGradient id="rbH{uid}"><stop offset="0" stop-color="#e8f1ff" stop-opacity=".9"/><stop offset=".25" stop-color="#5f95ff" stop-opacity=".35"/><stop offset="1" stop-color="#1b4fd8" stop-opacity="0"/></radialGradient>
<filter id="rbB{uid}" x="-30%" y="-80%" width="160%" height="260%"><feGaussianBlur stdDeviation="70"/></filter>
<filter id="rbM{uid}" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="34"/></filter>
</defs>
<g class="rb__drift">
<path d="{cd}" fill="none" stroke="#1d47c9" stroke-opacity=".55" stroke-width="320" filter="url(#rbB{uid})"/>
<path d="{cd}" fill="none" stroke="url(#rbS{uid})" stroke-opacity=".5" stroke-width="120" filter="url(#rbM{uid})"/>
<path d="{cd}" fill="none" stroke="url(#rbC{uid})" stroke-opacity=".18" stroke-width="40" filter="url(#rbM{uid})"/>
<ellipse cx="712" cy="448" rx="340" ry="110" fill="url(#rbH{uid})" opacity=".3" transform="rotate(30 712 448)" filter="url(#rbM{uid})"/>
</g>
</svg>'''
