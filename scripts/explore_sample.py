import glob
import json
import os
import random


# Just run this script to randomly sample 200 instances out of all instances in
# explorer. A few of these will be displayed on home page randomly on refresh.
SAMPLES_PER_SUBREDDIT = 1000
MAX_CAPTION_LENGTH = 10


if __name__ == "__main__":
    subreddits = sorted(set(
        [p.split("/")[-1].split("_")[0] for p in glob.glob("datasets/redcaps/annotations/*.json")]
    ))

    for subreddit in subreddits:
        # Sample 1000 random annotations for this subreddit.
        anns1k = []

        for year in [2020, 2019, 2018, 2017]:
            # Stop loop if more than 1000 annotations are collected.
            if len(anns1k) > 1000:
                break

            afp = f"datasets/redcaps/annotations/{subreddit}_{year}.json"
            if not os.path.exists(afp):
                break

            anns_year = json.load(open(afp))["annotations"]

            # Shuffle and get 3000 random instances to start with.
            random.shuffle(anns_year)
            anns_year = anns_year[:3000]

            # Keep instances with images hosted on Reddit, and remove very long captions.
            anns_year = [ay for ay in anns_year if "i.redd.it" in ay["url"]]
            anns_year = [ay for ay in anns_year if len(ay["caption"].split()) <= MAX_CAPTION_LENGTH]

            # Get 334 instances after filtering.
            anns_year = anns_year[:334]
            for ay in anns_year:
                anns1k.append(
                    # image_id, url, permalink, caption - saving as many characters as possible.
                    [ay["image_id"], ay["url"].replace("https://i.redd.it/", ""), ay["permalink"].replace("/r/", ""), ay["caption"]]
                )

        anns1k = anns1k[:1000]
        json.dump(anns1k, open(f"explore/{subreddit}.json", "w"))
        print(f"Done {subreddit}!")

    print(f"Explore sampling finished!")
