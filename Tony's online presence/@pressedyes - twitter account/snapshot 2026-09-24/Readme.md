# @pressedyes - tweet snapshot, 2026-09-24

A snapshot of Tony Domenico's X/Twitter account taken **2026-09-24**. This sits
alongside the earlier capture in the parent folder; nothing there was modified.

**499 tweets recovered, spanning 2011-01-16 to 2024-12-16, with 140 media files.**

## What's here

| File | Contents |
|---|---|
| `tweets.md` | All 499 tweets as readable text, oldest first, with dates, permalinks, like/reply counts, media notes and expanded links |
| `tweets.json` | The full API payload per tweet - the complete record |
| `media/` | 140 images and videos at original resolution - all 62 media-bearing tweets covered |
| `deleted tweets (text recovered).md` | The 22 tweets that no longer exist, with text restored where possible |
| `unavailable.json` | Which IDs failed, why, and which source each ID came from |
| `profile.json`, `profile image.jpg` | Account state as of capture |

## Why this exists alongside the old capture

The earlier capture stops at **2021-10-14**. This snapshot adds **92 tweets
after that date** (7 from late 2021, 54 from 2022, 8 from 2023, 23 from 2024) -
the gap the root readme flagged as "Update the Twitter feed from Tony (last
updated: late 2021)".

Per-year counts: 2011 (1), 2013 (21), 2014 (10), 2015 (12), 2016 (27),
2017 (6), 2018 (5), 2019 (93), 2020 (149), 2021 (90), 2022 (54), 2023 (8),
2024 (23).

**Keep the old capture.** 22 of the tweets are now deleted, and 17 of those
survive *only* as text in `../@pressedyes_user_tweets.xlsx`. The 2021 scrape is
the sole record of them - this snapshot cannot recover what X no longer serves.
That is a concrete demonstration that older captures do not become redundant.

## How it was captured, and the honest limits

**No authentication was used.** X's timeline API requires a logged-in session,
but `cdn.syndication.twimg.com/tweet-result` still serves a single tweet's full
payload - text, author, timestamp, counts, quoted tweet, media URLs - to
anonymous clients. So fetching a tweet is solved; *enumerating* the timeline is
not. Tweet IDs were therefore pooled from three independent sources:

| Source | IDs contributed | Recovered |
|---|---|---|
| `@pressedyes_user_tweets.xlsx` (the 2021 scrape) | 424 | 407 |
| Wayback Machine CDX index of archived tweet URLs | 92 | 87 |
| Petscop Wiki citations | 5 | 5 |
| **Total distinct** | **521** | **499** |

### This is not guaranteed complete

Because the timeline could not be enumerated directly, coverage is only as good
as the union of those three sources. Any tweet that was never captured by the
2021 scrape, never archived by the Wayback Machine, and never cited by the wiki
**will be missing and there is no way to detect it from here.** The 2022-2024
tweets in particular came almost entirely from Wayback, which indexes
opportunistically rather than exhaustively, so that range should be treated as
a sample rather than a full record.

To get a provably complete archive you would need an authenticated session (a
logged-in `gallery-dl` or similar against the timeline endpoint), or Tony's own
account data export.

Images are fetched with `?name=orig` so they are the original uploads rather
than resized variants. Videos take the highest-bitrate MP4 variant. Media is
named `<tweet id>_<kind>_<original filename>` so every file traces back to its
tweet.

## Deleted tweets

22 IDs return a tombstone - deleted, or on a protected/suspended account.
Distribution: 2019 (5), 2020 (10), 2021 (5), 2022 (2). Seventeen have their text
recovered from the 2021 spreadsheet; the remaining five came from Wayback CDX,
which recorded that the URL existed but not its contents. For those five, a
Wayback snapshot of the individual tweet page may still hold the text - worth
trying, as it was not attempted here.

Content belongs to Tony Domenico and is preserved here for archival purposes.
