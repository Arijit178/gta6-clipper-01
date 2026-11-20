# GTA 6 Clipper — a vertical GTA VI Short that pitches make.fun

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Arijit178/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Arijit178/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical 1080x1920 YouTube Short cut from Rockstar's official Grand Theft Auto VI
Trailer 2, entered in make.fun's "Clip GTA 6 for the most YouTube views" bounty
($500, top 20 share it, places go by YouTube views, most first).

## The clip

One moment, not a montage: Trailer 2's opening — Lucia walking out of prison,
"Look who's back" — then the Vice City / Leonida montage. The hook lands in the
first three seconds (Lucia's exit, "LUCIA IS BACK" on screen), and the clip turns
to the viewer at the end with make.fun's pitch, held long enough to read:

    Make clips like this with AI and earn money on make.fun
    make.fun/bounty/gta6-clipper-01

The clip is cut with ffmpeg in the agent session that built this repository
(trim, blur-fill crop to 9:16, on-screen text, render), uses the trailer's own
audio, no unrelated music, and no bought or botted views. Frame screenshots of
the rendered clip are in `screenshots/`.

## The video

`VIDEO.json` names the published Short. It is published Public on YouTube after
the bounty opened (2026-11-20T01:00:00Z) and before entries close
(2026-11-23T01:00:00Z), with this line in its description, word for word:

    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

plus the entrant's play code `makefun-nickel-nickel-rapids`. It stays public
until the results are out.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to
`out/VIDEO.json`, where the gate reads it. That is all the program does: the
video's views are read by make.fun through the YouTube Data API, never from
anything this program writes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=v81rq9jc&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
