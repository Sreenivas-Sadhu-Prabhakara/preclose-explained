/* ============================================================
   preclose explained — scroll-driven reveal + progress rail.
   No network, no inline handlers (CSP: default-src 'self').
   Everything degrades to a static, legible page without JS or
   under prefers-reduced-motion (handled in CSS).
   ============================================================ */
(function () {
  'use strict';

  // JS is running: drop the no-js fallback so the reveal can drive the states.
  document.documentElement.classList.remove('no-js');

  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var scenes = Array.prototype.slice.call(document.querySelectorAll('[data-scene]'));

  if (reduce || !('IntersectionObserver' in window)) {
    // Show every scene immediately; CSS already forces final states under
    // reduced-motion, but add .in so any non-motion styling keyed on it applies.
    scenes.forEach(function (s) { s.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target); // reveal once; don't re-trigger
        }
      });
    }, { root: null, threshold: 0.28, rootMargin: '0px 0px -8% 0px' });

    scenes.forEach(function (s) { io.observe(s); });

    // The first scene is above the fold — reveal it right away.
    if (scenes.length) { scenes[0].classList.add('in'); }
  }

  // ---- progress rail (scroll position 0..100%) --------------------------
  var fill = document.getElementById('railFill');
  var ticking = false;

  function updateRail() {
    ticking = false;
    if (!fill) { return; }
    var doc = document.documentElement;
    var max = (doc.scrollHeight - doc.clientHeight);
    var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (pct < 0) { pct = 0; } else if (pct > 100) { pct = 100; }
    fill.style.width = pct.toFixed(2) + '%';
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateRail);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  updateRail();

  // ---- hide the "scroll to watch" cue once the user has scrolled --------
  var cue = document.getElementById('scrollCue');
  if (cue) {
    var hideCue = function () {
      if (window.scrollY > 80) {
        cue.style.opacity = '0';
        window.removeEventListener('scroll', hideCue);
      }
    };
    window.addEventListener('scroll', hideCue, { passive: true });
  }
})();
