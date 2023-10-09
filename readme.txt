## Site de la Meridian Corp

Ce site est a destination des follower de la Méridian Corp.

### Template based
Le site est crée avec un minimum de modifications sur un theme et peut être réutiliser pour les sites personnels des collaborateurs de la Meridian Corp

### Hugo
Créer avec Hugo, c'est donc uniquement le dossier public qui contient le site, le reste des fichiers servent a la génération de ce dossier "public"

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
