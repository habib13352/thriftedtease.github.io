# Thrifted Tease — Dev 3 Asset Pass

Dev 3 is a focused decorative pass using seven existing generated assets. It does not rebuild the homepage, add pages, generate imagery, change routes, or publish the site.

## Placements

- Stream: hypnotic television beside YouTube; melted-door cutout below the album/player composition.
- Media: desert-broadcast television beside the archive introduction.
- Shows: punch clock beside the introduction; low-opacity departure ticket at Past Shows.
- Merch: mushroom brogues beside the introduction; open briefcase in the Shopify callout.
- Homepage, navigation, media grids, show rows, product cards, and player controls remain undecorated.

## Delivery rules

- PNG originals remain design sources. Responsive WebP derivatives live in `images/optimized/decor/` and are regenerated with `scripts/prepare-decor-assets.ps1`.
- Desktop derivatives use a 600px longest edge; mobile derivatives use 320px. Every current derivative is under 82 KB.
- Decorative images have empty alt text, reserved dimensions, lazy loading below the fold, and static no-JavaScript behavior.
- One 600ms entrance is allowed. No looping motion; reduced motion remains static. Secondary Stream and Shows decorations hide below 600px.

## Acceptance

- Check 1440×900, 390×844, 320×700, and 844×390 without overflow or content obstruction.
- Confirm mobile derivatives load, source PNGs/ZIPs are never requested, and the homepage contains no decorative-object markup.
- Verify reduced motion, no JavaScript, keyboard use, blocked third parties, and failed decorative images leave core content usable.
- Publishing remains separate.
