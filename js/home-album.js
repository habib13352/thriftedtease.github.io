/* A one-time entrance; the player stays still once it is available. */
(() => {
    const details = document.querySelector('.home-album-details');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    if (!details || reduce.matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        if (!reduce.matches && !details.contains(document.activeElement)) {
            details.classList.add('album-arrived');
        }
        observer.disconnect();
    }, { threshold: 0.12 });
    observer.observe(details);
})();
