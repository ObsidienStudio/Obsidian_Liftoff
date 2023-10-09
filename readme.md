## Site de la Meridian Corp

Ce site est a destination des follower de la Méridian Corp.

### Template based
Le site est crée avec un minimum de modifications sur un theme et peut être réutiliser pour les sites personnels des collaborateurs de la Meridian Corp

### Hugo
Créer avec Hugo, c'est donc uniquement le dossier public qui contient le site, le reste des fichiers servent a la génération de ce dossier "public"

### Usage
Facile d'éditer le contenu du site grâce a Prose, l'éditeur Markdown simple a mettre en place et a utiliser.\
Il suffit de se rendre sur la page voulue (dans le dossier **content**) et de modifier le markdown (voir "[comment écrire en markdown ?](https://docs.roadiz.io/fr/latest/user/write-in-markdown/index.html)") pour que cela corresponde a ce que l'on veut.\
On peut même ajouter des images dans les dossiers et, selon les configuration du site, elles s'afficheront toutes seules ou bien vous pourrez les ajouter où vous voulez dans le texte de la page ([inserer une image dans markdown](https://code-garage.fr/blog/comment-ajouter-une-image-dans-un-fichier-mardown/))\
Il est également possible d'éditer les config dans /config, ou bien d'ajouter une page complète au site via le dossier /static\

Dans tout les cas il suffit de rentrer du texte, de sauvegarder la page et l'automatisme fera le reste pour déployer le site avec les modifications (prends toujours quelques dizaines de secondes)\

La disposition des données sur le site est géré par le dossier /layout qui n'est pas accessible depuis Prose.io, les demande de modifications de template doivent être soumises a l'adresse MeridianCorpTV@gmail.com
### Organisation du dossier :

/archetype : ??\
/assets : JS / CSS\
/config : .toml\
/content : .md, contenus qui permettent de créer les pages\
/data : ??\
/layouts : templates html\
/resources : scss et autres fichiers générés\
/static : fichiers accessibles sur tout le site ou pages seules\
/theme : ne pas toucher, modèle du theme avant modifications (Liftoff -> https://github.com/wjh18/hugo-liftoff/wiki)\
/public : Site internet static


_prose.yml = config backend (Prose.io)


### Commandes
> (hugo) -and (firebase deploy)
