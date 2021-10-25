---
layout: default
permalink: "/"
---

<link rel="stylesheet" type="text/css" href="/static/css/home.css">

{% include app-homepage.html %}

<span id="teaser-caption" style="text-align: center">
  Explore more instances in RedCaps <a href="/explore">here</a>!
</span>

<!-- --------------------------------------------------------------------- -->
<!--                              STATS                                    -->
<!-- --------------------------------------------------------------------- -->
<div class="row">
    <style>
      .col {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
      .stat-number {
        color: #e53935;
        font-weight: 700;
        font-size: 2.5rem;
      }
      .stat-subtext {
        font-size: 1.25rem;
      }
    </style>
    <div class="col" style="text-align: center">
        <span class="stat-number">12M+</span><br/>
        <span class="stat-subtext">Image-text Pairs</span>
    </div>
    <div class="col" style="text-align: center">
        <span class="stat-number">350</span><br/>
        <span class="stat-subtext">Subreddits</span>
    </div>
    <div class="col" style="text-align: center">
        <span class="stat-number">13</span><br/>
        <span class="stat-subtext">Years</span>
    </div>
</div>

<!-- --------------------------------------------------------------------- -->
<!--                              PAPER                                    -->
<!-- --------------------------------------------------------------------- -->
<div class="row">
  <h2 class="anchor" id="paper">Paper</h2>

  <div class="paper-container" style="horizontal-align: center">
    <span class="paper-title">RedCaps: web-curated image-text data created <i>by the people, for the people</i></span>
    <br/>
    <span class="paper-authors">Karan Desai, Gaurav Kaul, Zubin Aysola, Justin Johnson</span>
    <br>
    <div class="paper-banner col-md-12 col-sm-12 col-xs-12">
      <a href="/paper" target="_blank"> <img src="static/img/paper/redcaps_banner.png" alt="redcaps paper" title="redcaps paper"/> </a>
    </div>
  </div>
</div>

<h2 class="anchor" id="paper">People</h2>
<div class="people-container">
{% include people.html %}
</div>
