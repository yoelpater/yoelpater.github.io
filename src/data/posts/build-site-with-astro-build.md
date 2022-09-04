---
pubDate: "Sep 04 2022"
title: "Build Site with Astro Build. How does it feels?"
description: "How I make this blog website with Astro"
excerpt: "Despite this, Astro Build promises able to strips all the js in production and only include js when interactivity is needed. This feature intrigue me to try out astro. This writing is about my opinion about Astro."
tags:
  - Astro
  - Javascript
  - Journal
  - Web
---



## Yet another JS framework?

Despite this, Astro Build promises able to strips all the js in production and only include js when interactivity is needed. This feature intrigue me to try out astro. This writing is about my opinion about Astro.

## Getting started with Astro

I think the official docs for getting starting is clear on guiding you to make your first Astro Website. So, I'll just reference it [Link to Official Astro Getting Started](https://docs.astro.build/en/getting-started/).

## First Impression

The first feeling when trying Astro's default configuration, the development experience is similar to when developing static sites with Jekyll and Hugo. So there is a template and a collection of markdown files as the content source. What makes Astro different is Astro makes it feasible to manage JS when we need it. Moreover, with its island architecture, for larger project, this opens the option to do a Micro-Frontend style development. The drawback is sharing state between island might not be straightforward.

## Astro is not only a static site generator

The default option is indeed static site, where every changes you made, Astro will compile all the pages as a static HTML. Static sites is actually ideal for content based websites. As it is simpler to distribute it on the edge. Everything is precompiled so no rebuilding any HTML when user request a resource. Static site has more option for deploying and usually cheaper. For example, this website is hosted on Github Pages which actually is free [Link to how to deploy Astro to Github Pages](https://docs.astro.build/en/guides/deploy/github/). Then, if server side rendering is needed, Astro is able to support that too. But then it need some kind of server to do the server side HTML render.
