# Client Application

A modern web application built with React, TypeScript, Vite, and Tailwind CSS.

## 🛠️ Technologies Used

### Core Technologies

- **React 19.2.0** - A JavaScript library for building user interfaces
- **React DOM 19.2.0** - React renderer for the DOM
- **React Router DOM 7.13.0** - Declarative routing for React applications

### Styling & UI

- **Tailwind CSS 4.1.18** - A utility-first CSS framework
- **Lucide React 0.574.0** - A beautiful & consistent icon set

### Development Tools

- **Vite 7.3.1** - Next generation frontend tooling (build tool & dev server)
- **TypeScript ~5.9.3** - Typed JavaScript at any scale
- **ESLint 9.39.1** - Find and fix problems in your JavaScript code
- **Vite React Plugin** - Official Vite plugin for React

### Additional Dependencies

- **@types/node** - Node.js type definitions
- **@types/react** - React type definitions
- **@types/react-dom** - React DOM type definitions
- **@eslint/js** - ESLint JavaScript support
- **eslint-plugin-react-hooks** - React Hooks linting rules
- **eslint-plugin-react-refresh** - React Fast Refresh linting
- **globals** - Global identifier polyfills
- **typescript-eslint** - TypeScript support for ESLint

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js) or **yarn** / **pnpm**

## 🚀 Getting Started

### 1. Install Dependencies

```
bash
npm install
```

This will install all the required dependencies listed in `package.json`.

### 2. Run Development Server

```
bash
npm run dev
```

Starts the development server. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The development server supports hot module replacement (HMR) for instant feedback.

### 3. Build for Production

```
bash
npm run build
```

Compiles the TypeScript files and bundles the application for production. The output will be in the `dist` folder.

### 4. Preview Production Build

```
bash
npm run preview
```

Serves the production build locally to test how the app will behave in production.

### 5. Lint Your Code

```
bash
npm run lint
```

Runs ESLint to find and fix problems in your code.

## 📁 Project Structure

```
client/
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── assets/          # Static assets (images, fonts, etc.)
│   ├── components/      # Reusable React components
│   ├── pages/          # Page components
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── eslint.config.js     # ESLint configuration
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tsconfig.app.json   # TypeScript app configuration
├── tsconfig.node.json  # TypeScript Node configuration
└── vite.config.ts      # Vite configuration
```

## ⚙️ Configuration

### Vite Configuration

The project uses Vite with:

- React plugin for fast React development
- Tailwind CSS plugin for styling
- Path alias `@` pointing to `./src` for cleaner imports

### Tailwind CSS

The project uses Tailwind CSS v4 with the Vite plugin. Styles are defined in `src/index.css`.

### TypeScript

The project uses TypeScript with strict mode enabled. TypeScript configuration is split into:

- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - App-specific configuration
- `tsconfig.node.json` - Node.js-specific configuration

## 📦 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run lint`    | Run ESLint               |
| `npm run preview` | Preview production build |

## 🧪 Development

The development server runs on `http://localhost:5173` by default. When you make changes, the page will automatically reload if you edit something.

## 🔧 Git Configuration

This project includes a `.gitignore` file to prevent unnecessary files from being uploaded to GitHub. The following files and directories are ignored:

- `node_modules/` - Dependencies (can be reinstalled with `npm install`)
- `dist/` - Production build files
- `.env*` - Environment variables
- `*.log` - Log files
- `.vscode/` - VSCode settings
- `.DS_Store` - macOS system files

This ensures that only your source code is committed to GitHub, while the large `node_modules` directory is excluded and can be reinstalled by other developers using `npm install`.

## 📄 License

This project is private and for internal use only.
