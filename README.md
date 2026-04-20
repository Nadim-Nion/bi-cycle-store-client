# 🚀 Bi Cycle Store (Frontend)

---

A scalable and production-ready frontend starter template built with React, TypeScript, and modern tooling. This boilerplate is designed to help developers quickly kickstart building responsive and maintainable user interfaces with a well-structured and modular architecture.

---

## 🔗 Links

- **GitHub Repository:** [Project Name](#)
- **Live Link:** [Live on Vercel](#)
- **Live Demo:** [Loom Video](#)


---

## 🛠️ Features

Here’s your rewritten version tailored for a React frontend project:

---

- Modular architecture for scalability
- Type-safe development with TypeScript
- Centralized state management using Redux Toolkit
- Environment-based configuration (Vite `.env`)
- Clean and maintainable folder structure
- Client-side routing with React Router
- Reusable UI components with Ant Design
- Form handling with React Hook Form
---

## 📦 Tech Stack

- React – Library for building user interfaces
- React Router – Client-side routing for navigation
- Redux Toolkit – Simplified global state management
- TypeScript – Strongly typed JavaScript
- Ant Design – UI component library for building modern interfaces

---

## 📁 Project Structure

```bash
├── node_modules/
├── public/
├── src/
│   ├── assets/                # Static files (images, fonts, etc.)
│   ├── components/            # Reusable components
│   │   ├── form/              # Form-related components
│   │   ├── layout/            # Layout components
│   │   │   └── MainLayout.tsx
│   │   └── ui/                # Shared UI components
│   ├── config/                # App configuration
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Helper libraries / wrappers
│   ├── pages/                 # Application pages
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   ├── redux/                 # State management (Redux Toolkit)
│   │   ├── api/               # API setup (RTK Query)
│   │   │   └── baseApi.ts
│   │   ├── features/          # Feature slices
│   │   ├── hooks.ts           # Typed Redux hooks
│   │   └── store.ts           # Store configuration
│   ├── routes/                # Routing configuration
│   │   └── routes.tsx
│   ├── styles/                # Global styles
│   ├── utils/                 # Utility functions
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx               # App entry point
│
├── .env.example
├── .env.local
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Nadim-Nion/react-project-setup
cd react-project-setup
```

### 2. Install dependencies

```bash
# Install dependencies
npm install @reduxjs/toolkit antd react react-dom react-hook-form react-redux react-router

# Install dev dependencies
npm install -D @eslint/js @types/node @types/react @types/react-dom @vitejs/plugin-react eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals typescript typescript-eslint vite
```

### 3. Create environment file

Create a .env file in the root directory and add:

```bash
VITE_API_BASE_URL=http://localhost:5000
VITE_APP_NAME=react-project-setup
```

Follow .env.example file to know about the .env structure

---

## ▶️ Running the Application

### Development mode

```bash
npm run dev
```

### Production build

```bash
npm run build
```

---

## 🧪 Scripts

```bash
npm run dev        # Start development server (with hot reload)
npm run build      # Build the app for production
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
```

---

## 🖼️ Screenshots

### Home Page

![Home Page](https://your-image-url.com/home.png)

### Dashboard

![Dashboard](https://your-image-url.com/dashboard.png)

### Mobile View

![Mobile View](https://your-image-url.com/mobile.png)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Fork the repository
- Create a new branch
- Submit a pull request

---

## 📄 License

This project is licensed under the MIT License.

---

## ✨ Author

Nadim Mahmud Nion <br />
Full Stack (MERN) Developer
