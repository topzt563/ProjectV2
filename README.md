# ProjectV2

Simple backend for GitVisual.TH.

## Project structure

- `backend/` - Node.js backend files (`server.js`, `package.json`)
- `frontend/pages/` - HTML page files (`home.html`, `lesson1.html`)
- `frontend/assets/` - Static assets (`style.css`, `home.js`, images)
- `README.md` - Project instructions

## Setup

1. Install Node.js if it is not already installed.
2. Open a terminal in the `backend/` folder.
3. Run `npm install`.
4. Start the server with `npm start`.

## Backend features

- Serves the frontend files from the `frontend/` folder.
- Provides API endpoints:
  - `GET /api/status`
  - `GET /api/outline`

## Access

Open `http://localhost:3000/` or `http://localhost:3000/pages/home.html` in your browser.
