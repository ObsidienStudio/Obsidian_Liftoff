# Comment écrire un article ?


## Avant-propos
Avant de vous expliquer en détail comment écrire un article (screens plus bas), je pense qu'il est meilleur de comprendre les outils sur lesquels on travaille: 

**Prose.io** est un outil d'écriture et de mise en forme de l'architecture des dossiers qui servent a la génération du site. L'outil ne fait rien de plus que de faire un bel affichage des fichiers et de leurs propriétées.

L'affichage des meta-données (propriétées de la page) est contrôlé par un fichier de configuration se trouvant à la racine du site : _prose.yml. Je peux éditer ce fichier pour ajouter / retirer / modifier les entêtes des documents si besoin en suivant les indications de [cette documentation](https://github.com/prose/prose/wiki/Prose-Configuration#options)

Github, le site sur lequel vous avez dû vous connecter pour accéder au dossier depuis prose.io, est un site fait pour les développeurs permettant d'hébérger un dossier, et contenant des fonctions permettant par exemple d'historiser les versions du dossier a chaque modification (permettant de revenir en arrière au besoin) ou encore d'executer des script à chaque modification détéctée

Cet outil est très complet et pour le comprendre il faut comprendre Git. Je vous laisse vous renseigner au besoin, mais ce que vous avez besoin de savoir c'est qu'une fois le contenu modifié sur Prose, c'est le contenu du dossier sur github qui est modifié

Un automatisme s'active alors, regénérant le site et l'envoyant de nouveau sur l'adresse du site internet. Si la régénération échoue, le site ne sera pas mis à jour.

Hugo est le framework (outil) qui nous permet de construire le site. Pour que Hugo fonctionne, il faut respecter ses pré-requis et son fonctionnement. Les voici : 
- Les fichiers présents dans _/content_ créent des pages ou des listes aux adresses indiquées (content/jeux/dofus/index.md -> meridian-corp.web.app/content/jeux/dofus)
- Les page seules sont créées a partir des fichiers 'index.md' tandis que les listes de page sont créées a partir des fichiers '_index.md'
- Les en-têtes des fichiers doivent être renseignées sans quoi les pages ne seront pas publiées
- Le corps de texte peut être écrit en markdown ou bien en html
- Hugo lit le système de fichier pour comprendre l'architecture attendue du site, puis transforme les fichier markdown en page html d'après un modèle mettant en page les informations et le corps de texte

## Ecrire un article 
Pour écrire un article sur le site :
1 - Ouvrez le dossier 'content' dans lequel on trouve les pages du site 
![]({{site.baseurl}}/assets/images/readme/content.png)
2 - 
