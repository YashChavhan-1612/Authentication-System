# Authentication-System

# 🔐 MERN Authentication System (JWT)

## 📌 Project Description

This project is a **Login and Signup Authentication System** built using the MERN stack.
It implements secure user authentication using **JWT (JSON Web Token)** and password hashing with **bcrypt**.

This is similar to real-world authentication systems used in applications like email services and e-commerce platforms.

---

## 🚀 Features

* 🔑 User Registration (Signup)
* 🔐 User Login
* 🔒 Password Hashing using bcrypt
* 🪪 JWT Token Generation
* 🛡 Protected Routes (Dashboard)
* 🎨 Responsive UI using Tailwind CSS

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (jsonwebtoken)
* bcrypt

---

## 📁 Project Structure

```
mern-auth-project/
│
├── backend/
│   ├── config/db.js
│   ├── models/User.js
│   ├── routes/authRoutes.js
│   ├── middleware/authMiddleware.js
│   ├── server.js
│   └── .env
│
└── frontend/
    ├── src/pages/
    │   ├── Login.jsx
    │   ├── Signup.jsx
    │   └── Dashboard.jsx
    ├── App.js
    └── index.css
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone <your-repo-link>
cd mern-auth-project
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=mongodb://127.0.0.1:27017/authDB
JWT_SECRET=your_secret_key
```

Run backend:

```
npm start
```

---

### 3️⃣ Setup Frontend

```
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| POST   | /api/auth/signup | Register user   |
| POST   | /api/auth/login  | Login user      |
| GET    | /api/dashboard   | Protected route |

---

## 🔐 Authentication Flow

1. User signs up → password is hashed
2. User logs in → JWT token is generated
3. Token stored in localStorage
4. Token sent in headers for protected routes
5. Middleware verifies token before access

---



## 🎯 Learning Outcome

* Understanding of authentication systems
* JWT implementation
* Password security with hashing
* Protected routes in backend
* Full-stack integration

---

## 📌 Conclusion

This project demonstrates a complete authentication system using MERN stack and follows industry practices for secure login systems.

---

## 🙌 Author

Yash Naresh Chavhan
