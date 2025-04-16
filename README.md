# 🎓 Instructor Authentication App

This project is a full-stack, mobile-responsive web application built with **Next.js**, **NextAuth.js**, **MongoDB**, and **Tailwind CSS**. It supports **instructor registration**, **user login**, and **secure authentication** using credential-based login via NextAuth.

---

## 🌟 Features

- ✅ Instructor Sign-Up Form (with education and bio input)
- 🔐 Secure User Sign-In (email & password using NextAuth)
- 🧩 Role-based registration (`instructor`)
- 🖥️ Fully responsive UI for mobile, tablet, and desktop
- 🚫 Client-side & Server-side validation with error/success messages
- 🧠 State managed using React Hooks
- 🌐 API route handling for instructor registration

---

## 📸 Screenshots

| Sign In Page                           | Instructor Sign Up Page                |
| -------------------------------------- | -------------------------------------- |
| ![SignIn](./public/screens/signin.png) | ![SignUp](./public/screens/signup.png) |

---

## 🧰 Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: NextAuth.js, MongoDB, Node.js
- **Database**: MongoDB (via Mongoose)
- **Styling**: Tailwind CSS
- **Authentication**: Credential-based using NextAuth

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/instructor-auth-app.git
cd instructor-auth-app
```

### 2. Install Node Modules

```bash
npm install
```

### 3. Create `.env.local`

Create a file `.env.local` at the root of the project and add the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

---

## 🚀 Running the App

```bash
npm run dev
```

Navigate to: [http://localhost:3000](http://localhost:3000)

---

## 📁 Folder Structure

```
instructor-auth-app/
├── app/
│   └── auth/
│       ├── signin.jsx
│       └── signup-instructor.jsx
├── pages/
│   └── api/
│       ├── auth/[...nextauth].js
│       └── instructor/index.js
├── lib/
│   └── mongodb.js
├── models/
│   └── User.js
├── public/
│   └── screens/
├── styles/
│   └── globals.css
├── .env.local
├── package.json
├── README.md
└── next.config.js
```

---

## 🧪 Usage Guide

### 👤 Sign In

- URL: `/auth/signin`

### 🧑‍🏫 Instructor Signup

- URL: `/auth/signup-instructor`

---

## 🔐 Authentication Flow

1. Instructor registers → `/api/instructor` stores data.
2. Sign in uses `NextAuth` with "credentials" provider.
3. Session persists using cookies via NextAuth.
4. After login, user is redirected to the home page (`/`).

---

## 🧾 API Reference

### POST `/api/instructor`

Registers a new instructor.

#### Request Body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "yourpassword",
  "gender": "female",
  "educationDetails": "PhD in Computer Science",
  "shortBio": "Passionate educator and AI researcher",
  "role": "instructor"
}
