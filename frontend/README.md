# Frontend - Bio Portfolio (Vite + React)

This is the client application built with Vite + React.

## Development
Run the dev server with:

```powershell
npm install
npm run dev
```

The Vite dev server runs at http://localhost:3000 by default.

## Docker
Build and run the frontend container:

```powershell
docker build -t bio-frontend:latest .
docker run -p 3000:80 bio-frontend:latest
```

This serves the static build on port 3000 and ships built files into Nginx.

## Build
```powershell
npm run build
```

Built files will be in `dist/`.
