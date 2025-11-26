# Backend - Bio Portfolio (Flask)

This is a small Flask application that provides an API used by the frontend.

## Endpoints
- GET /api/hello - Returns a simple JSON message

## Docker
Build and run the backend container:

```powershell
docker build -t bio-backend:latest .
docker run -p 5000:5000 bio-backend:latest
```

The service will be available at http://localhost:5000/api/hello

## Notes
- The app is configured as a Flask application in `api/index.py` for compatibility with Netlify Functions. When containerized, Gunicorn is used to serve the app.
