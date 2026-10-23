"""Browser acceptance checks. Run against a local server (default port 8000).
Requires Playwright and installed Microsoft Edge; test artifacts stay in .cache.
"""
import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '.cache/qa'))
from playwright.sync_api import sync_playwright

BASE = os.environ.get('DOOR_TEST_URL', 'http://127.0.0.1:8000')
ARTIFACTS = ROOT / '.cache/door-qa'
ARTIFACTS.mkdir(parents=True, exist_ok=True)

def position(page, progress):
    page.evaluate('''p => {
        document.documentElement.style.scrollBehavior = 'auto';
        const story = document.querySelector('.door-story');
        const stage = document.querySelector('.door-stage');
        window.scrollTo(0, story.offsetTop + p * (story.offsetHeight - stage.offsetHeight));
    }''', progress)
    page.wait_for_timeout(100)

with sync_playwright() as p:
    browser = p.chromium.launch(channel='msedge', headless=True)
    for name, viewport in [('desktop', {'width':1440,'height':900}), ('phone', {'width':390,'height':844})]:
        context = browser.new_context(viewport=viewport, device_scale_factor=1)
        page = context.new_page()
        errors, requests = [], []
        page.on('pageerror', lambda error: errors.append(str(error)))
        page.on('request', lambda request: requests.append(request.url))
        page.goto(BASE, wait_until='load')
        page.wait_for_selector('.is-animated')
        assert not page.evaluate('document.documentElement.scrollWidth > innerWidth')
        height = page.locator('.door-story').evaluate('(e) => e.offsetHeight')
        assert abs(height - viewport['height'] * (3 if name == 'desktop' else 2)) < 2
        if name == 'phone':
            assert not page.locator('#navMenu').is_visible()
            assert not any('landscape-desktop.webp' in url for url in requests)
            assert any('landscape-mobile.webp' in url for url in requests)
        for progress in [0, .3, .55, .75, 1]:
            position(page, progress)
            page.screenshot(path=str(ARTIFACTS / f'{name}-{progress}.png'))
        position(page, .3)
        before = page.locator('.door-rig').evaluate('(e) => e.style.transform')
        position(page, .9)
        position(page, .3)
        assert before == page.locator('.door-rig').evaluate('(e) => e.style.transform'), 'Reverse scroll drift'
        position(page, 0)
        skip = page.locator('.door-skip')
        skip.focus()
        page.keyboard.press('Enter')
        page.wait_for_timeout(100)
        page.wait_for_url('**/stream.html')
        assert page.locator('#stream-title').count() == 1
        page.goto(BASE + '/index.html#listen', wait_until='load')
        page.wait_for_selector('.is-animated')
        page.wait_for_timeout(150)
        assert abs(page.locator('#listen').bounding_box()['y'] - 80) < 3
        page.screenshot(path=str(ARTIFACTS / f'{name}-album.png'))
        page.reload(wait_until='load')
        page.wait_for_selector('.is-animated')
        page.wait_for_timeout(100)
        assert abs(page.locator('#listen').bounding_box()['y'] - 80) < 3, f"Fragment moved after enhancement: y={page.locator('#listen').bounding_box()['y']}"
        position(page, .5)
        page.emulate_media(reduced_motion='reduce')
        page.wait_for_timeout(100)
        assert not page.locator('.door-story').evaluate('(e) => e.classList.contains("is-animated")')
        assert page.locator('.door-story').evaluate('(e) => e.offsetHeight') <= viewport['height'] + 1
        page.emulate_media(reduced_motion='no-preference')
        page.wait_for_selector('.is-animated')
        if name == 'phone':
            page.set_viewport_size({'width':844,'height':390})
            position(page, 0)
            assert page.locator('.door-skip').bounding_box()['y'] < 390
            page.screenshot(path=str(ARTIFACTS / 'phone-landscape.png'))
        assert not errors, errors
        context.close()
        print(f'PASS {name}: framing, resources, reverse/fast scroll, skip/focus, hash, live reduced motion, resize')

    for mode in ['no-js','reduced','image-failure']:
        context = browser.new_context(viewport={'width':390,'height':844}, java_script_enabled=mode!='no-js', reduced_motion='reduce' if mode=='reduced' else 'no-preference')
        page = context.new_page()
        if mode == 'image-failure':
            page.route('**/door.webp', lambda route: route.abort())
        page.goto(BASE, wait_until='load')
        page.wait_for_timeout(200)
        assert page.locator('.door-story').evaluate('(e) => e.offsetHeight') == 844
        assert page.locator('#listen a').get_attribute('href') == 'stream.html'
        page.screenshot(path=str(ARTIFACTS / f'{mode}.png'))
        context.close()
        print(f'PASS {mode}: static scene, no dead scroll space, listening links')

    for route in ['media.html','shows.html','merch.html','stream.html']:
        context = browser.new_context(viewport={'width':390,'height':844})
        page = context.new_page()
        errors=[]
        page.on('pageerror', lambda error: errors.append(str(error)))
        page.goto(f'{BASE}/{route}', wait_until='domcontentloaded')
        assert not page.locator('#navMenu').is_visible()
        page.locator('#hamburger').click()
        assert page.locator('#navMenu').evaluate('(e) => e.classList.contains("active")')
        assert page.locator('#hamburger').get_attribute('aria-expanded') == 'true'
        page.keyboard.press('Escape')
        assert not page.locator('#navMenu').is_visible()
        assert page.evaluate('document.activeElement.id') == 'hamburger'
        assert page.locator('.door-story').count() == 0
        assert not errors, errors
        context.close()
        print(f'PASS {route}: loads without JS errors, mobile navigation opens')
    browser.close()
