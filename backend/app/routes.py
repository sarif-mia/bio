"""API routes."""
import logging

from flask import Blueprint, jsonify, request

from .data import PROJECTS
from .validation import validate_contact

logger = logging.getLogger(__name__)

api = Blueprint("api", __name__, url_prefix="/api")


@api.get("/health")
def health():
    return jsonify(status="ok")


@api.get("/hello")
def hello():
    return jsonify(message="Hello from backend!")


@api.get("/projects")
def get_projects():
    return jsonify(projects=PROJECTS)


@api.get("/projects/<int:project_id>")
def get_project(project_id):
    project = next((p for p in PROJECTS if p["id"] == project_id), None)
    if project is None:
        return jsonify(error="Project not found"), 404
    return jsonify(project=project)


@api.post("/contact")
def contact():
    cleaned, errors = validate_contact(request.get_json(silent=True))
    if errors:
        return jsonify(success=False, errors=errors), 400

    # Hook up email delivery or persistence here.
    logger.info("Contact form submitted by %s <%s>: %s", cleaned["name"], cleaned["email"], cleaned["subject"])

    return jsonify(success=True, message="Thanks for reaching out! I'll get back to you soon.")
