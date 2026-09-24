# Petscop Wiki - offline archive

A complete offline mirror of the community-run [Petscop Wiki](https://petscop.fandom.com),
captured **2026-09-24**. Verified at **100% coverage** against the live MediaWiki
API: 1,217 of 1,217 pages and 493 of 493 media files.

Open `index.html` to browse. Everything works offline with no network access.

## What's here

| Path | Contents |
|---|---|
| `index.html` | Entry point, all pages grouped by namespace |
| `pages/` | 1,217 rendered pages as standalone HTML |
| `wikitext/` | 1,217 raw wikitext sources - the actual editorial source of truth |
| `media/` | 493 media files at original full resolution |
| `assets/style.css` | Offline stylesheet (see caveat below) |
| `manifest.json` | Every page and file with its revision ID, size and SHA1 |
| `wiki_external_links.json` | Every external URL the wiki cites, mapped to the citing pages |

Both the rendered HTML *and* the wikitext are kept. The HTML is what a reader
wants; the wikitext is what survives a template or CSS change, and it is what
you would need to rebuild the wiki elsewhere.

### Namespaces captured

| Namespace | Pages |
|---|---|
| Main (articles) | 254 |
| Talk | 321 |
| File (description pages) | 507 |
| Template | 62 |
| User blog | 33 |
| Blog comments | 13 |
| Category | 24 |
| Project | 3 |

Deliberately excluded: `User:` (empty profile pages), `MediaWiki:` (site
config), and `Forum:` (empty - Fandom migrated to its Discussions product).

## How it was captured, and why

Fandom's Cloudflare edge returns **HTTP 403 to every `/wiki/` page request**
from a non-browser client. This was verified against four escalating header
sets (user-agent only, plus Accept, plus full browser header set including
`Sec-Fetch-*`, and a cookie-warmed session) - all 403. `load.php` is blocked
the same way.

Two origins do answer plain HTTP:

- `petscop.fandom.com/api.php` - the MediaWiki API
- `static.wikia.nocookie.net/petscop/` - the media CDN

So the archive is built from the API (`action=parse` for rendered HTML,
`action=query&list=allpages` for enumeration, `generator=allimages` for media)
rather than by scraping pages. This needs no browser automation, runs
unattended, and produces cleaner output than scraping would - there are no ad
slots, tracking beacons, or Fandom navigation chrome to strip out.

## Known limitations

**The original skin CSS could not be preserved.** `load.php` is 403-blocked, so
`assets/style.css` is a hand-written stylesheet that approximates a readable
dark wiki layout. Page *content* is complete and faithful; the *visual styling*
is not Fandom's.

**Fandom Discussions are not included.** The modern Fandom forum is a separate
service that is not exposed through the MediaWiki API. The legacy `Forum:`
namespace is empty. If the Petscop community used Discussions, that content is
not captured here and would need a different method.

**34 filenames carry a `~2` suffix.** MediaWiki titles are case-sensitive, so
`TOOL` and `Tool` are two different pages - but Windows filenames are not
case-sensitive, so one would silently overwrite the other. Colliding titles are
disambiguated by appending `~2`. One consequence worth knowing: where a
redirect and a real article collide, the redirect can win the clean filename -
e.g. `pages/TOOL.html` is a redirect stub and `pages/Tool~2.html` is the full
article. Both are preserved; only the naming is awkward.

**Talk-page comment threads have long filenames.** Fandom stores per-comment
subpages (`Talk:X/@comment-<user>-<timestamp>`). These are archived, but the
filenames are truncated at 150 characters to stay within Windows path limits.

## Re-capturing

The build scripts are deliberately not kept here - this repo holds content, not
code. To rebuild or refresh this mirror, the method is documented above and is
straightforward to reimplement: enumerate with
`action=query&list=allpages&apnamespace=<ns>`, render each page with
`action=parse&prop=text|wikitext`, and enumerate media with
`generator=allimages&prop=imageinfo`. Two things will bite anyone who retries
this, both solved in the current capture:

- Log output must tolerate non-cp1252 filenames on a Windows console, or the
  run dies partway through the media phase.
- Filenames need disambiguating case-insensitively before writing, or
  case-variant titles overwrite each other (see the `~2` note above).

`wiki_external_links.json` is a by-product worth keeping: every external URL
the wiki cites, mapped to the pages citing it (150 distinct links). It is the
fastest way to find sources this repo has not yet preserved - notably 37 cited
`@pressedyes` tweets, three of which postdate this repo's Twitter capture.

## Licensing

Petscop Wiki text is community-contributed and licensed **CC-BY-SA**, per
Fandom's terms. Attribution belongs to the Petscop Wiki contributors.
Petscop itself is the work of Tony Domenico; screenshots and media remain his.
This mirror is preservation-only.
