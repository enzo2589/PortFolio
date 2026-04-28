# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# PortFolio

## Journal des modifications

- Remplacement de l'ancien tableau des competences par le nouveau PDF fourni : `public/tableau-competences-epreuve-e4.pdf`.
- Mise a jour de la constante de telechargement dans `src/constants/downloads.js` vers `TABLEAU_COMPETENCES_E4_PDF`.
- Mise a jour des liens de consultation/telechargement et des libelles "Epreuve E4" dans `src/pages/Skills.jsx` et `src/components/SkillsSection.jsx`.
- Correction suite a erreur : remplacement par le PDF `public/tableau-synthese-competences-e5-annexe8.pdf`.
- Retour de la constante vers `TABLEAU_SYNTHESE_COMPETENCES_E5_PDF` dans `src/constants/downloads.js`.
- Mise a jour des libelles et liens vers "Annexe 8 - Epreuve E5" dans `src/pages/Skills.jsx` et `src/components/SkillsSection.jsx`.
- Adaptation du projet Divinouz dans `src/data/projectsData.js` avec un nouveau texte structure (resume, contexte technique et travail en duo).
- Ajout d'une justification explicite des competences E4/E5 (1.1, 1.4, 1.5, 1.6) sur la page detail projet.
- Integration de 2 preuves visuelles (`src/img/divinouze-preuve-presentation.png` et `src/img/divinouze-preuve-auth.png`) affichees dans la section "Preuves / Traces".
- Ajout d'une section "Sources techniques consultees" (FileZilla, sessions PHP, password_hash) dans la fiche projet.
- Mise a jour de l'affichage de `src/pages/ProjectDetail.jsx` et du style associe `src/style/ProjectDetail.css` pour presenter proprement les preuves et les justifications.
- Adaptation du projet `Workshop 2024 - Machine de Rube Goldberg & IoT` avec texte complet, justification de la competence 1.4 et ajout de la preuve visuelle `src/img/workshop-2024-preuve.png`.
- Adaptation du projet `Gestion BDD Circuits Touristiques` avec resume, justifications des competences 1.1/1.4/1.6, deux preuves visuelles (`src/img/gestion-bdd-circuits-interface.png`, `src/img/gestion-bdd-circuits-schema.png`) et liens de documentation PHP/SQL.
- Ajout des deux tableaux de competences (E4 et E5) dans les fiches projets Divinouz, Workshop 2024 et Gestion BDD, via une nouvelle section "Tableaux de competences associes" dans `src/pages/ProjectDetail.jsx`.
- Adaptation du projet `To-Do List PHP (Environnement Local)` avec nouveau resume, justification de la competence 1.1, preuves visuelles et lien GitHub.
- Adaptation du projet `Workshop 2025 - Boite a cigares James Bond (IoT)` avec justification de la competence 1.4 et preuve visuelle.
- Ajout du projet `Application Mobile Supanote (Flutter)` avec justifications des competences 1.1 et 1.5, integration de preuves (mobile, schema, Supabase), sources techniques et lien GitHub.
- Ajout des deux tableaux de competences E4/E5 pour To-Do List PHP, Workshop 2025 et Supanote.
