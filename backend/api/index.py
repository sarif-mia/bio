from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def handler(event, context):
    return app.handle_request(event, context)

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify(message='Hello from backend!')

@app.route('/api/projects', methods=['GET'])
def get_projects():
    projects = [
        {
            "id": 1,
            "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            "title": "E-commerce Platform",
            "category": "Full-Stack Development",
            "description": "Modern e-commerce solution with React and Node.js",
            "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
            "year": "2024"
        },
        {
            "id": 2,
            "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            "title": "Dashboard Analytics",
            "category": "Frontend Development",
            "description": "Real-time analytics dashboard with data visualization",
            "technologies": ["Vue.js", "D3.js", "Python", "PostgreSQL"],
            "year": "2024"
        },
        {
            "id": 3,
            "image": "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            "title": "Mobile Banking App",
            "category": "UI/UX Design",
            "description": "Secure and intuitive mobile banking experience",
            "technologies": ["React Native", "TypeScript", "AWS"],
            "year": "2023"
        },
        {
            "id": 4,
            "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            "title": "API Management System",
            "category": "Backend Development",
            "description": "Scalable API gateway with microservices architecture",
            "technologies": ["Python", "FastAPI", "Docker", "Kubernetes"],
            "year": "2023"
        },
        {
            "id": 5,
            "image": "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            "title": "AI Content Platform",
            "category": "Full-Stack Development",
            "description": "AI-powered content generation and management platform",
            "technologies": ["Next.js", "OpenAI", "Supabase", "Vercel"],
            "year": "2024"
        },
        {
            "id": 6,
            "image": "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            "title": "Healthcare Management",
            "category": "System Architecture",
            "description": "Comprehensive healthcare management system",
            "technologies": ["Angular", "Spring Boot", "MySQL", "Redis"],
            "year": "2023"
        }
    ]
    return jsonify(projects=projects)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    
    # In a real application, you would save this to a database or send an email
    # For now, we'll just log it and return a success response
    print(f"Contact form submitted: {data}")
    
    return jsonify(
        success=True,
        message="Thank you for your message! We'll get back to you soon."
    )

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)