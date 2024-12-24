JobFinder

A job search platform built with Node.js, Express, MongoDB, and React.

Features

Fetch and display job listings from MongoDB.

Filter job listings by location.

Fully responsive frontend built with React.



---

Prerequisites

Make sure you have the following installed on your system:

Node.js (v16 or later)

MongoDB (if running locally)

Git

Railway CLI (optional for deploying)



---

Getting Started

Clone the Repository

git clone https://github.com/yourusername/jobfinder.git
cd jobfinder


---

Backend Setup

Navigate to Backend

cd backend

Install Dependencies

npm install

Set Environment Variables

Create a .env file in the backend folder and add the following:

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/JobFinder

Replace <username> and <password> with your MongoDB credentials.

Start the Server

npm start

The server will run at http://localhost:5000.


---

Frontend Setup

Navigate to Frontend

cd ../frontend

Install Dependencies

npm install

Start the Development Server

npm start

The frontend will run at http://localhost:3000.


---

How to Use

1. Start both the backend and frontend servers as mentioned above.


2. Open http://localhost:3000 in your browser.


3. Search for jobs or filter by location.



