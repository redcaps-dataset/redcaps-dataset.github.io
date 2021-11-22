---
layout: container
urltitle:  "Download · RedCaps"
title: "Download · RedCaps"
permalink: "/download"
---

<!-- Download page can use CSS from home page. -->
<link rel="stylesheet" type="text/css" href="/static/css/home.css">

<h2 class="homesec-title">Download</h2>

**Current dataset version:** v1.0 (released in October 2021)

<a href="//www.dropbox.com/s/cqtdpsl4hewlli1/redcaps_v1.0_annotations.zip?dl=0" class="btn btn-danger" style="background-color: #d45855">
Click here to download v1.0 annotations (ZIP file)
</a>

This ZIP file contains JSON files containing image post metadata of RedCaps instances,
along with <a href="//creativecommons.org/licenses/by/4.0/legalcode" target="_blank">CC-BY 4.0 license</a>
and <a href="//www.reddit.com/wiki/api" target="_blank">Reddit API terms of use</a>.
The expected file structure after extraction is as follows:

```text
- LICENSE.txt
- TERMSOFUSE.txt
- annotations/
  ├── abandoned_2017.json
  ├── abandoned_2018.json
  ├── ...
  ├── itookapicture_2019.json
  ├── itookapicture_2020.json
  ├── ...
  ├── <subreddit>_<year>.json
  └── ...
```

<br />
**Note:** We do not distribute image files as we do not legally own them.
The annotation files contain image URLs -- we recommend downloading images using the
<a href="//github.com/redcaps-dataset/redcaps-downloader" target="_blank">redcaps-downloader tool</a>.


<hr>

<h2 class="homesec-title">Note for dataset users</h2>

**Terms of use:**
Uses of RedCaps are subject to <a href="//www.reddit.com/wiki/api-terms" target="_blank">Reddit API terms</a>.
Users must comply with <a href="//www.redditinc.com/policies" target="_blank">Reddit User Agreeement, Content Policy, and Privacy Policy</a>.

**Usage Restrictions:**
RedCaps should only be used for non-commercial research.
RedCaps should not be used for any tasks that involve identifying features related to people
(facial recognition, gender, age, ethnicity identification, etc.)
or make decisions that impact people (mortgages, job applications, criminal sentences;
or moderation decisions about user-uploaded data that could result in bans from a website).
Any commercial and for-profit uses of RedCaps are restricted –
it should not be used to train models that will be deployed in production systems as part of a product offered by businesses or government agencies

Refer to the datasheet in the paper more details.

<hr>

<h2 class="homesec-title">Image removal request</h2>

<!-- We undertook several measures to mitigate potential harms and risks arising from datasets collected from the internet. -->
Did you find any problematic image in RedCaps that should be removed? Report it to us using this link!
We will review all requests and remove problematic image in the next version release.

<a href="//forms.gle/2Us8D1FxXpEdWHi17" class="btn btn-danger" style="background-color: #d45855">
Image removal request form
</a>


<hr>

<h2 class="homesec-title">Annotation format</h2>

Each JSON file contains metadata of image posts from a single subreddit,
submitted by Reddit users in one or more years. For example, `itookapicture_2018.json`
contains image posts from r/itookapicture submitted between Jan 1 - Dec 31, 2018.
Annotation files named `*_2017.json` contain posts between (2008 - 2017).
Each JSON file follows this schema:

```json
{
  "info": {
    "start_date": "YYYY-MM-DD",  // start date of image posts in this file
    "end_date": "YYYY-MM-DD",    // end date of image posts in this file
    "url": "https://redcaps.xyz",
    "version": 1.0,
  },
  "annotations": [
    {
      // Example (metadata is not real)
      "image_id": "ab3d5f",
      "author": "johndoe",
      "url": "https://i.redd.it/abcdef.jpg",
      "raw_caption": "ITAP of my cat [4000x4000]",
      "caption": "itap of my cat",  // after applying text filtering to 'raw_caption'
      "subreddit": "itookapicture",
      "score": 15,  // upvotes - downvotes
      "created_utc": 160256789,  // UTC epoch when the post was submitted
      "permalink": "/r/itookapicture/itap_of_my_cat",
    },
    {
      // ...
    }
  ]
}
```
