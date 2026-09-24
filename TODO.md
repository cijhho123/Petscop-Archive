# TODO

Open work for this archive. Written 2026-09-24.

The root `README.md` to-do list covers broad goals; this file tracks concrete,
enumerated items with the identifiers needed to act on them.

## BLOCKED: YouTube video/audio downloads

**Nothing in this section can be completed until the YouTube 403 is resolved.**

Every YouTube stream currently returns `HTTP 403 Forbidden` from this
environment - audio-only formats 139/140/249/251, the legacy combined format
18, and player clients web, web_safari, tv, mweb and android_vr. A control
download of an unrelated video failed identically, so this is environment-level
(YouTube PO-token enforcement), not a per-video restriction. yt-dlp 2026.07.04
was already the current release; upgrading changed nothing.

Resolve with either:

```
# 1. browser cookies - close Chrome first, it locks its cookie DB
yt-dlp --cookies-from-browser chrome -f ba <url>
# 2. or export a cookies.txt and use
yt-dlp --cookies cookies.txt -f ba <url>
# 3. or install a PO-token provider plugin for yt-dlp
```

Descriptions, auto-generated transcripts, thumbnails and metadata DO download
fine without cookies, so those can be fetched now and the media backfilled later.

Suggested command once unblocked (matches the naming used elsewhere here):

```
yt-dlp -f "ba[ext=m4a]/ba" --write-description --write-info-json \
       --write-thumbnail --write-subs --write-auto-subs --sub-langs "en.*" \
       --convert-subs srt -o "%(title)s.%(ext)s" <url>
```
Note: YouTube serves two caption tracks, `en` and `en-orig`, which are
byte-identical. Keep one. The same redundancy exists unfixed across the 39
subtitle pairs in `Official Petscop content/Petscop youtube channel/`.

### Nightmare Masterclass - "The Petscop Investigation"

Channel: <https://www.youtube.com/@NightmareMasterclass> (179 videos total)  
Playlist: <https://www.youtube.com/playlist?list=PL66V-u4b7Z8BkYl59qLV5-6N3FkxTG0Pw>  
**17 videos, 23.2 hours.** Part 1 is the video the root readme links.
David Stockdale of this channel was a Q&A panelist at the Spectacle Theater
screenings - see `Media coverage/Spectacle Theater screening (October 2024)`.

| # | Title | Length | Video ID | Done |
|---|---|---|---|---|
| 1 | The Petscop Investigation - Part 1 | 37:28 | `Crvn5-LOUFA` |  |
| 2 | The Petscop Investigation - Part 2 | 39:34 | `pXjqvtOmZ-g` |  |
| 3 | The Petscop Investigation - Part 3 | 45:28 | `gsHh5JjMzVw` |  |
| 4 | The Petscop Investigation - Part 4 | 1:25:10 | `QQgC5iyGmv4` |  |
| 5 | The Petscop Investigation - Part 5 | 1:06:18 | `-GcrTVBpstw` |  |
| 6 | Petscop Discovery Phase 7.18.18 | 1:19:38 | `ctisA3XPY6A` |  |
| 7 | Petscop Discovery Phase 12.7.18 | 2:06:56 | `2l2CYVTsi_w` |  |
| 8 | Petscop Discovery Phase 12.21.18 | 2:24:45 | `wR_XRy4L8ms` |  |
| 9 | The Petscop Investigation - Part 6 | 1:03:41 | `yPk_a52wU5k` |  |
| 10 | The Petscop Investigation - Comment Response | 33:11 | `pXvyLIVnrO0` |  |
| 11 | Petscop Discovery Phase 8.16.19 | 2:32:16 | `SmR7knrUK7I` |  |
| 12 | Petscop Discovery Phase 9.1.2019 | 2:20:32 | `wpyt4iDf0c8` |  |
| 13 | The Petscop Investigation - Part 7 | 1:43:23 | `v1apnVINWSo` |  |
| 14 | Petscop Comment Response / Q&A | 22:29 | `pgfbB9m-tX0` |  |
| 15 | The Petscop Investigation - Part 8...Case Closed? | 2:19:04 | `Q0rLMgHrzqY` |  |
| 16 | The Petscop Investigation - OST | 1:22:44 | `_kiw1RRwrZo` |  |
| 17 | Petscop Unexplained: What Popular YouTubers Got Wrong | 30:50 | `smmLwxzHjZU` | transcript+description only |

Already partially archived: `Petscop Community/Investigation videos/Nightmare
Masterclass - Petscop Unexplained - What Popular YouTubers Got Wrong/` has the
description, full transcript, thumbnail and metadata - audio still missing.

