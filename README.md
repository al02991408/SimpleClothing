# SimpleClothing Project

Welcome to the SimpleClothing project! This is a full-stack application for a unisex urban clothing brand. The project is structured into three main parts: the backend, the frontend, and the Firebase configuration.

## Project Structure

```
SimpleClothing
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── controllers
│   │   │   └── index.js
│   │   ├── models
│   │   │   └── index.js
│   │   ├── routes
│   │   │   └── index.js
│   │   └── config
│   │       └── db.js
│   ├── package.json
│   ├── .eslintrc.json
│   └── README.md
├── frontend
│   ├── public
│   │   ├── index.html
│   │   ├── styles.css
│   │   └── scripts.js
│   ├── src
│   │   ├── components
│   │   │   └── index.js
│   │   ├── pages
│   │   │   └── index.js
│   │   └── App.js
│   ├── package.json
│   ├── .eslintrc.json
│   └── README.md
├── firebase
│   ├── firestore.rules
│   ├── firestore.indexes.json
│   ├── functions
│   │   ├── src
│   │   │   └── index.js
│   │   ├── package.json
│   │   └── .eslintrc.json
│   ├── storage.rules
│   ├── firebase.json
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (for local development)
- Firebase account

### Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure the MongoDB connection in `src/config/db.js` with your MongoDB URI.

4. Start the backend server:
   ```
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm start
   ```

### Firebase Setup

1. Install Firebase CLI globally:
   ```
   npm install -g firebase-tools
   ```

2. Log in to your Firebase account:
   ```
   firebase login
   ```

3. Initialize Firebase in the `firebase` directory:
   ```
   cd firebase
   firebase init
   ```

   - Choose Firestore, Functions, Hosting, and Storage.
   - Follow the prompts to set up your project.

4. Deploy your Firebase functions:
   ```
   cd functions
   npm install
   firebase deploy --only functions
   ```

5. Deploy your Firestore rules and hosting:
   ```
   firebase deploy --only firestore,hosting
   ```

### Troubleshooting

- **ESLint Linting Problems**: Ensure that your ESLint configuration files (`.eslintrc.json`) are correctly set up. You can run `npx eslint .` to check for linting issues.
  
- **Node.js Version Incompatibilities**: If you encounter issues related to Node.js versions, ensure that you are using a compatible version as specified in the project's `package.json`. You can use tools like `nvm` (Node Version Manager) to manage your Node.js versions.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and contributions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for details.