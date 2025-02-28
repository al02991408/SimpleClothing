# SimpleClothing Backend

## Overview
SimpleClothing is a full-stack application for a unisex urban clothing brand. This backend project is built using Node.js, Express, and MongoDB, providing a RESTful API for managing clothing items and user interactions.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- npm (Node package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/SimpleClothing.git
   cd SimpleClothing/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure the database**
   - Open `backend/src/config/db.js` and update the MongoDB connection string with your database credentials.

### Running the Application

1. **Start the server**
   ```bash
   npm start
   ```

2. **Access the API**
   - The API will be available at `http://localhost:3000`.

### API Endpoints
- `GET /api/clothing` - Retrieve all clothing items
- `POST /api/clothing` - Create a new clothing item
- `PUT /api/clothing/:id` - Update a clothing item by ID
- `DELETE /api/clothing/:id` - Delete a clothing item by ID

## ESLint Configuration
To ensure code quality, this project uses ESLint. You can run the linter with the following command:
```bash
npm run lint
```

## Troubleshooting

### Common Issues

- **ESLint Linting Problems**
  - Ensure that your code adheres to the rules defined in `.eslintrc.json`. You can modify the rules as needed.

- **Node.js Version Incompatibilities**
  - If you encounter issues related to Node.js versions, consider using a version manager like `nvm` to switch between Node.js versions.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.