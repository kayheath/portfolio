# Sprites

This folder holds **paid / licensed art assets** (e.g. the cat spritesheets).

**These files are intentionally git-ignored and must not be committed** — see the
`src/assets/sprites/` rule in [`.gitignore`](../../../.gitignore).

Only this README is tracked, as a marker that the folder exists and what belongs here.

## What goes here

- The animated cat spritesheet `.png` file(s).

## Getting set up

After cloning, drop the purchased spritesheet `.png`(s) into this folder. Without them,
any component that imports a sprite will fail to build until the files are present.

## License (SeethingSwarm)

Commercial use and modification are allowed. **Do not commit, redistribute, or give away
the assets individually** — this is why both the sprites here and any *derived* assets are
git-ignored. No blockchain/NFT/crypto use of any kind. Credit "SeethingSwarm" if desired.

## Derived assets

Some assets are cropped from these sheets and live outside this folder; they're still
licensed art and are git-ignored too:

- **`public/cat-favicon.png`** — frame 7 (1-indexed) of `cat01_sit_strip8_recolored.png`
  (8 frames, 40×40 each → crop x:240–280), then trimmed to the cat's bounding box, +2px
  padding, centered on a square transparent canvas. Referenced by `index.html`.

To regenerate (requires Pillow): crop the frame, `img.getbbox()` to trim, paste centered on
a `max(w,h)+4` square canvas, save to `public/cat-favicon.png`.
