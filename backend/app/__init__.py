"""Portfolio API application factory."""
import logging
import os

from flask import Flask, jsonify
from flask_cors import CORS

from .routes import api


def create_app(config=None):
    app = Flask(__name__)
    app.config.update(CORS_ORIGINS=os.environ.get("CORS_ORIGINS", "*"))
    app.json.sort_keys = False
    if config:
        app.config.update(config)

    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s: %(message)s")

    CORS(app, resources={r"/api/*": {"origins": app.config["CORS_ORIGINS"]}})
    app.register_blueprint(api)

    @app.errorhandler(404)
    def not_found(_error):
        return jsonify(error="Not found"), 404

    @app.errorhandler(405)
    def method_not_allowed(_error):
        return jsonify(error="Method not allowed"), 405

    @app.errorhandler(500)
    def server_error(_error):
        return jsonify(error="Internal server error"), 500

    return app
