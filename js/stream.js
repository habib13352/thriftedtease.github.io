(() => {
    const tabs = [...document.querySelectorAll('.player-tabs button')];
    const panels = [...document.querySelectorAll('.focused-panel')];
    if (!tabs.length) return;
    function activate(index) {
        tabs.forEach((tab, i) => {
            const selected = i === index;
            tab.setAttribute('aria-selected', String(selected));
            tab.tabIndex = selected ? 0 : -1;
            const panel = panels[i];
            panel.hidden = !selected;
            const mount = panel.querySelector('.player-mount');
            if (!selected) mount.replaceChildren();
            else if (!mount.firstChild) mount.append(panel.querySelector('template').content.cloneNode(true));
        });
    }
    panels.forEach((panel,i) => { panel.setAttribute('role','tabpanel'); panel.setAttribute('aria-labelledby',tabs[i].id); });
    tabs.forEach((tab,i) => {
        tab.addEventListener('click',()=>activate(i));
        tab.addEventListener('focus',()=>activate(i));
        tab.addEventListener('keydown',event=>{
            let next;
            if (event.key==='ArrowRight' || event.key==='ArrowLeft') next=(i+1)%tabs.length;
            if (event.key==='Home') next=0;
            if (event.key==='End') next=tabs.length-1;
            if (next===undefined) return;
            event.preventDefault(); activate(next); tabs[next].focus();
        });
    });
    activate(0);
    document.querySelector('.player-tabs').hidden=false;
})();
