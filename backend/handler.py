from api.index import app
import json

def handler(event, context):
    # Convert the event to Flask request format
    from io import StringIO
    from werkzeug.wrappers import Request
    
    # Create a request object
    path = event.get('path', '/')
    http_method = event.get('httpMethod', 'GET')
    headers = event.get('headers', {})
    body = event.get('body', '')
    query_params = event.get('queryStringParameters', {}) or {}
    
    # Handle base path for API Gateway
    if path.startswith('/.netlify/functions'):
        path = path.replace('/.netlify/functions/handler', '') or '/'
    
    # Ensure path starts with /
    if not path.startswith('/'):
        path = '/' + path
    
    # Create environ dict for Flask
    environ = {
        'REQUEST_METHOD': http_method,
        'PATH_INFO': path,
        'QUERY_STRING': '&'.join([f"{k}={v}" for k, v in query_params.items()]),
        'CONTENT_TYPE': headers.get('content-type', ''),
        'CONTENT_LENGTH': str(len(body)) if body else '',
        'SERVER_NAME': 'localhost',
        'SERVER_PORT': '5000',
        'wsgi.input': StringIO(body),
        'wsgi.url_scheme': 'http',
        'wsgi.version': (1, 0),
        'wsgi.errors': StringIO(),
        'wsgi.multithread': False,
        'wsgi.multiprocess': False,
        'wsgi.run_once': False,
        'wsgi.headers': headers
    }
    
    # Add HTTP headers
    for key, value in headers.items():
        header_key = f"HTTP_{key.upper().replace('-', '_')}"
        environ[header_key] = value
    
    # Process the request through Flask
    response = app(environ, lambda status, headers: None)
    
    # Extract status code
    status_code = 200
    if hasattr(response, 'status_code'):
        status_code = response.status_code
    elif isinstance(response, tuple) and len(response) > 1:
        status_code = response[1]
    
    # Extract headers
    response_headers = {}
    if hasattr(response, 'headers'):
        response_headers = dict(response.headers)
    elif isinstance(response, tuple) and len(response) > 2:
        response_headers = dict(response[2])
    
    # Extract body
    body_content = ""
    if hasattr(response, 'data'):
        body_content = response.data.decode('utf-8')
    elif isinstance(response, tuple) and len(response) > 0:
        body_content = str(response[0])
    else:
        body_content = str(response)
    
    # Return Netlify function response format
    return {
        'statusCode': status_code,
        'headers': response_headers,
        'body': body_content
    }