### Sock Muppet - "Petscop Theory"

Channel: <https://www.youtube.com/channel/UCRx4G3KjU6l3foJDJ_wN83g>  
Playlist: <https://www.youtube.com/playlist?list=PLbfjnGeFXcpxFEie4OoeA_hlaK5aI8wis>  
**23 videos, 2.6 hours.** Short forensic pieces rather than
long essays - tracking characters, timing the house, measuring the mill, sound
file analysis. Note this channel is mostly Undertale/Deltarune content; only
this playlist is Petscop.

| # | Title | Length | Video ID |
|---|---|---|---|
| 1 | Tiara and Paul | 0:36 | `27r-lXrPqWA` |
| 2 | Picture Differences In Tool's Room *Progress document has now been amended* | 3:15 | `CMDrSvhm450` |
| 3 | Tracking Marvin | 6:11 | `p36RhkbvTXc` |
| 4 | Tracking Marvin *Bucket Special* | 0:51 | `C0Lg2IgZiPA` |
| 5 | Tracking Marvin 2 | 6:02 | `ek8rhjAIYWE` |
| 6 | Petscopkart 64 | 3:15 | `gPwttszGEiA` |
| 7 | About The About Section | 8:15 | `qtQZ6z7ApKo` |
| 8 | Petscop Garalina 1 - 14 | 0:12 | `6anHG2cZ5Ng` |
| 9 | Hearing Jill | 2:12 | `yirwJPb9314` |
| 10 | Where Is The House? | 3:39 | `2bNAuzgqL3I` |
| 11 | What Year Is Petscop? | 4:06 | `jDOWNXo9Xu0` |
| 12 | The Road | 4:09 | `Lb5meSXlbu8` |
| 13 | Timing The House [Read The Description] | 10:22 | `qatCB7ugrqs` |
| 14 | About Section Update! | 5:48 | `WVwsHIIwrng` |
| 15 | Bits 'N' Pieces | 8:12 | `PFkGHBu5c3Q` |
| 16 | Tracking Marvin 2 - 2 | 4:02 | `UHhx300E3HA` |
| 17 | Waiting For Marvin | 6:27 | `DH92RB8fdBw` |
| 18 | Head Trauma | 10:33 | `-eWAeuY50ZU` |
| 19 | Mill Measuring | 5:07 | `m0EI-u-gub8` |
| 20 | Dial Impulse | 14:21 | `ZxqpaAmSZdY` |
| 21 | Rainer Filler | 18:29 | `HzYtpA9aJ6k` |
| 22 | Pauls Situation | 9:06 | `n2fIW-9w8dk` |
| 23 | Sound Files | 20:22 | `crH6eJjazy8` |

## Other open items

### Vimeo: the Spectacle Theater trailer video file
`Media coverage/Spectacle Theater screening (October 2024)/PETSCOP trailer (Vimeo)/`
has the page, poster frame, full description and oEmbed metadata, but not the
80-second video. Every route fails Vimeo-side (config endpoint 403, player and
yt-dlp OAuth 401), retested on an unrestricted network. A visible browser
playing the page *does* fetch signed fMP4 fragments from
`vod-adaptive-ak.vimeocdn.com`, so a logged-in
`yt-dlp --cookies-from-browser chrome "https://vimeo.com/1011167013"` is the
likely fix. Low value: it is an 80-second promo.

### A recording of the Spectacle Theater Q&A
Probably does not exist. Neither screening page mentions being recorded and no
recording surfaced in searches; the Vimeo channel listing is JS-rendered and
could not be enumerated, so this is "no evidence" rather than "confirmed none".
If a recording does exist it is the most valuable unpreserved Petscop artifact
identified so far - a panel of Jordan Fish, Liz Ryerson and David Stockdale
discussing the series. Worth asking Spectacle Theater or David Stockdale
(Nightmare Masterclass) directly.

### mxdwn Games article
<https://games.mxdwn.com/news/petscop-is-a-supposedly-unfinished-playstation-game-that-the-internet-is-trying-to-figure-out/>
Cited by Wikipedia. The site is currently broken server-side: "Error
establishing a database connection" (HTTP 500), in both a plain client and a
real browser. Retry later, or pull Wikipedia's Wayback snapshot:
<https://web.archive.org/web/20190504123632/https://games.mxdwn.com/news/petscop-is-a-supposedly-unfinished-playstation-game-that-the-internet-is-trying-to-figure-out/>

