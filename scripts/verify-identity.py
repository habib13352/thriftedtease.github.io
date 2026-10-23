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
            for target in (['#media','#contact'] if name=='index' else ['.stream-intro','#album-players','.youtube-section'] if name=='stream' else ['section:nth-of-type(2)']):
                page.locator(target).scroll_into_view_if_needed()
                page.wait_for_timeout(350)
                page.screenshot(path=str(OUT/f'{name}-{width}-{target.replace("#","").replace(".","").replace(":","")}.png'))
            if name=='stream':
                frames=page.locator('iframe');assert frames.count()==2
                assert '4H9qIaUgfiSg7yycOVRrJH' in frames.nth(0).get_attribute('src')
                assert '1847751617' in frames.nth(1).get_attribute('src')
                for i in range(2):
                    assert frames.nth(i).get_attribute('title')
                    assert frames.nth(i).bounding_box()['width']<=width
                assert page.locator('a[aria-current="page"]').text_content().strip().lower()=='stream'
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
    assert page.get_by_role('link',name='SoundCloud',exact=False).count()==1
    assert page.locator('#players-title').is_visible()
    print('PASS blocked third parties + no JavaScript: links and content survive',flush=True)
    context.close();browser.close()
