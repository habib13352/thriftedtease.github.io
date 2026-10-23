"""Local responsive styling and streaming-page checks, using Playwright + Edge."""
import sys,json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'.cache/qa'))
from playwright.sync_api import sync_playwright
OUT=ROOT/'.cache/identity-qa';OUT.mkdir(parents=True,exist_ok=True)
BASE='http://127.0.0.1:8000'
with sync_playwright() as p:
    browser=p.chromium.launch(channel='msedge',headless=True)
    for width,height in [(1440,900),(390,844),(844,390)]:
        context=browser.new_context(viewport={'width':width,'height':height},reduced_motion='reduce')
        for name in ['index','stream','shows','media','merch']:
            page=context.new_page();errors=[];missing=[];requests=[]
            page.on('pageerror',lambda e:errors.append(str(e)))
            page.on('response',lambda r:missing.append(r.url) if r.url.startswith(BASE) and r.status>=400 else None)
            page.on('request',lambda r:requests.append(r.url))
            page.goto(f'{BASE}/{name}.html',wait_until='load')
            page.wait_for_timeout(1300)
            assert not page.evaluate('document.documentElement.scrollWidth>innerWidth'),(name,width,'overflow')
            assert page.locator('#navMenu a',has_text='Stream').get_attribute('href')=='stream.html'
            assert page.locator('h1').count()==1
            for target in (['#listen','#contact'] if name=='index' else ['.stream-intro','#album-players','.stream-youtube'] if name=='stream' else ['.media-archive'] if name=='media' else ['section:nth-of-type(2)']):
                page.locator(target).scroll_into_view_if_needed()
                if name=='index' and target=='#listen':
                    page.locator('.door-record').evaluate('(img) => img.decode()')
                    assert page.locator('.home-album-player').get_attribute('title')
                    assert page.locator('.home-album-options').get_attribute('href')=='stream.html'
                page.wait_for_timeout(350)
                page.screenshot(path=str(OUT/f'{name}-{width}-{target.replace("#","").replace(".","").replace(":","")}.png'))
            if name=='stream':
                frames=page.locator('iframe');assert frames.count()==2
                assert '4H9qIaUgfiSg7yycOVRrJH' in frames.nth(0).get_attribute('src')
                assert 'OLAK5uy_n5dUcOox-E0gKIWp_2AS5zV0j65J21Rhw' in frames.nth(1).get_attribute('src')
                youtube=frames.nth(1).element_handle()
                page.get_by_role('tab',name='Apple Music').click()
                assert '1847751617' in page.locator('.player-mount iframe').get_attribute('src')
                assert youtube.evaluate('(el)=>el.isConnected')
                page.get_by_role('tab',name='Spotify').click()
                box=page.locator('.stream-youtube-player').bounding_box()
                assert box['height']>=200 and box['width']<=900
                assert abs(box['x']-(width-box['width'])/2)<2
                for i in range(2):
                    assert frames.nth(i).get_attribute('title')
                    assert frames.nth(i).bounding_box()['width']<=width
                assert page.locator('a[aria-current="page"]').text_content().strip().lower()=='stream'
            if name=='media':
                first=page.locator('[data-lightbox-group]').first
                first.click()
                assert page.locator('.media-viewer').is_visible()
                page.locator('.viewer-image').evaluate('(img) => img.decode()')
                assert '1 of 8' in page.locator('#viewer-status').inner_text()
                page.keyboard.press('ArrowLeft')
                assert '8 of 8' in page.locator('#viewer-status').inner_text()
                page.keyboard.press('ArrowRight')
                page.locator('.viewer-next').click()
                assert '2 of 8' in page.locator('#viewer-status').inner_text()
                for _ in range(6):
                    page.keyboard.press('Tab')
                    assert page.evaluate('document.querySelector(".media-viewer").contains(document.activeElement)')
                page.screenshot(path=str(OUT/f'media-viewer-{width}.png'))
                page.keyboard.press('Escape')
                assert not page.locator('.media-viewer').is_visible()
                assert first.evaluate('(el) => el === document.activeElement')
                assert not any('hero-media.jpg' in u for u in requests)
                cards=page.locator('#cameron-house .media-card')
                first_width=cards.first.bounding_box()['width']
                for card in cards.all():
                    assert abs(card.bounding_box()['width']-first_width)<2
                if width <= 1000:
                    page.locator('.archive-toggle').click()
                    assert page.locator('.archive-toggle').get_attribute('aria-expanded')=='true'
                page.locator('.archive-jump-link[href="#painted-lady"]').click()
                page.wait_for_timeout(300)
                assert page.url.endswith('#painted-lady')
                nav=page.locator('.navbar').bounding_box()
                assert page.locator('#painted-lady').bounding_box()['y'] >= nav['y']+nav['height']
                assert page.locator('.archive-jump-link[aria-current="location"]').get_attribute('href')=='#painted-lady'
                if width<=1000:
                    assert page.locator('.archive-toggle').get_attribute('aria-expanded')=='false'
                    page.locator('.archive-toggle').click()
                    page.keyboard.press('Escape')
                    assert page.locator('.archive-toggle').evaluate('(el)=>el===document.activeElement')
                else:
                    assert page.locator('.archive-nav').bounding_box()['x'] > page.locator('.media-archive').bounding_box()['x']+page.locator('.media-archive').bounding_box()['width']
                page.screenshot(path=str(OUT/f'media-jump-{width}.png'))
                page.reload(wait_until='load')
                page.wait_for_timeout(300)
                nav=page.locator('.navbar').bounding_box()
                assert page.locator('#painted-lady').bounding_box()['y'] >= nav['y']+nav['height']
            if name=='index' and width==390:
                assert not any('panorama-desktop' in u or 'divider-desktop' in u for u in requests)
            assert not missing,missing
            assert not errors,errors
            print('PASS',name,width,flush=True);page.close()
        context.close()
    context=browser.new_context(viewport={'width':390,'height':844},java_script_enabled=False)
    page=context.new_page()
    page.route('https://**/*',lambda r:r.abort())
    page.goto(BASE+'/stream.html',wait_until='load')
    assert page.get_by_role('link',name='Open in Spotify').is_visible()
    assert page.get_by_role('link',name='Open in Apple Music').is_visible()
    assert page.get_by_role('link',name='Open playlist on YouTube',exact=False).is_visible()
    assert page.locator('#stream-youtube-title').is_visible()
    print('PASS blocked third parties + no JavaScript: links and content survive',flush=True)
    context.close();browser.close()
