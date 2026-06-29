# Mini CRM - Customer Relationship Management System

A full-stack Customer Relationship Management (CRM) application developed using the MERN stack (React.js, Node.js, Express.js, and MongoDB). This application enables businesses to efficiently manage customer leads through a clean, interactive dashboard supporting complete CRUD functionality.

DEPLOYMENT LINK : mini-pwr49t8iq-pavi682006.vercel.app

---

## 📖 Overview

Customer Relationship Management (CRM) is a software solution that helps organizations store, organize, and manage customer information throughout the sales lifecycle.

This project demonstrates a complete full-stack web application where users can create, manage, update, and delete customer leads while learning modern web development concepts such as REST APIs, database integration, and client-server communication.

---

## ✨ Key Features

- Add new customer leads
- View all available leads
- Update lead status (New, Contacted, Closed)
- Delete existing leads
- Responsive dark-themed user interface
- Smooth UI animations using Framer Motion
- RESTful API integration
- MongoDB database connectivity

---

## 🛠 Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Axios
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

### Development Tools
- Visual Studio Code
- Git
- GitHub
- MongoDB Compass
- Postman

---

## 📂 Project Structure

```
mini_crm/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── node_modules/
│
└── README.md
```

---

## 🏗 System Architecture

```
                User
                  │
                  ▼
          React Frontend
                  │
          Axios HTTP Requests
                  │
                  ▼
        Node.js + Express API
                  │
                  ▼
          MongoDB Database
                  │
                  ▼
         JSON Response Returned
                  │
                  ▼
        React Updates Dashboard
```

---

## 📌 REST API Endpoints

| Method | Endpoint | Description |
|---------|-----------|------------|
| GET | `/api/leads` | Retrieve all leads |
| POST | `/api/leads` | Create a new lead |
| PUT | `/api/leads/:id` | Update lead details |
| DELETE | `/api/leads/:id` | Delete a lead |

---

## 📊 Database

**Database Name**

```
minicrm
```

**Collection**

```
leads
```

### Lead Schema

```json
{
   "name": "John Doe",
   "email": "john@example.com",
   "status": "New"
}
```

---

## 🚀 Installation Guide

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/mini-crm.git
```

---

### Step 2: Navigate into the Project

```bash
cd mini-crm
```

---

### Step 3: Install Backend Dependencies

```bash
cd backend
npm install
```

---

### Step 4: Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## ▶ Running the Application

### Start Backend Server

Open a terminal and execute:

```bash
cd backend
node server.js
```

Backend Server:

```
http://localhost:5000
```

---

### Start Frontend Application

Open another terminal and execute:

```bash
cd frontend
npm start
```

Frontend Application:

```
http://localhost:3000
```

---

## 🔄 Application Workflow

1. User enters customer information.
2. React captures form data.
3. Axios sends an HTTP request.
4. Express processes the request.
5. MongoDB stores the lead information.
6. The backend returns a JSON response.
7. React updates the dashboard automatically.

---

## 💻 CRUD Operations

### Create
Create a new customer lead.

### Read
Retrieve and display all available leads.

### Update
Modify customer lead status.

### Delete
Remove a lead from the database.

---

## 🎯 Learning Outcomes

This project helped strengthen practical knowledge of:

- Full-Stack Web Development
- React.js Fundamentals
- RESTful API Development
- Express.js Routing
- Node.js Server Development
- MongoDB Database Operations
- Mongoose Schema Modeling
- CRUD Operations
- Client–Server Architecture
- HTTP Request Handling
- Git & GitHub Version Control

---

## 🔮 Future Enhancements

- User Authentication (JWT)
- Role-Based Access Control
- Search and Filter Functionality
- Pagination
- Dashboard Analytics
- AI-Based Lead Prioritization
- Email Notifications
- Cloud Deployment
- Responsive Mobile Design

---

## 👨‍💻 Author

**Pavithra S**

GitHub: https://github.com/YOUR_USERNAME

LinkedIn: https://www.linkedin.com/in/YOUR_LINKEDIN

---

## ⭐ If you found this project helpful, please consider giving it a Star.
