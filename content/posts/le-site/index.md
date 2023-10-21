---
title: Le site
seo_title: Le site
slug: website
date: 2023-10-09T18:20:00.000Z
author:
  - obsidian
---

## 1 semaine

C'est le temps que passé pour pondre ce site
Bien que ce soit prenant, je n'ai pas pu encore trouver de véritable méthode de travail et si je savais où trouver mes infos, j'ai découvert quelques tips pour travailler avec Hugo

Ce site est donc un site statique, je vous renvoie à cet article que j'ai écrit tah l'époque :
[https://site.lafun.fr/siteloweb/](https://site.lafun.fr/siteloweb/)

Mais j'aimerais vous parler du point de vue d'un développeur comment ces projets sont un bonheur

Hugo

Le framework utilisé, Hugo, est un générateur de site a partir d'organisation de fichier et de code. En tant que dev on comprends donc très bien les mécaniques du framework pour pouvoir faire ce que l'on cherche, et le langage Go, s'il n'est pas très élégant dans la page, permet une verbosité correcte tout en reprennant des codes de la ligne de commande, on ne s'y perds donc pas

TinaCMS

J'ai passé près d'une semaine a trouver un CMS qui réponds aux besoins du site

Tina semble tout a fait adapté a son utilisation et a été aussi simple a mettre en place qu'un netlify ou forestry : Un fichier de config reprennant, en JSON, la structure de données du contenu et applique des propriétées sur les champs pour créer les formulaires. Vraiment du gâteau... mais ça a pris des jours pour configurer Tina dans le moule recherché.

Sans connaissance approfondie des modules de déploiement automatique, j'ai du écrire une Pipeline CI/CDqui correspond à l'intégration TinaCMS + Hugo

```yaml
name: Firebase update
run-name: ${{ github.actor }} à lancé une update du site Meridian
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

Il y a donc plusieurs choses : 

* actions/checkout\@v3 permet de lire l'architecture de fichier sur github
* copy image permet de transférer le dossier screenshots de static/uploads/screenshots vers assets/screenshots pour que Hugo puisse les récupérer en tant qu'image object, et les .resize par ex.
* Setup Node sans quoi tina ne peut fonctionner
* Build TinaCMS permet de créer l'administration. Il faut remplir les pré-requis donnés dans [leur guide ](https://tina.io/docs/frameworks/hugo/)et installer node

Pour ça j'ai d'abord dû comprendre que Tina oblige à utiliser le dossier static comme dossier de média (tandis qu'Hugo utilise un dossier assets)\
J'ai donc 
