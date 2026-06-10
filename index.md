---
layout: default
title: About & News
active: about
permalink: /
---

<section>
  <h2 class="section-title">About the Lab</h2>
  <div class="notice">
    <p>The Miller PASTA Lab studies how stars live and die. We focus on core-collapse and thermonuclear supernovae, rare explosive transients, and variable stars. Our group blends observational surveys (ZTF, LS4) with AI and statistical methods to discover and characterize events in real time.</p>
  </div>
</section>

<section>
  <h2 class="section-title">News</h2>
  <div class="grid">
    {% for post in site.posts limit: 8 %}
    <div class="card">
      <h3><a href="{% if post.external_url %}{{ post.external_url }}{% else %}{{ post.url | relative_url }}{% endif %}" {% if post.external_url %}target="_blank" rel="noopener noreferrer"{% endif %}>{{ post.title }}</a></h3>
      <p class="meta">{{ post.date | date: '%B %-d, %Y' }}</p>
      {% if post.excerpt %}{{ post.excerpt }}{% endif %}
    </div>
    {% endfor %}
  </div>
</section>
