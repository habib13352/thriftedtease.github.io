(() => {
  'use strict';
  const passage = document.querySelector('.passage');
  if (!passage) return;

  const stage = passage.querySelector('.passage-stage');
  const opening = passage.querySelector('.opening-image');
  const portalScene = passage.querySelector('.scene-portal');
  const portal = passage.querySelector('.portal-image');
  const copy = passage.querySelector('.passage-copy');
  const cue = passage.querySelector('.scroll-cue');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = matchMedia('(min-width: 701px) and (min-height: 501px)');
  let frame = 0;
  let ready = false;
  let travel = 1;
  let lastProgress = -1;

  const clamp = value => Math.max(0, Math.min(1, value));
  const smooth = value => {
    const t = clamp(value);
    return t * t * (3 - 2 * t);
  };

  function measure() {
    travel = Math.max(1, passage.offsetHeight - stage.offsetHeight);
    lastProgress = -1;
  }

  function render() {
    frame = 0;
    if (!ready || reduce.matches || !desktop.matches) return;
    const progress = clamp(-passage.getBoundingClientRect().top / travel);
    if (progress === lastProgress) return;
    lastProgress = progress;

    const approach = smooth(progress / .78);
    const transition = smooth((progress - .64) / .22);
    opening.style.transform = `scale(${1 + approach * .14})`;
    portalScene.style.opacity = String(transition);
    portal.style.transform = `scale(${1.04 - smooth((progress - .64) / .36) * .04})`;
    copy.style.opacity = String(1 - smooth(progress / .28));
    cue.style.opacity = String(1 - smooth(progress / .18));
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(render);
  }

  function resetStyles() {
    [opening, portalScene, portal, copy, cue].forEach(element => {
      element.style.removeProperty('transform');
      element.style.removeProperty('opacity');
    });
    passage.classList.toggle('is-ready', ready && desktop.matches && !reduce.matches);
    measure();
    schedule();
  }

  function alignFragment() {
    if (!location.hash || location.hash === '#passage') return;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
    }));
  }

  function loadExperience() {
    if (ready || reduce.matches || !desktop.matches) return;
    portal.src = portal.dataset.src;
    Promise.all([opening.decode(), portal.decode()]).then(() => {
      ready = true;
      resetStyles();
      alignFragment();
    }).catch(() => {
      ready = false;
      resetStyles();
    });
  }

  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    observer.disconnect();
    loadExperience();
  }, { rootMargin: '100% 0px' });
  observer.observe(passage);

  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', () => { measure(); schedule(); });
  reduce.addEventListener('change', () => { loadExperience(); resetStyles(); alignFragment(); });
  desktop.addEventListener('change', () => { loadExperience(); resetStyles(); });
})();
