# Task 2: JSON File Setup and Server Initialization

## Overview

This repository contains the necessary setup to initialize a Node.js project, install the required dependencies (`express` and `fs`), and run a basic server. The steps below guide you through setting up the environment in GitHub Codespaces.

## Prerequisites

- A GitHub account.
- Access to GitHub Codespaces.

## Steps to Setup and Run

1. **Create a GitHub Codespace**:
   - Navigate to this repository and click on the **Code** button.
   - Select **Codespaces** and click **Create Codespace** to open the project in a new Codespace.

2. **Initialize Node.js Project**:
   - Open the terminal in your Codespace and run the following command:
     ```bash
     npm init -y
     ```
   - This will automatically generate a `package.json` file.

3. **Install Dependencies**:
   - Install **Express** and **fs** modules by running the following command:
     ```bash
     npm install express fs
     ```

4. **Create and Run the Server**:
   - Start the server by running:
     ```bash
     node server.js
     ```

5. **Access the Server**:
   - Once the server is running, you can access it through the terminal output or by navigating to `http://localhost:3000` in your browser.

## Conclusion

This setup provides a basic Node.js environment with **Express** and **fs** modules installed. You can further extend this server by adding routes, middleware, or additional functionality.