### Tony's unreleased Godot project
Not archivable yet - nothing has been published. Recorded here because it is
only documented in Bluesky posts from November 2024, now preserved in
`Tony's online presence/mryes.bsky.social - Bluesky/posts.md`. Tony described
using a full game engine for the first time since 2010 and said "not sure that
I've ever felt as satisfied with a project as this one". Nothing has been
announced since. Watch for a release.

### Non-English coverage
Two foreign-language articles Wikipedia cites are not yet archived:
- GamePro.de (German): <http://www.gamepro.de/artikel/petscop-lehrt-uns-das-fuerchten-creepypasta-arg-oder-tatsaechlich-ein-unveroeffentlichtes-ps1-spiel,3313120.html>
- PlaygroundMag (Spanish): <http://www.playgroundmag.net/cultura/Petscop-videojuego-inacabado-PS1-mensaje_0_1961803814.html>
Both are plain `http://` and may be dead; check Wayback if so.

### Academic writing
One scholarly treatment was found but not archived - an undergraduate research
paper (Merabet, UC Irvine HUMCORE, 2021) reading Petscop through disability
studies and trauma:
<https://core.humanities.uci.edu/wp-content/uploads/2022/02/UROP-2021-Merabet.pdf>

### Giftscop: the playable replica itself
`Petscop Community/Giftscop - playable Petscop replica/` archives the site
documentation only, not the builds. The project ships Windows and macOS Unity
versions plus a PlayStation homebrew port, all via
<https://giftscop.itch.io/giftscop> and the site's Downloads page. Its Discord
(<https://discord.gg/VwbXdcf>) and Bluesky
(<https://bsky.app/profile/giftscop.com>) are also unarchived. Note: Giftscop's
own site carries a "Petscop Resources" page worth mining for further links.

### Low value, listed for completeness
- Bustle listicle "9 Creepy YouTube Web Series To Marathon" - a passing mention.
- Database stubs: MobyGames, IGDB, Backloggd entries for Giftscop.
- IMDb `tt12149798` - serves an Amazon "Human Verification" captcha to any
  automated browser, headless or not. Needs a manual save.
- Letterboxd - has no Petscop entry at all; `/film/petscop/` is a genuine 404
  and a site search returns zero films. Nothing to archive.
- SoundCloud `soundcloud.com/mryes` - the account exists but is empty (zero
  tracks). Nothing to archive.

### Still outstanding from the root readme
- Channel description and profile history for the Petscop YouTube channel.
- Ingest the remaining Comprehensive Progress Document content and its media.
- Per-folder readmes and an index (partly done: `Media coverage/`,
  `Petscop Community/Petscop Wiki/` and `Tony's other works/Spinning (2026)/`
  now have them).
- ~~Twitter/X feed update~~ - **done 2026-09-24**, see
  `Tony's online presence/@pressedyes - twitter account/snapshot 2026-09-24/`:
  499 tweets (2011-2024) + 140 media files, including the 92 tweets that
  postdate the old late-2021 capture. Caveat: captured without authentication,
  so coverage is the union of three ID sources rather than a provably complete
  timeline - the 2022-2024 range came mostly from Wayback and should be treated
  as a sample. An authenticated `gallery-dl` run would confirm completeness.
  Also outstanding: 5 of the 22 deleted tweets have no recovered text; a Wayback
  snapshot of those individual tweet pages may still hold it (not yet tried).
- A "start here" section for the readme.

## Repository health

Not content work, but worth recording.

- **No Git LFS and no `.gitignore`.** The pack is ~2.4 GB and every binary is
  committed raw. Nine files exceed GitHub's 50 MB warning; the largest,
  `goodsky-flac.zip`, is 95 MB against a 100 MB hard limit. Roughly 82 MB of
  HTTrack scratch (`hts-cache/new.zip`, `new.lst`, `new.txt`) is in history
  permanently, as is the content deleted by the "delete legacy archive" commit.
- **39 byte-identical subtitle pairs** in `Official Petscop content/Petscop
  youtube channel/` - half of the 78 `.srt` files are redundant duplicates.
  `Petscop 12 (English).srt` is 56 bytes and effectively broken.
- **10 of 24 episodes have no `(Description).txt`** (02-04, 06-10, 16, 23);
  episode 06 has no audio rip; episode 19's only alternate encode is a 360p AV1
  that looks like an accidental grab.
- Duplicate copies with no canonical-copy policy: every game and album exists
  both loose under `Tony's other works/` and zipped inside the website mirror.
- `Thumbs.db` is committed twice under `Tony's other works/music/Vocal Marole/`.
- Path typo: `Tony's other works/0 Tony's website .../Contant Info.txt`.
