(function (doc, win) {
        var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
        var clientWidth = docEl.clientWidth;





          if (!clientWidth) return;
          docEl.style.fontSize = 20 * clientWidth / 1423 + 'px';
           



          $("[name='viewport']").attr("content","width=device-width,initial-scale="+1/window.devicePixelRatio+",user-scalable=no")
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);  
