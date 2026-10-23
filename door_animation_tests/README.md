# Thrifted Tease — Through the Door

## Revised layered prototype

The original ZIP remains unchanged. The successor is in `layered/index.html` and shares the homepage's hero styles, animation script, and optimized assets. Serve the repository root and open `/door_animation_tests/layered/`.

See [the implementation notes](../docs/door-entrance.md) for asset provenance, timing, accessibility, and browser checks. The instructions below describe the original ZIP demo.

A dependency-free, scroll-driven website prototype for **Two Weeks Notice**.

## Run it

1. Unzip the project.
2. Open the `dist` folder in VS Code or Cursor.
3. Run a local web server in that folder, for example:

   ```bash
   python3 -m http.server 8000
   ```

4. Open `http://localhost:8000` in your browser.

You can also open `dist/index.html` directly, though using a local server is more reliable for website development.

## Files

- `dist/index.html`: All HTML, CSS, and JavaScript for the animated hero and album reveal.
- `dist/assets/two-weeks-notice.png`: The supplied cover artwork.

## Editing the effect

In the JavaScript at the bottom of `index.html`:

- The `approach` range determines how far you must scroll to zoom into the door.
- `zoom` determines how close the camera gets.
- The `tunnelIn` / `tunnelOut` ranges control the handoff to the generated spiral.
- `story` height (`430vh` in CSS) controls how long the entire scrolling sequence lasts.

The current version animates the complete cover as a single image. Separating the man, door, desert, and portal into individual transparent layers would enable more realistic parallax and door-opening animation.
