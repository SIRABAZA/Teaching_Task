# ChildSkills Platform

A modern web application for connecting students with teachers, booking lessons, and managing appointments. Built with React, Redux Toolkit, Formik, Yup, json-server, and more for a seamless, interactive experience.

---

## 📦 Project Description

ChildSkills is a platform where parents and students can:

- Browse and filter teachers
- Book lessons with teachers
- Admin/teacher login to view and manage appointments
- Responsive, modern UI with animations and best UX practices

---

## 🛠️ Main Libraries Used

- **React**: UI library for building components
- **Redux Toolkit**: State management (teachers, appointments)
- **React-Redux**: Connects Redux to React
- **Formik**: Form state management
- **Yup**: Form validation
- **Framer Motion**: Animations
- **Lucide-react**: Icon library
- **Axios**: HTTP requests
- **json-server**: Mock REST API for teachers/appointments
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn UI**: For ui Components (input, Button , etc...)

---

## 🧩 Components Overview

- **App.jsx**: Main app entry, sets up routes and layout
- **Header.jsx**: Top navigation bar
- **Footer.jsx**: Footer with navigation, social, and payment icons
- **Hero.jsx**: Animated hero section with call-to-action and app download
- **TeacherCard.jsx**: Displays teacher info in a card
- **Teacher.jsx**: Page listing all teachers with filters and booking modal
- **Modal.jsx**: Reusable modal dialog (used for booking lessons)
- **Spinner.jsx**: Full-page loading spinner
- **Dashboard.jsx**: Admin/teacher dashboard for viewing appointments
- **AdminLogin.jsx**: Login form for teachers/admins
- **SignUp.jsx**: Signup page (uses `signup-form.jsx`)
- **signup-form.jsx**: Formik/Yup-powered signup form
- **login-form.jsx**: Login form (if present)
- **DataTimePicker.jsx**: Custom date/time picker for booking
- **ui/**: Reusable UI primitives (button, input, card, table, etc.)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SIRABAZA/Teaching_Task
cd my-task
```

### 2. Install Dependencies

Using **npm**:

```bash
npm install
```

Or using **yarn**:

```bash
yarn install
```

### 3. Start the Mock API (json-server)

This project uses `json-server` to mock backend API endpoints. Make sure you have it installed globally:

```bash
npm install -g json-server
```

Start the server (from the project root):

```bash
json-server --watch db/db.json --port 3000
```

### 4. Start the Frontend

In a new terminal, run:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## 📁 Project Structure

- `src/` — Main source code
- `db/db.json` — Mock database for json-server
- `public/` — Static assets

---

## 📝 Notes

- Make sure both the frontend and json-server are running for full functionality.
- You can edit `db/db.json` to add/remove teachers or appointments.
- For production, replace json-server with a real backend API.

---

## 🤝 Contributing

Pull requests and issues are welcome!

---

## 📧 Contact

For questions or support, please open an issue or contact the maintainer.
