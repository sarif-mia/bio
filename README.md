# Bio Portfolio (Vite + Flask)

This repository is a full-stack project with a Vite/React frontend and a Flask backend. The project is configured to be deployed to Netlify (frontend) and Netlify Functions (backend), and this repo also contains Docker configurations to run locally using Docker and Docker Compose.

## Project structure
- backend/ - Flask backend
- frontend/ - Vite + React frontend
- docker-compose.yml - Run frontend and backend together locally

## Running with Docker
1. Build and start containers using Docker Compose:

```powershell
# From the repo root
docker compose up --build -d
```

2. Open the frontend: http://localhost:3000
3. API is exposed at: http://localhost:5000/api/hello

## Building images manually
```powershell
docker build -t bio-backend:latest ./backend
docker build -t bio-frontend:latest ./frontend
```

## Pushing to GitHub
```powershell
# Stage, commit and push
git add .
git commit -m "Add Dockerfiles, docker-compose and READMEs"
git push origin master
```

---

If you prefer deploying to Netlify, the `netlify.toml` file is already configured to build the frontend and redirect API calls to the backend as Netlify Functions.
