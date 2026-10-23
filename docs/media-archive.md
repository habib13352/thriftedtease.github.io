# Photos & Films

The media page uses a compact text introduction, cream venue headings, rust metadata, and uniform photo/video grid cells. The grid has three columns on desktop, two at tablet sizes, and one at 540px and below so video controls stay usable. Original photo colours and existing photo destinations/video embeds are preserved. Photos still open uncropped in the viewer. Repeated badges, card borders, and implementation-oriented captions were removed.

A sticky gallery rail occupies its own column to the right of the desktop archive and stops at the archive boundary. A red line marks the current gallery. Screens up to 1000px use a floating Galleries button and expandable link list; it closes after selection, on Escape, outside clicks, or focus leaving the menu. The floating control is hidden at the opening, footer, and while the photo viewer is open. Without JavaScript, links remain inline above the archive. Each gallery has a stable fragment ID and an offset below the main navbar. Native links support sharing and browser history. Gallery navigation and heading animation respect reduced motion.

Page-specific styling is in `css/media-archive.css`; interactions are in `js/media-archive.js`. No new imagery or dependencies were added. The previous hero image is no longer requested. Thumbnail images and embeds remain lazy-loaded, and full-resolution photographs load on opening the viewer.

The native dialog viewer groups photos by `data-lightbox-group`. Previous/next wrap within that group; arrow keys navigate, Tab stays within the viewer, Escape closes, and focus returns to the triggering thumbnail. Without JavaScript or dialog support, the original photo links still work. A failed image has an explanatory caption and an Open original link. Venue headings reveal once, with no animation under reduced motion.

Run `python scripts/verify-identity.py` against the local port-8000 server for responsive layout and viewer interaction checks. The suite checks 1440x900, 390x844, and 844x390 viewports, focus cycling/restoration, wrapping, arrows, and absence of the retired hero request. Screenshots are stored in `.cache/identity-qa/`.

Existing YouTube playlist embeds were retained; their track ordering is controlled by YouTube and was not reclassified as verified venue footage. Playback remains user initiated. Physical iOS/Safari review and a complete assistive-technology audit remain outside the automated Edge checks. Changes are local, not published.
