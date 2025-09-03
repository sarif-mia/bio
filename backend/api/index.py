from flask import Flask, jsonify

app = Flask(__name__)

def handler(event, context):
    return app.handle_request(event, context)

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify(message='Hello from backend!')