MediRescue - Emergency Medical Response System

Overview

MediRescue is a web-based emergency medical response system designed to connect individuals in need of urgent medical assistance with nearby hospitals, emergency responders, and volunteer first-aiders. The platform facilitates rapid response, real-time location tracking, and critical health data sharing to improve emergency medical care efficiency.

Features

User Registration & Authentication: Secure login system for users, responders, and hospitals.

Emergency Alert System: Users can trigger emergency alerts with their location details.

Real-time Location Tracking: GPS-based location sharing to help responders locate patients quickly.

Hospital & Responder Dashboard: Hospitals and medical responders can view incoming emergencies and respond accordingly.

Health Profile Management: Users can store medical history, allergies, and emergency contacts.

Chat & Notifications: Instant messaging and notifications between users and responders.

AI-powered Triage System: Helps prioritize emergency cases based on severity.

Tech Stack

Frontend: React, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Token)

Maps & Location Services: Google Maps API

Real-time Communication: WebSockets

Installation

Prerequisites

Ensure you have the following installed:

Node.js

MongoDB

Setup Instructions

Clone the repository:

git clone https://github.com/yourusername/medirescue.git
cd medirescue

Install dependencies:

npm install

Set up environment variables:

Create a .env file in the root directory and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GOOGLE_MAPS_API_KEY=your_google_maps_api_key

Start the backend server:

npm run server

Start the frontend:

npm start

Usage

Register an account as a user, responder, or hospital.

If an emergency occurs, trigger an alert from the dashboard.

Nearby responders and hospitals receive the alert and navigate to the user’s location.

Real-time updates and communication are facilitated through the platform.

Contribution

Contributions are welcome! To contribute:

Fork the repository.

Create a new branch (git checkout -b feature-branch).

Commit your changes (git commit -m 'Add new feature').

Push to the branch (git push origin feature-branch).

Open a pull request.

License

This project is licensed under the MIT License.

Contact

For any inquiries, reach out via:

Email: snowngich35@gmail.com

GitHub: Joseph Njoroge
