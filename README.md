# Full Stack Project README

This project includes a full-stack web application built using Django Rest Framework (DRF) and React. The project represents a blog site, allowing users to create articles and pages.

## Getting Started

To run the project on your local machine, follow the steps below:

### Requirements

- Python (3.7 or higher)
- Node.js
- PostgreSQL database

### Installation

1. Clone the project folder to your local machine:

   ```bash
   git clone <project-repo-url>

   ```

2. Setup for the backend

cd backend
python -m venv venv
source venv/bin/activate # For macOS
venv\Scripts\activate # For Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser # Create an admin account
python manage.py runserver

3. Run the frontend

cd frontend
npm install
npm start

4. Usage

Access the admin panel at http://localhost:8000/admin/ to manage articles and pages.
Log in to create and edit articles and pages.
Access API endpoints at http://localhost:8000/api/.
