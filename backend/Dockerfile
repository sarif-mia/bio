# Backend Dockerfile for Flask app
FROM python:3.11-slim

# set workdir
WORKDIR /app

# install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# copy app
COPY . .

# expose port
EXPOSE 5000

# run using gunicorn for production
CMD ["gunicorn", "-w", "2", "-k", "gthread", "-b", "0.0.0.0:5000", "api.index:app"]
