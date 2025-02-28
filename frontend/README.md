# SimpleClothing Frontend Documentation

## Overview

SimpleClothing is a unisex urban clothing brand that offers a variety of stylish and comfortable apparel. This project includes a full-stack application with a frontend built using React and a backend powered by Node.js and Express, with MongoDB as the database.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- A code editor (e.g., Visual Studio Code)
- Firebase account for hosting and database services

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/SimpleClothing.git
   cd SimpleClothing/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server:**
   ```bash
   npm start
   ```

2. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

### Project Structure

- **public/**: Contains static files like `index.html`, CSS, and JavaScript files.
- **src/**: Contains the React components and application logic.
  - **components/**: Reusable UI components.
  - **pages/**: Main page components with routing logic.
  - **App.js**: Main application component.

### Building for Production

To create an optimized build for production, run:
```bash
npm run build
```
This will generate a `build` folder containing the production-ready files.

## Firebase Setup

1. **Create a Firebase project** in the Firebase Console.
2. **Enable Firestore** and set up the necessary security rules.
3. **Enable Firebase Hosting** for deploying the frontend.
4. **Configure Firebase in your application** by adding your Firebase configuration in the appropriate files.

## Troubleshooting

- **ESLint Issues**: If you encounter linting errors, ensure your code adheres to the defined ESLint rules in the `.eslintrc.json` file. You can run:
  ```bash
  npm run lint
  ```
  to check for linting issues.

- **Node.js Version Compatibility**: Ensure you are using a compatible version of Node.js. You can check your version with:
  ```bash
  node -v
  ```
  If necessary, use a version manager like `nvm` to switch Node.js versions.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.