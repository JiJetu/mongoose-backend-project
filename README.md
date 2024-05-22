# Mongoose Backend Project

Welcome to the Mongoose Backend Project! This repository contains code for a backend application using Mongoose, Express, and TypeScript.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/mongoose-backend-project.git
   cd mongoose-backend-project

   ```

2. Install the necessary dependencies:

```bash
npm install

```

3. Create a .env file in the root directory with the following content:

```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/mydb
```

##Usage
To run the project locally, execute the following command:

```bash
npm start

```

This will start the server on port 3000. You can access the API at http://localhost:3000.

Scripts

- npm run build: Compile TypeScript files to JavaScript in the dist folder.
- npm run start:dev: Run the server in development mode with automatic restart using ts-node-dev.
- npm run lint: Lint the code using ESLint.
- npm run prettier: Format code using Prettier.
