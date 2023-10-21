---
title: Le site
seo_title: Le site
slug: website
date: 2023-10-09T18:20:00.000Z
author:
  - obsidian
---

### 1 semaine

C'est le temps que passé pour pondre ce site
Bien que ce soit prenant, je n'ai pas pu encore trouver de véritable méthode de travail et si je savais où trouver mes infos, j'ai découvert quelques tips pour travailler avec Hugo

Ce site est donc un site statique, je vous renvoie à cet article que j'ai écrit tah l'époque :
[https://site.lafun.fr/siteloweb/](https://site.lafun.fr/siteloweb/)

Mais j'aimerais vous parler du point de vue d'un développeur comment ces projets sont un bonheur

Hugo

Le framework utilisé, Hugo, est un générateur de site a partir d'organisation de fichier et de code. En tant que dev on comprends donc très bien les mécaniques du framework pour pouvoir faire ce que l'on cherche, et le langage Go, s'il n'est pas très élégant dans la page, permet une verbosité correcte tout en reprennant des codes de la ligne de commande, on ne s'y perds donc pas

### TinaCMS

J'ai passé près d'une semaine a trouver un CMS qui réponds aux besoins du site

Tina semble tout a fait adapté a son utilisation et a été aussi simple a mettre en place qu'un netlify ou forestry : Un fichier de config reprennant, en JSON, la structure de données du contenu et applique des propriétées sur les champs pour créer les formulaires. Vraiment du gâteau... mais ça a pris des jours pour configurer Tina dans le moule recherché.

Par exemple, sous Hugo, les fichiers sont rangés en dossiers et sous dossiers.\
Une liste simple est une liste de fichier .md contenant les informations \
Mais lorsque l'on veut également stocker des images ou autres contenus a chaque article créé il faut créer un dossier avec à l'intérieur un index.md. C'est nommé un branch bundle\
Et pour créer un branch bundle avec Tina, il faut lui faire passer une fonction pour qu'il créer nos fichiers comme des index.md dans un dossier comprenant le titre de notre article : 

```typescript
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
Déjà, cela correspondait a mon site et je pouvait éditer des articles en local, mais qu'en est-il de la version en ligne ?

\
Sans connaissance approfondie des modules de déploiement automatique, il a fallu écrire une Pipeline CI/CD qui correspond à l'intégration TinaCMS + Hugo

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
* copy image permet de transférer le dossier screenshots de static/uploads/screenshots vers assets/screenshots pour que Hugo puisse les récupérer en tant qu'image object, et les .resize par ex. (il ne peut pas avec le dossier static)
* Setup Node sans quoi tina ne peut fonctionner
* Build TinaCMS permet de créer l'administration. Il faut remplir les pré-requis donnés dans [leur guide ](https://tina.io/docs/frameworks/hugo/)et installer node
* Hugo Setup + Build permettent de créer le dossier
* Firebase permet de déployer mon site automatiquement, gérer la mise production..

### Domaine

Hébérgé chez Gandi, j'ai trouvé un site meridian-corp.org disponible

Cela sonne bien... .org comme une organisation coupé des membres politiques. Un endroit qui dépasse les pays.

Il a ensuite suffit de faire correspondre les clés DNS entre Gandi et Firebase pour que le déploiement s'effectue correctement !

Et voilà comment ce site est né.
