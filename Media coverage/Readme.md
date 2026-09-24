# Media coverage

Third-party writing about Petscop, plus the first public screening of the
series. Captured **2026-09-24**.

This is a new top-level folder because none of the existing four fit: this is
neither official Petscop content, nor Tony's own presence, nor his other works,
nor community investigation. It is how the outside world covered the series -
which the root readme lists as part of this archive's purpose.

Each folder follows the convention already used in `Tony's online presence/Interviews/`:

```
<outlet> - <title>/
├── Article - HTML Version/index.html   works offline
├── Article - HTML Version/assets/      only what that page references
├── Article - PDF Version.pdf
├── Screenshot.png                      full-page
├── Link.url
└── info.txt                            URL, capture date, method, caveats
```

Read `info.txt` before trusting any folder. One capture is incomplete (the
Vimeo trailer's video file) and says so explicitly.

## Contents

| Folder | What it is | Complete? |
|---|---|---|
| `Kotaku - People Are Trying To Find The Truth...` | Patricia Hernandez, 21 Apr 2017. The first major press coverage; it and the AV Club piece the same week drove the series' audience | Yes |
| `The New Yorker - Petscop, the Creepy YouTube Series...` | Rabbit Holes column, 2017. Live page paywalled; full text recovered from the 2017-12-01 Wayback snapshot | Yes |
| `Know Your Meme - Petscop` | Documents the community phenomenon and its spread | Yes |
| `TV Tropes - Petscop` | Main trope page, 58k chars of article body | Yes |
| `TV Tropes - Petscop (Trivia)` | Production/trivia subpage | Yes |
| `TV Tropes - 3D Workers Island` | Tony's other work, for cross-reference | Yes |
| `Wikipedia - Petscop` | The encyclopedia article and its 39 citations | Yes |
| `Eurogamer - Petscop, the internet's favourite haunted video game` | 2018-06-24, long-form | Yes |
| `AV Club - A creepypasta myth is being born...` | 2017. The other half of the Kotaku week that drove the audience | Yes |
| `TheGamer - Petscop Has Ended With A Soundtrack Launch` | Covers the series' conclusion | Yes |
| `Splice Today - The Journey Across Newmaker Plane` | Essay | Yes |
| `The Daily Star - Petscop, the game that never existed` | Bangladeshi coverage | Yes |
| `Analog Horror Wiki - Petscop` | Genre-wiki entry, distinct from the Fandom wiki | Yes |
| `decamarks - A surface-level examination of Petscop` | Long independent fan analysis, 60k chars | Yes |
| `Spectacle Theater screening (October 2024)/` | First-ever public screening | Page yes, **video no** |

## The Spectacle Theater screening

Spectacle Theater (Brooklyn) gave Petscop its first public screening on
**Saturday 12 October 2024**, 2 PM - 8 PM: the complete 269-minute series in
three parts with intermissions, plus a Q&A panel of filmmaker **Jordan Fish**,
writer/composer/game designer **Liz Ryerson**, and YouTuber **David Stockdale**
- who is Nightmare Masterclass, whose Petscop investigation the root readme
already links. Tony Domenico is credited and thanked on the page but did not
attend. An encore screening with the same panel followed on **Saturday
16 November 2024**.

No recording of the Q&A/seminar appears to have been published. Neither
screening page mentions one being recorded, and no recording surfaced in
searches or on Spectacle's Vimeo channel. The panel discussion is, as far as
can be determined, not preserved anywhere - if a recording does exist it is
the single most valuable missing Petscop artifact identified so far.

The `PETSCOP trailer (Vimeo)` folder is the 80-second promo Spectacle cut for
the screening - **not** the 269-minute series, which is already archived under
`Official Petscop content/Petscop youtube channel/`.

## Known gaps

**The New Yorker article is now complete** (resolved 2026-09-24). The live page
is subscriber-gated: it returns HTTP 200 but the article element holds only the
subscription offer. The full text was instead recovered from the Internet
Archive snapshot of 2017-12-01, which predates the paywall, and is stored in
`Wayback snapshot 2017-12-01/` as HTML, PDF, screenshot and plain text - 10
paragraphs, 6,662 characters. The paywalled live capture is kept alongside it to
record the article's present state; read the Wayback copy for the article
itself.

**The Vimeo trailer video file is not preserved.** Every route to the stream
fails: yt-dlp (its anonymous OAuth endpoint 401s, and its web client requires a
logged-in account), the player config endpoint (403), and the embed URL with a
Spectacle referer (401) both headless and in a real browser.

An earlier note here guessed this was a network-level restriction. That was
wrong - it was retested from an unrestricted network on 2026-09-24 and every
endpoint returned exactly the same codes. The block is Vimeo-side: this video
appears to require an authenticated session.

The stream itself is not unreachable in principle. A visible (non-headless)
browser playing the page does fetch signed fMP4 fragments from
`vod-adaptive-ak.vimeocdn.com`, so the video could be recovered by capturing
that session's manifest, or simply by a logged-in `yt-dlp --cookies-from-browser`.
It is an 80-second promo, so this was left undone as low value.

Preserved instead: the poster frame at full resolution, the complete
description (which carries the whole screening billing), the oEmbed metadata,
and the page itself.

**IMDb and Letterboxd were dropped deliberately.** IMDb (`tt12149798`) serves an
Amazon "Human Verification" captcha to any automated browser, headless or not -
capturing it would have archived a captcha. Letterboxd no longer has a Petscop
entry at all: `/film/petscop/` is a genuine 404 and a site search for "petscop"
returns zero films. Both were database stubs rather than written coverage, so
nothing of substance is missing.

## Not yet captured

Still outstanding, tracked in the repository root `TODO.md`:

- **mxdwn Games** - cited by Wikipedia, but the site is currently broken
  server-side ("Error establishing a database connection", HTTP 500) in both a
  plain client and a real browser. Use Wayback or retry later.
- **GamePro.de** (German) and **PlaygroundMag** (Spanish) - the two
  foreign-language articles Wikipedia cites. Both plain `http://`; may be dead.
- **An academic paper** - Merabet, UC Irvine HUMCORE 2021, reading Petscop
  through disability studies and trauma. The only scholarly treatment found.
- **Bustle** - a listicle with a passing mention. Low value.

A full inventory of every source the Petscop Wiki cites is at
`Petscop Community/Petscop Wiki/wiki_external_links.json`.

Related material archived elsewhere in this repo:
`Petscop Community/Giftscop - playable Petscop replica/` (the fan replica's
documentation) and `Petscop Community/Investigation videos/` (YouTube analysis).

## Note on captures

Ads, analytics, consent frames and social widgets were blocked at request level
and are intentionally absent. Scripts are stripped from the TV Tropes captures.
Asset folders contain only files the captured page itself references - no
crawling into related articles.

TV Tropes needed a different method from everything else: its Cloudflare edge
blocks headless Chromium outright (an unresolving "Just a moment..."
interstitial, then HTTP 403) while serving the full page to a plain HTTP
client - the exact inverse of Fandom. Those three pages were fetched over plain
HTTP and their PDFs rendered from the saved local copy, so the PDFs show the
real article rather than a challenge screen.

All content belongs to its respective publishers and is preserved here for
archival purposes only.
