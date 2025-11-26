# Backend - Bio Portfolio (Flask)

Flask API for the portfolio frontend.

## Endpoints

- GET /api/hello - Simple JSON message
- GET /api/projects - Portfolio projects
- POST /api/contact - Contact form submission

## Docker

```bash
docker build -t bio-backend:latest .
docker run -p 5000:5000 bio-backend:latest
```

Available at http://localhost:5000/api/*