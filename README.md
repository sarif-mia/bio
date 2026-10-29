# Bio Portfolio

A full-stack personal portfolio: **React + Vite** frontend and a **Flask** API.

- Responsive, accessible UI with light/dark theme, mobile navigation, project filters and detail modals
- Contact form with client- and server-side validation
- Single content file — edit [`frontend/src/data/portfolio.js`](frontend/src/data/portfolio.js) to personalise everything
- Works without the API (falls back to bundled project data), so it can be deployed as a static site

## Project structure

```
bio/
├── backend/                 Flask API
│   ├── app/
│   │   ├── __init__.py      App factory, CORS, JSON error handlers
│   │   ├── routes.py        /api endpoints
│   │   ├── data.py          Project data
│   │   └── validation.py    Contact form validation
│   ├── tests/               pytest suite
│   └── wsgi.py              Entry point (dev server / gunicorn)
├── frontend/                React + Vite app
│   └── src/
│       ├── components/
│       │   ├── layout/      Header, Footer
│       │   ├── sections/    Hero, About, Projects, Services, Experience, Contact
│       │   └── ui/          Icon, Reveal, SectionHeading
│       ├── data/            portfolio.js — all site content
│       ├── hooks/           useInView, useActiveSection, useTheme
│       ├── services/        API client
│       └── styles/          Global styles & design tokens
└── docker-compose.yml
```

## Run locally

**Backend** (Python 3.9+)

```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements-dev.txt
python wsgi.py            # http://localhost:5000/api/health
```

**Frontend** (Node 18+), in a second terminal

```bash
cd frontend
npm install
npm run dev               # http://localhost:3000 — /api is proxied to :5000
```

**Or with Docker**

```bash
docker compose up --build   # http://localhost:3000
```

## Tests

```bash
cd backend && pytest
```

## API

| Method | Endpoint             | Description                    |
| ------ | -------------------- | ------------------------------ |
| GET    | `/api/health`        | Health check                   |
| GET    | `/api/projects`      | List projects                  |
| GET    | `/api/projects/<id>` | Single project                 |
| POST   | `/api/contact`       | Submit contact form (validated) |

## Deployment

`netlify.toml` deploys the frontend as a static site. To enable the contact form in production,
host the Flask API (e.g. Render, Railway, Fly.io) and set `VITE_API_URL` at build time.
