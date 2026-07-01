# Contexte du projet

Créer une application où l'on peut référencer des ressources d'apprentissage : articles, vidéos, documentations, tutoriels, cours, etc.

Chaque ressource peut avoir un statut parmi "À faire", "En cours", "Terminé", et peut être consultée dans une page détail.

Chaque ressource appartient à une catégorie, qu'il sera possible de créer, ex : "Algorithmique", "Backend", "Conception"...

Pas d'authentification : on considère que l'application est utilisée par une seule promotion ou une seule personne.

## Frontend

Le frontend a été réalisé en Angular 21

### Build le projet

```
npm install
```

### Lancer le projet

```
npm start
```

Les pages présentes seront les suivantes :

```
/ 			    -> liste de toutes les ressources
/resources/:id  -> détail d'une ressource
/resources/new  -> formulaire de création d'une ressource
/categories     -> liste de toutes les catégorie
/categories/new -> formulaire de création d'une nouvelle catégorie
```
