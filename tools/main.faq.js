  /* ---------------- FAQ accordion ---------------- */
  (function faq() {
    var list = $('[data-faq]'); if (!list) return;
    var items = $$('details', list);
    items.forEach(function (d) {
      var sum = $('summary', d), body = $('.qa__a', d);
      sum.addEventListener('click', function (e) {
        e.preventDefault();
        var opening = !d.open;
        items.forEach(function (o) { if (o !== d && o.open) collapse(o); });
        opening ? expand(d) : collapse(d);
      });
    });
    function expand(d) {
      var body = $('.qa__a', d); d.open = true;
      if (reduce || !body.animate) return;
      var h = body.scrollHeight; body.animate([{ height: '0px', opacity: 0 }, { height: h + 'px', opacity: 1 }], { duration: 380, easing: 'cubic-bezier(.2,.8,.2,1)' });
    }
    function collapse(d) {
      var body = $('.qa__a', d);
      if (reduce || !body.animate) { d.open = false; return; }
      var h = body.scrollHeight;
      var a = body.animate([{ height: h + 'px', opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 300, easing: 'cubic-bezier(.4,0,.2,1)' });
      a.onfinish = function () { d.open = false; };
    }
  })();
