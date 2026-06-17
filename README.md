# 🚀 ClubSync

ClubSync is a Kanban-based collaboration and project management platform designed for student clubs. It helps teams organize tasks, assign responsibilities, track deadlines, and monitor project progress through an intuitive dashboard.

## 🌐 Live Demo

Deployed Application: https://dev-chart-kappa.vercel.app/

Repository: [https://github.com/Ananya9999999/devChart]

---

## 📖 Project Overview

This project was built as part of the Android Club Technical Recruitment 2026 Web Development Task.

The original task management application was transformed into a collaboration platform where club members can:

- Create and manage tasks
- Assign tasks to members
- Track task progress using a Kanban workflow
- Monitor deadlines
- View project statistics
- Manage club activities efficiently

---

## ✨ Features Implemented

### 📋 Kanban Workflow
Tasks move through three stages:

- To Do
- In Progress
- Done

Members can update task status directly from the dashboard.

### 👥 Task Assignment
Assign tasks to specific club members to improve accountability and collaboration.

### 📅 Due Date Tracking
Each task can have a deadline associated with it.

### 🚨 Overdue Task Detection
Tasks that have passed their due date are automatically highlighted.

### 🗑️ Task Deletion
Tasks can be removed when no longer needed.

### 📊 Dashboard Analytics
The homepage displays:

- Total Tasks
- Tasks In Progress
- Completed Tasks

### ☁️ Cloud Database Integration
All tasks are stored and managed using MongoDB Atlas.

### 📱 Responsive Design
The interface adapts to different screen sizes for improved usability.

---

## 🛠️ Technology Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- Next.js API Routes

### Database
- MongoDB Atlas
- Mongoose

### Deployment
- Vercel

---

## 📂 Project Structure

```bash
src/
│
├── app/
│   ├── api/tasks/
│   │   └── route.ts
│   │
│   ├── create-task/
│   │   └── page.tsx
│   │
│   ├── dashboard/
│   │   └── page.tsx
│   │
│   └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   └── TaskCard.tsx
│
├── lib/
│   └── mongodb.ts
│
└── models/
    └── Tasks.ts
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/Ananya9999999/devChart

cd devChart
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a file named:

```bash
.env.local
```

Add:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🗄️ MongoDB Setup

1. Create a MongoDB Atlas account.
2. Create a new cluster.
3. Create a database user.
4. Add your IP address to the Network Access list.
5. Copy the connection string.
6. Paste it into `.env.local`.

---

## 🚀 Deployment Instructions

### Deploy on Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the environment variable:

```env
MONGODB_URI=your_connection_string
```

4. Deploy.

---


## 🎯 Key Improvements Over Original Project

- Converted simple task list into a Kanban workflow
- Added task assignment functionality
- Added due date tracking
- Added overdue task highlighting
- Added task deletion
- Added analytics dashboard
- Improved UI and user experience
- Integrated MongoDB Atlas for persistent storage

---

## ⚠️ Known Limitations

- No user authentication system
- Task assignments are text-based
- No drag-and-drop Kanban interaction
- No real-time updates between users

---

## 🔮 Future Enhancements

- User authentication and authorization
- Role-based access control
- Drag-and-drop Kanban board
- Real-time collaboration
- Email reminders for deadlines
- Project-based filtering
- Team management system

---

## 👩‍💻 Author

Ananya Singla

Built for Android Club Technical Recruitment 2026.