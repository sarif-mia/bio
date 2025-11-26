# Frontend - Bio Portfolio (Vite + React)

Vite + React client application.

## Development

```bash
npm install
npm run dev
```

Dev server runs at http://localhost:3000

## Docker

```bash
docker build -t bio-frontend:latest .
docker run -p 3000:80 bio-frontend:latest
```

## Build

```bash
npm run build
```

Built files are in `dist/`.