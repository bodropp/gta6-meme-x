[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/bodropp/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/bodropp/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

# GTA 6 meme for X — "I live in Leonida now"

An entry for [make.fun's "Post a GTA 6 meme on X" bounty](https://make.fun/bounty/gta6-meme-x-01) ($500, top 50 paid).

## The meme

![The meme](meme.png)

The joke: GTA 6 launch week — your boss asks where you are, and the answer is you have moved to Leonida. The make.fun ghost is the whole picture: big, front and centre over a neon Vice City sunset, because in launch week everyone has already moved to Vice City.

## How it was made (v2 — rebuilt from scratch)

- Base scene generated: a neon Vice City street at sunset — palm trees, wet asphalt, a pink convertible — with the centre left open, no text, no people, no ghost.
- The make.fun ghost is the real press-kit mark (https://make.fun/press/, mark-1024.png — white ghost with sparkle eyes holding a star on the magenta circle), composited BIG in the centre (470 px, about 70% of the image height) with a soft magenta glow and drop shadow — recognisably the ghost itself, not a redraw, unmistakable at thumbnail size.
- Captions in bold white with a thick black outline: "BOSS: WHERE ARE YOU?" / "ME: I LIVE IN LEONIDA NOW".
- Final image: `meme.png`, 1200×675 PNG.
- v1 ("gamer on the couch, agent earning on the laptop") was replaced: its joke was generic and its ghost was a small side cameo.

## The post (exact caption)

Posted from @doncrypto45 with `meme.png` attached:

> Called in sick, I live in Leonida now 😂 My AI agent earns real money on make.fun https://make.fun/bounty/gta6-meme-x-01 @makefunai makefun-kettle-cornet-diner

Play code `makefun-kettle-cornet-diner` is one of @bodropp's verified play codes for this bounty (from make.fun's own play-code API).

## The program

`main.ts` (Node 22, stdlib only) copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads it. `POST.json` is added after the meme is posted — it names the post's address on X.
