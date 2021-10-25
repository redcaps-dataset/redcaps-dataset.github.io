import json

# Just run this script to randomly sample 200 instances out of all instances in
# explorer. A few of these will be displayed on home page randomly on refresh.
TOPK_SUBREDDITS = 50
SAMPLES_PER_SUBREDDIT = 4
# Total sample size for homepage = TOPK_SUBREDDITS * SAMPLES_PER_SUBREDDIT

if __name__ == "__main__":
    # Gather top-K largest subreddits from instance counts file.
    top_subs = [s[0] for s in json.load(open("static/instance_counts.json"))]
    top_subs = top_subs[:TOPK_SUBREDDITS]

    # Make a sample of homepage instances.
    homepage_sample = []
    for subreddit in top_subs:

        # Get a few samples from this subreddit.
        annotations = json.load(open(f"static/explore/{subreddit}.json"))
        annotations = annotations[:SAMPLES_PER_SUBREDDIT]

        for ann in annotations:
            # Add subreddit name in the end.
            ann.append(subreddit)

        homepage_sample.extend(annotations)

    json.dump(homepage_sample, open(f"static/homepage_sample.json", "w"))
    print(f"Home page sampling finished!")
