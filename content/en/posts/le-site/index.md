---
title: Le site
seo_title: Le site
slug: website
date: 2023-10-09T18:20:00.000Z
toc: true
author:
  - obsidian
series: null
---

### 1 week

That's how long it took me to create this site.
Although it's time-consuming, I still haven't been able to find a real working method, and if I knew where to get my info, I've discovered a few tips for working with Hugo

This is a static site, and I refer you to this article I wrote at the time:
[https://site.lafun.fr/siteloweb/](https://site.lafun.fr/siteloweb/)

But I'd like to tell you from a developer's point of view how these projects are a joy

Hugo

The framework used, Hugo, is a site generator based on file and code organization. As a dev, you understand the mechanics of the framework very well, so you can do what you're looking for, and the Go language, while not very elegant on the page, allows for correct verbosity while using command-line codes, so you don't get lost.

### TinaCMS

I spent nearly a week finding a CMS that meets the site's needs.

Tina seems perfectly suited to its purpose and was as easy to set up as netlify or forestry: a config file that takes the content data structure in JSON and applies properties to the fields to create the forms. Really a piece of cake... but it took days to configure Tina in the desired mold.

For example, in Hugo, files are arranged in folders and subfolders.\ folders.
A simple list is a list of .md files containing information.
But if you also want to store images or other content for each article created, you need to create a folder with an index.md file inside. This is called a branch bundle.
And to create a branch bundle with Tina, we need to pass it a function so that it creates our files as index.md in a folder containing the title of our article:

``typescript
{
  name: 'createurs',
    label: 'Createurs',
      path: 'content/createurs',
        ui: {
    filename: {
      // if disabled, the editor can not edit the filename
      readonly: true,
        // Example of using a custom slugify function
        slugify: (values) => {
          // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
          return `${values?.title
            ?.toLowerCase()
            .replace(/ /g, '-') + '/index.md'}`
        },
          }
  },
```

\
\
Already, it matched my site and I could edit articles locally, but what about the online version?

\
Without any in-depth knowledge of automatic deployment modules, I had to write a CI/CD Pipeline to match the TinaCMS + Hugo integration.

yaml
name: Firebase update
run-name: ${{ github.actor }} launched an update of the Meridian site
on:
  push:
    branches:
      - master
jobs:
  deploy:
    runs-on: ubuntu-22.04
    concurrency:
      group: ${{ github.workflow }}-${{ github.ref }}
    steps:
      - uses: actions/checkout@v3

      - name: Copy images
        run: cp -r static/uploads/screenshots assets/images

      - name: Setup Node
        run: npm ci
        
      - name: Build TinaCMS
        env:
          TINA_PUBLIC_CLIENT_ID: ${{ secrets.TINA_PUBLIC_CLIENT_ID }}
          TINA_TOKEN: ${{ secrets.TINA_TOKEN }}
        run: npx tinacms build

      - name: Hugo setup
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.119.0'
          extended: true

      - name: Build
        run: hugo --minify
        
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_MERIDIAN_CORP }}'
          projectId: meridian-corp
          channelId: live
```

So there are several things:

* actions/checkout\@v3 reads the file architecture on github
* copy image transfers the screenshots folder from static/uploads/screenshots to assets/screenshots so that Hugo can retrieve them as image objects, and .resize them for example (he can't with the static folder).
* Setup Node, without which tina won't work
* Build TinaCMS is used to create the administration. You need to meet the prerequisites given in [their guide ](https://tina.io/docs/frameworks/hugo/) and install node.
* Hugo Setup + Build to create the folder
* Firebase lets you deploy my site automatically, manage production...

### Domain

Hosted at Gandi, I found a meridian-corp.org site available

Sounds good... .org as an organization cut off from political members. A place that transcends countries.

All we had to do was match the DNS keys between Gandi and Firebase, and the deployment was complete!

And that's how this site was born.
