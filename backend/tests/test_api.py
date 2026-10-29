import pytest

from app import create_app


@pytest.fixture
def client():
    return create_app({"TESTING": True}).test_client()


def test_health(client):
    res = client.get("/api/health")
    assert res.status_code == 200
    assert res.get_json() == {"status": "ok"}


def test_projects_list(client):
    res = client.get("/api/projects")
    assert res.status_code == 200
    projects = res.get_json()["projects"]
    assert len(projects) > 0
    assert {"id", "title", "category", "technologies"} <= projects[0].keys()


def test_project_detail(client):
    assert client.get("/api/projects/1").status_code == 200
    assert client.get("/api/projects/999").status_code == 404


def test_contact_success(client):
    res = client.post("/api/contact", json={
        "name": "Ada", "email": "ada@example.com", "subject": "Hi", "message": "Let's build something great.",
    })
    assert res.status_code == 200
    assert res.get_json()["success"] is True


def test_contact_validation(client):
    res = client.post("/api/contact", json={"name": "", "email": "nope", "subject": "Hi", "message": "short"})
    assert res.status_code == 400
    errors = res.get_json()["errors"]
    assert set(errors) == {"name", "email", "message"}


def test_contact_rejects_non_json(client):
    res = client.post("/api/contact", data="not json")
    assert res.status_code == 400


def test_unknown_route_returns_json(client):
    res = client.get("/api/nope")
    assert res.status_code == 404
    assert res.get_json() == {"error": "Not found"}
