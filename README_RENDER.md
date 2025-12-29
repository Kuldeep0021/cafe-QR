Render deployment notes
-----------------------

Backend (recommended as a Web Service):
- Root directory: optional — this repository contains a root `package.json` that runs the server automatically.
- Build command (Render default is fine): `npm install` (root `postinstall` will install server deps).
- Start command: `npm start`
- Env vars to add on Render:
  - `MONGO_URI` — your MongoDB connection string
  - `FRONTEND_URLS` — comma-separated allowed frontend origins (e.g. `https://yourfrontend.onrender.com,http://localhost:5173`)
  - Any other keys used in `.env`

Alternative (if you prefer using service Root Directory):
- Set Root Directory = `server`
- Build Command: `npm install`
- Start Command: `npm start`

Frontend (Static Site):
- Create a Static Site or Web Service pointing to `client` folder.
- Build command: `npm install && npm run build`
- Publish directory: `dist`

Notes:
- We updated `server/index.js` to read allowed origins from `FRONTEND_URLS` to avoid hardcoding.
- If Render runs `npm install` at repo root, the root `package.json`'s `postinstall` will install server dependencies.
