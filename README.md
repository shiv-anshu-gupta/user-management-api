# 🚀 User Management API

Welcome to the **User Management API**, a comprehensive solution for managing users and administrators with a focus on security, efficiency, and scalability. This project is built using **Node.js**, **Express.js**, and **MongoDB**.

---

## 🌟 Features

- 🔒 **Secure Authentication**: JWT-based authentication for users and admins.
- 🛡️ **Password Protection**: User passwords are securely hashed using `bcrypt`.
- 🔄 **Profile Management**: Update profiles, deactivate accounts, and retrieve user details seamlessly.
- 👨‍💻 **Admin Privileges**: Enhanced admin capabilities to view and manage users.
- 📡 **RESTful API**: Clean and structured API endpoints.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud-based instance)

---

## 📂 Project Structure

```
user-management-api/
├── controllers/
│   ├── adminController.js
│   ├── userController.js
├── middlewares/
│   └── authMiddleware.js
├── models/
│   ├── Admin.js
│   ├── User.js
├── routes/
│   ├── adminRoutes.js
│   ├── userRoutes.js
├── config/
│   └── db.js
├── .env
├── app.js
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

### Step 1: Installation

1. **Clone the repository**:
   ```bash
   git clone (https://github.com/shiv-anshu-gupta/user-management-api.git)
   cd user-management-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file with the following values:
   ```env
   MONGO_URI=mongodb://localhost:27017/userManagementDB
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

4. **Start the application**:
   ```bash
   npm start
   ```
   The server will be available at `http://localhost:5000`.

---

## 🔗 API Endpoints

### 👤 User Endpoints

#### 1. Register User
- **POST** `/api/users/register`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "phone": "1234567890"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully"
  }
  ```

#### 2. Login User
- **POST** `/api/users/login`
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "<jwt_token>"
  }
  ```

#### 3. Get User Profile
- **GET** `/api/users/profile`
- **Headers**:
  ```
  Authorization: Bearer <jwt_token>
  ```
- **Response**:
  ```json
  {
    "_id": "123",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "isActive": true
  }
  ```

#### 4. Update User Profile
- **PUT** `/api/users/profile`
- **Headers**:
  ```
  Authorization: Bearer <jwt_token>
  ```
- **Request Body**:
  ```json
  {
    "name": "John Updated",
    "phone": "0987654321"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Profile updated",
    "user": { ... }
  }
  ```

#### 5. Deactivate User
- **DELETE** `/api/users/profile`
- **Headers**:
  ```
  Authorization: Bearer <jwt_token>
  ```
- **Response**:
  ```json
  {
    "message": "Account deactivated"
  }
  ```

### 👨‍💻 Admin Endpoints

#### 1. Login Admin
- **POST** `/api/admin/login`
- **Request Body**:
  ```json
  {
    "email": "admin@example.com",
    "password": "admin123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "<jwt_token>"
  }
  ```

#### 2. Get All Users
- **GET** `/api/admin/users`
- **Headers**:
  ```
  Authorization: Bearer <jwt_token>
  ```
- **Response**:
  ```json
  [
    {
      "_id": "123",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "isActive": true
    },
    ...
  ]
  ```

---

## 📜 Scripts

- **Start the server**:
  ```bash
  npm start
  ```
- **Run in development mode**:
  ```bash
  npm run dev
  ```

---

## 🧰 Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: MongoDB object modeling tool.
- **bcrypt**: Password hashing for enhanced security.
- **JSON Web Tokens (JWT)**: Secure session handling.

---

## 🚀 Future Enhancements

- 📄 **Add Pagination**: Enable pagination for user lists.
- 📧 **Email Verification**: Implement email verification for new users.
- 🔑 **Role-Based Access Control (RBAC)**: Improve access control for various user roles.
