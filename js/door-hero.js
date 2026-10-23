/* Native scroll, no clock-driven animation. Shared by the prototype and home. */
(() => {
    'use strict';
    const story = document.querySelector('.door-story');
    if (!story) return;
    const stage = story.querySelector('.door-stage');
    const rig = story.querySelector('.door-rig');
    const portal = story.querySelector('.door-portal');
    const foreground = story.querySelector('.door-foreground');
    const landscape = story.querySelector('.door-landscape');
    const copy = story.querySelector('.door-copy');
    const hint = story.querySelector('.door-hint');
    const wash = story.querySelector('.door-wash');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    const canvas = document.createElement('canvas');
    canvas.className = 'door-tunnel-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    const context = canvas.getContext('2d');
    if (!context) return; // The static SVG remains the fallback.
    rig.before(canvas);
    const clamp = value => Math.max(0, Math.min(1, value));
    const ease = value => { const t = clamp(value); return t * t * (3 - 2 * t); };
    let geometry;
    let frame = 0;
    let measureNeeded = true;
    let ready = false;
    let lastProgress = null;

    function measure() {
        // Measure the untransformed opening, not a guessed percentage of viewport.
        rig.style.transform = 'none';
        const box = portal.getBoundingClientRect();
        const viewport = stage.getBoundingClientRect();
        const x = box.left - viewport.left + box.width / 2;
        const y = box.top - viewport.top + box.height / 2;
        geometry = {
            x, y, dx: viewport.width / 2 - x, dy: viewport.height / 2 - y,
            zoom: Math.max(viewport.width / box.width, viewport.height / box.height) * 1.3,
            travel: Math.max(1, story.offsetHeight - stage.offsetHeight),
            height: viewport.height
        };
        geometry.portalWidth = box.width;
        geometry.portalHeight = box.height;
        geometry.width = viewport.width;
        const dpr = Math.min(devicePixelRatio || 1, 2);
        canvas.width = Math.round(viewport.width * dpr);
        canvas.height = Math.round(viewport.height * dpr);
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
        rig.style.transformOrigin = `${x}px ${y}px`;
        foreground.style.transformOrigin = `${x}px ${y}px`;
        landscape.style.transformOrigin = `${x}px ${y}px`;
        measureNeeded = false;
        lastProgress = null;
    }

    function draw() {
        frame = 0;
        if (!ready || reduce.matches) return;
        if (measureNeeded) measure();
        const p = clamp(-story.getBoundingClientRect().top / geometry.travel);
        if (p === lastProgress) return;
        lastProgress = p;
        const approach = ease((p - .025) / .73);
        // Exponential scale gives a steady approach instead of an early lurch.
        const zoom = Math.pow(geometry.zoom, approach);
        const tunnelTravel = 1 + ease((p - .67) / .3) * 1.1;
        const dx = geometry.dx * approach;
        const dy = geometry.dy * approach;
        const cameraScale = zoom * tunnelTravel;
        rig.style.transform = `translate3d(${dx}px,${dy}px,0) scale(${cameraScale})`;
        // Repaint at viewport resolution: compositor scaling of an SVG image gets blurry.
        const pw = geometry.portalWidth * cameraScale;
        const ph = geometry.portalHeight * cameraScale;
        const cx = geometry.x + dx;
        const cy = geometry.y + dy;
        context.clearRect(0, 0, geometry.width, geometry.height);
        context.save();
        context.beginPath();
        context.rect(cx - pw / 2, cy - ph / 2, pw, ph);
        context.clip();
        context.fillStyle = '#171513';
        context.fillRect(0, 0, geometry.width, geometry.height);
        for (let i = 0; i < 82; i++) {
            const radius = 1900 * Math.pow(.86, i);
            context.beginPath();
            context.ellipse(cx, cy, radius / 400 * pw, radius * 2.25 / 900 * ph, 0, 0, Math.PI * 2);
            context.fillStyle = i % 2 === 0 ? '#171513' : '#f2e9d8';
            context.fill();
        }
        context.restore();
        foreground.style.transform = `translate3d(${dx}px,${dy + approach * geometry.height * 1.3}px,0) scale(${Math.pow(zoom, 1.18)})`;
        landscape.style.transform = `scale(${1 + approach * .65})`;
        copy.style.opacity = String(1 - ease(p / .19));
        hint.style.opacity = String(1 - ease(p / .13));
        wash.style.opacity = String(ease((p - .80) / .20));
    }

    function schedule() {
        if (!frame && ready && !reduce.matches) frame = requestAnimationFrame(draw);
    }

    function setMode() {
        story.classList.toggle('is-animated', ready && !reduce.matches);
        canvas.hidden = !ready || reduce.matches;
        [rig, foreground, landscape, copy, hint, wash].forEach(element => {
            element.style.removeProperty('transform');
            element.style.removeProperty('opacity');
        });
        measureNeeded = true;
        schedule();
    }

    function alignInitialFragment() {
        if (!location.hash || location.hash === '#home') return;
        // Wait past native history restoration and the enhanced layout's first paint.
        requestAnimationFrame(() => requestAnimationFrame(() => {
            document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
        }));
    }

    // Skip to music is a native link to stream.html.
    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', () => { measureNeeded = true; schedule(); });
    addEventListener('pageshow', event => {
        measureNeeded = true;
        schedule();
        if (!event.persisted && ready) alignInitialFragment();
    });
    reduce.addEventListener('change', setMode);
    if ('ResizeObserver' in window) {
        new ResizeObserver(() => { measureNeeded = true; schedule(); }).observe(stage);
    }
    // Remain static if any scene image fails. Enable extra scroll space only when ready.
    const images = [...story.querySelectorAll('img')];
    Promise.all(images.map(img => img.decode())).then(() => {
        ready = true;
        setMode();
        // The browser may have resolved the fragment before enhancement changed height.
        alignInitialFragment();
    }).catch(() => { ready = false; setMode(); });
})();
