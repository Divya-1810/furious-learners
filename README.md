<<<<<<< HEAD
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
=======
# Furious Learners - Learning Management System

A modern, feature-rich Learning Management System built with Next.js, offering an interactive platform for online education.

![Furious Learners LMS](./public/image/about.webp)

## 🚀 Features

### For Students
- 📚 Access to diverse course catalog
- 📝 Course enrollment and progress tracking
- 📜 Certificate generation upon course completion
- 👤 Personalized user dashboard
- ✍️ Interactive learning materials

### For Instructors
- 📊 Course management dashboard
- 📤 Easy content upload (videos, PDFs)
- 👥 Student progress monitoring
- 📨 Direct communication with students
- 📈 Course analytics

### General Features
- 🔐 Secure authentication system
- 📱 Responsive design for all devices
- 🎨 Modern and intuitive UI
- 📧 Email verification system
- 💳 User profile management

## 🛠️ Tech Stack

- **Frontend**: Next.js 13, React, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Authentication**: NextAuth.js
- **File Storage**: Cloud Storage
- **Email Service**: NodeMailer
- **PDF Generation**: html2pdf.js

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/furious-learners.git
cd furious-learners
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
Create a `.env.local` file in the root directory and add:
```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
EMAIL_SERVER_USER=your_email
EMAIL_SERVER_PASSWORD=your_email_password
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_FROM=your_email
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure
>>>>>>> 5fe4666 (Update project)

```
instructor-auth-app/
├── app/
<<<<<<< HEAD
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
=======
│   ├── api/            # API routes
│   ├── components/     # Reusable components
│   ├── models/        # MongoDB models
│   ├── utils/         # Utility functions
│   └── ...           # Page components
├── public/           # Static files
└── ...
```

## 🔑 Key Features Implementation

### Authentication
- Email/Password authentication
- OTP verification for new users
- Protected routes and API endpoints

### Course Management
- Course creation and editing
- Module organization
- Content upload (videos, PDFs)
- Progress tracking

### User Dashboard
- Course enrollment
- Progress monitoring
- Certificate generation
- Profile management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work - [Your GitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- MongoDB for the flexible database solution
- All contributors who have helped this project grow

## 📞 Contact

For any queries or support, please contact:
- Email: info@furiouslearners.com
- Website: [www.furiouslearners.com](https://www.furiouslearners.com)

---

Made with ♥ by Furious Learners Team
>>>>>>> 5fe4666 (Update project)
