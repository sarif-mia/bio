"""Input validation helpers."""
import re

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")

CONTACT_LIMITS = {"name": 100, "email": 254, "subject": 150, "message": 5000}


def validate_contact(data):
    """Return (cleaned, errors) for a contact form payload."""
    if not isinstance(data, dict):
        return None, {"form": "Invalid request body."}

    cleaned = {field: str(data.get(field) or "").strip() for field in CONTACT_LIMITS}
    errors = {}

    for field, limit in CONTACT_LIMITS.items():
        if not cleaned[field]:
            errors[field] = "This field is required."
        elif len(cleaned[field]) > limit:
            errors[field] = f"Must be {limit} characters or fewer."

    if "email" not in errors and not EMAIL_RE.match(cleaned["email"]):
        errors["email"] = "Please enter a valid email address."

    if "message" not in errors and len(cleaned["message"]) < 10:
        errors["message"] = "Message must be at least 10 characters."

    return cleaned, errors
