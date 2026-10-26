# Guide pas à pas — MENSI MOHAMED AMINE Power BI Academy

Ce guide est destiné à une personne qui démarre avec VS Code, GitHub et le déploiement web.

## A. Installer les outils (une seule fois)

1. Ouvrez votre navigateur et allez sur https://nodejs.org/.
2. Téléchargez la version **LTS** de Node.js, lancez le programme et gardez les options par défaut.
3. Allez sur https://code.visualstudio.com/ et installez Visual Studio Code.
4. Allez sur https://git-scm.com/downloads et installez Git.
5. Redémarrez VS Code après l'installation.

## B. Ouvrir et lancer le projet sur votre PC

1. Téléchargez puis décompressez `mensi-powerbi-academy.zip` dans un dossier facile à retrouver, par exemple `Documents`.
2. Ouvrez VS Code.
3. Cliquez sur **File → Open Folder** (Fichier → Ouvrir un dossier).
4. Sélectionnez le dossier `mensi-powerbi-academy` décompressé, puis cliquez sur **Select Folder**.
5. Dans VS Code, cliquez sur **Terminal → New Terminal** (Terminal → Nouveau terminal).
6. Vérifiez que le terminal se trouve dans le dossier racine `mensi-powerbi-academy`.
7. Tapez cette commande puis appuyez sur Entrée :

   ```bash
   npm install
   ```

8. Quand la commande se termine, tapez :

   ```bash
   npm run install:all
   ```

9. Une fois l'installation terminée, tapez :

   ```bash
   npm run dev
   ```

10. Le terminal doit afficher une adresse Vite, normalement `http://localhost:5173`. Maintenez **Ctrl** et cliquez sur cette adresse ou copiez-la dans Chrome.
11. Gardez le terminal ouvert pendant que vous utilisez le site. Le backend tourne sur `http://localhost:4000` et le frontend sur `http://localhost:5173`.
12. Pour arrêter le serveur, cliquez dans le terminal et appuyez sur `Ctrl + C`.

### Si une commande échoue
- Vérifiez que Node.js est installé en tapant `node -v`, puis `npm -v`.
- Fermez et rouvrez VS Code après avoir installé Node.js.
- Lancez les commandes dans le dossier qui contient le fichier `package.json` principal.
- Si le port 4000 ou 5173 est déjà utilisé, arrêtez l'autre serveur ou changez le port.

## C. Ajouter le projet à GitHub

1. Connectez-vous à https://github.com/ ou créez un compte.
2. Cliquez sur le signe **+** en haut à droite, puis **New repository**.
3. Nom du dépôt : `mensi-powerbi-academy`.
4. Choisissez **Public** si vous voulez que les visiteurs puissent consulter le code.
5. Cliquez sur **Create repository**. Pour ce projet, ne cochez pas l'option qui crée automatiquement un README : le projet en contient déjà un.
6. Dans VS Code, cliquez sur **Terminal → New Terminal**.
7. Exécutez les commandes suivantes depuis le dossier racine, en remplaçant `VOTRE-PSEUDO` par votre nom d'utilisateur GitHub :

   ```bash
   git init
   git add .
   git commit -m "Initial Power BI Academy platform"
   git branch -M main
   git remote add origin https://github.com/VOTRE-PSEUDO/mensi-powerbi-academy.git
   git push -u origin main
   ```

8. Si Git demande de vous connecter, suivez la fenêtre de connexion du navigateur.
9. Actualisez la page du dépôt GitHub : vos fichiers doivent apparaître.

## D. Publier le site pour obtenir un vrai lien public

**Important : un dépôt GitHub n'est pas lui-même un site public fonctionnel.** GitHub Pages ne fait pas tourner le serveur Express. Il faut publier le frontend et le backend séparément.

### Étape D1 — Publier le backend sur Render

1. Créez un compte sur https://render.com/.
2. Sur le tableau de bord, cliquez **New + → Web Service**.
3. Connectez votre compte GitHub et choisissez le dépôt `mensi-powerbi-academy`.
4. Donnez un nom comme `mensi-powerbi-academy-api`.
5. Dans **Root Directory**, entrez `server`.
6. Choisissez **Node** comme environnement.
7. Dans **Build Command**, entrez `npm install`.
8. Dans **Start Command**, entrez `npm start`.
9. Ajoutez la variable d'environnement `CLIENT_ORIGIN` avec l'URL frontend Vercel une fois celle-ci créée. Vous pouvez revenir la renseigner après l'étape D2.
10. Cliquez **Create Web Service** et attendez la fin du déploiement.
11. Copiez l'URL Render, par exemple `https://votre-api.onrender.com`.
12. Testez `https://votre-api.onrender.com/api/health` : une réponse JSON indiquant `ok: true` doit apparaître.

> Limite du prototype : l'historique est stocké dans un fichier JSON local. Les fichiers locaux d'un hébergeur peuvent être éphémères et ne constituent pas un stockage fiable multi-utilisateurs. Avant un lancement public, configurez PostgreSQL et l'authentification.

### Étape D2 — Publier le frontend sur Vercel

1. Créez un compte sur https://vercel.com/.
2. Cliquez **Add New → Project** et importez le dépôt GitHub.
3. Dans **Root Directory**, sélectionnez `client`.
4. Framework Preset : **Vite**.
5. Build Command : `npm run build`.
6. Output Directory : `dist`.
7. Dans **Environment Variables**, ajoutez :
   - Name : `VITE_API_URL`
   - Value : l'URL Render copiée à l'étape D1, sans slash final, par exemple `https://votre-api.onrender.com`
8. Cliquez **Deploy**.
9. Quand Vercel affiche l'URL de production, ouvrez-la et testez l'accueil.
10. Retournez dans Render → votre service → **Environment** et définissez `CLIENT_ORIGIN` avec l'URL Vercel exacte. Redéployez le backend si nécessaire.
11. Testez un examen, terminez-le, puis vérifiez la correction et l'historique.

Vous pouvez alors partager **l'URL Vercel** dans LinkedIn. C'est ce lien que les gens ouvrent pour utiliser la plateforme. Le lien GitHub sert à consulter ou récupérer le code.

## E. Où ajouter des questions

1. Dans VS Code, ouvrez `server/data/questions.js`.
2. Chaque question contient un identifiant unique, un domaine, un énoncé, quatre options, l'index de la bonne réponse et une explication.
3. Copiez la structure d'une question et créez de nouvelles questions originales avec des identifiants uniques.
4. Gardez la bonne réponse dans `answer` sous forme d'index : `0` = option A, `1` = B, `2` = C, `3` = D.
5. Vérifiez les réponses avec la documentation Microsoft actuelle avant de publier.
6. Le simulateur complet demande au moins 14 questions dans « Préparer les données », 14 dans « Modéliser les données », 13 dans « Visualiser et analyser les données » et 9 dans « Gérer et sécuriser Power BI ».
7. Une fois les questions ajoutées, testez un examen complet, toutes les corrections et plusieurs tentatives.

## F. Avant de partager sur LinkedIn

- [ ] Au moins 500 questions originales et relues, sans doublons dans un même examen.
- [ ] Les réponses ont été vérifiées avec les ressources Microsoft actuelles.
- [ ] L'interface et les corrections fonctionnent sur mobile et ordinateur.
- [ ] Les tentatives de différents utilisateurs ne sont pas mélangées : ajoutez comptes utilisateurs et base de données.
- [ ] La politique de confidentialité explique quelles données sont enregistrées.
- [ ] Les images/illustrations utilisées sont originales ou autorisées.
- [ ] Le site indique qu'il s'agit d'un projet indépendant, non affilié à Microsoft.
