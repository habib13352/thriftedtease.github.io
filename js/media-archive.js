(() => {
    'use strict';
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    const navigation = document.querySelector('.archive-nav');
    if (navigation) {
        const chapters = [...document.querySelectorAll('.media-event[id]')];
        const jumps = [...navigation.querySelectorAll('.archive-jump-link')];
        const toggle = navigation.querySelector('.archive-toggle');
        const archive = document.querySelector('.media-archive');
        const navbar = document.querySelector('.navbar');
        navigation.classList.add('is-enhanced');
        function closeMenu(returnFocus = false) {
            navigation.classList.remove('menu-open');
            toggle.setAttribute('aria-expanded', 'false');
            if (returnFocus) toggle.focus();
        }
        toggle.addEventListener('click', () => {
            const open = navigation.classList.toggle('menu-open');
            toggle.setAttribute('aria-expanded', String(open));
            if (open) (navigation.querySelector('[aria-current="location"]') || jumps[0]).focus();
        });
        jumps.forEach(link => link.addEventListener('click', () => {
            closeMenu();
            document.querySelector(link.hash)?.focus({ preventScroll: true });
        }));
        navigation.addEventListener('keydown', event => {
            if (event.key === 'Escape') { closeMenu(true); event.preventDefault(); }
        });
        document.addEventListener('click', event => { if (!navigation.contains(event.target)) closeMenu(); });
        navigation.addEventListener('focusout', event => {
            if (!navigation.contains(event.relatedTarget)) closeMenu();
        });
        let pending = false;
        function update() {
            pending = false;
            const top = navbar.getBoundingClientRect().height;
            document.documentElement.style.setProperty('--archive-top', `${top}px`);
            const bounds = archive.getBoundingClientRect();
            const visible = bounds.top < innerHeight * .7 && bounds.bottom > innerHeight;
            navigation.classList.toggle('archive-in-view', visible);
            if (!visible) closeMenu();
            let current = chapters[0];
            chapters.forEach(chapter => {
                if (chapter.getBoundingClientRect().top <= top + 50) current = chapter;
            });
            jumps.forEach(link => {
                if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
                else link.removeAttribute('aria-current');
            });
        }
        function schedule() { if (!pending) { pending = true; requestAnimationFrame(update); } }
        addEventListener('scroll', schedule, { passive: true });
        addEventListener('resize', schedule);
        if ('ResizeObserver' in window) {
            const resize = new ResizeObserver(schedule);
            resize.observe(navbar); resize.observe(navigation);
        }
        update();
    }
    if ('IntersectionObserver' in window && !reduce.matches) {
        const observer = new IntersectionObserver(entries => entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            if (!reduce.matches) entry.target.classList.add('media-heading-arrived');
            observer.unobserve(entry.target);
        }), { threshold: .2 });
        document.querySelectorAll('.media-event-header').forEach(header => observer.observe(header));
    }
    const dialog = document.querySelector('.media-viewer');
    if (!dialog || typeof dialog.showModal !== 'function') return;
    const links = [...document.querySelectorAll('[data-lightbox-group]')];
    const image = dialog.querySelector('.viewer-image');
    const status = dialog.querySelector('#viewer-status');
    const caption = dialog.querySelector('.viewer-caption');
    const original = dialog.querySelector('.viewer-original');
    let group = [], index = 0, opener;
    function show(next) {
        index = (next + group.length) % group.length;
        const link = group[index];
        image.alt = link.querySelector('img').alt;
        image.src = link.href;
        original.href = link.href;
        caption.textContent = image.alt;
        status.textContent = `${link.closest('.media-event').querySelector('.media-event-title').textContent} / ${index + 1} of ${group.length}`;
    }
    links.forEach(link => link.addEventListener('click', event => {
        if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        opener = link;
        group = links.filter(item => item.dataset.lightboxGroup === link.dataset.lightboxGroup);
        show(group.indexOf(link));
        dialog.showModal();
        document.documentElement.classList.add('viewer-open');
    }));
    image.addEventListener('error', () => { caption.textContent = 'This photo could not load. Try opening the original.'; });
    dialog.querySelector('.viewer-close').addEventListener('click', () => dialog.close());
    dialog.querySelector('.viewer-prev').addEventListener('click', () => show(index - 1));
    dialog.querySelector('.viewer-next').addEventListener('click', () => show(index + 1));
    dialog.addEventListener('keydown', event => {
        if (event.key === 'Tab') {
            const controls = [...dialog.querySelectorAll('button, a[href]')];
            const first = controls[0], last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault(); last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault(); first.focus();
            }
        }
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            show(index + (event.key === 'ArrowRight' ? 1 : -1));
        }
    });
    dialog.addEventListener('close', () => {
        document.documentElement.classList.remove('viewer-open');
        opener?.focus({ preventScroll: true });
    });
})();
