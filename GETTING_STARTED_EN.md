# Getting Started — English Edition

## 1. Install the tools
1. Install the current Node.js LTS release from the official Node.js website.
2. Install Visual Studio Code.
3. Extract `mensi-powerbi-academy.zip` into a folder you can find easily.
4. Open that extracted folder in VS Code (`File → Open Folder`).

## 2. Start the app locally
1. In VS Code, select `Terminal → New Terminal`.
2. Confirm the terminal is at the project root, where the root `package.json` is located.
3. Run these commands one at a time:

```bash
npm install
npm run install:all
npm run dev
```

4. Wait for the Vite and API startup messages.
5. Open `http://localhost:5173` in your browser.
6. If the frontend opens but data cannot load, check that the API is running on `http://localhost:4000` and that no other process is using that port.

## 3. Test the core flows
- Open **Learn Power BI** and review the 15 modules. Pay particular attention to the DAX modules.
- Generate an exam. Each attempt has 50 questions selected from the 520-question bank.
- Submit an exam and verify the score, 700/1,000 pass threshold, answer key, explanations, and domain breakdown.
- Open Exam History and verify that the attempt is listed.
- Refresh the page and test again.

## 4. Build the frontend
Open another terminal at the project root and run:

```bash
npm run build
```

The frontend build output should be created in `client/dist`.

## 5. Publish it online
### API service (Render or equivalent)
1. Push the project to a GitHub repository.
2. Create a new Web Service using the repository.
3. Set the service root directory to `server` (or use the host's monorepo settings).
4. Use `npm install` as the build command and `npm start` as the start command.
5. Set `CLIENT_ORIGIN` to your deployed frontend origin.
6. Deploy and verify `https://YOUR-API-DOMAIN/api/health` returns JSON with `ok: true`.

### Frontend (Vercel or equivalent)
1. Import the same GitHub repository.
2. Set the project root to `client`.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Add `VITE_API_URL` with the base URL of your deployed API, with no trailing slash.
5. Deploy and test exam generation, submission, results, and history on the public site.

### Important production limitation
The current starter saves history to `server/data/history.json`. Many hosting platforms use ephemeral filesystems, and this implementation does not isolate history by user. Before inviting a broad public audience, add authentication and a managed database such as PostgreSQL. Do not store passwords or sensitive personal data in this starter.

## 6. Share it on LinkedIn
After testing the public URL, share the platform as an independent Power BI learning project. State that it contains 520 practice questions and a DAX-focused learning path; do not imply it is an official Microsoft product or that its questions are official exam items.
