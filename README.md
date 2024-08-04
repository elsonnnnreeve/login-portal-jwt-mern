# Login Portal with JWT (MERN Stack)

## Description

This project is a login portal built using the MERN stack (MongoDB, Express, React, Node.js) with JWT (JSON Web Token) authentication. It allows users to log in with a username and password, supports two-factor authentication (2FA) with QR codes, and provides secure user authentication and session management.

## Features

* **User Authentication**: Secure login with JWT-based authentication.
* **Two-Factor Authentication**: Enhanced security with QR code-based 2FA.
* **Backend Integration**: RESTful API endpoints for user login and management.
* **Frontend UI**: Responsive and user-friendly interface for login and registration.
* **File Uploads**: Supports uploading files with proper validation.

## Installation

### Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/elsonnnnreeve/login-portal-jwt-mern.git
    ```

2. Navigate to the backend directory and install dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Create a `.env` file in the `backend` directory and configure the following environment variables:
    ```
    PORT=your_desired_port
    DB_URL=your_mongodb_connection_string
    JWTPRIVATEKEY=your_jwt_private_key
    SALT=your_salt_rounds
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend

1. Navigate to the frontend directory and install dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

2. Start the frontend development server:
    ```bash
    npm start
    ```

## Usage

1. Access the application via `http://localhost:3000` in your browser.

2. Register a new user or log in with existing credentials.

3. For two-factor authentication, follow the on-screen instructions to scan the QR code with an authenticator app.

## API Endpoints

* **POST /api/auth/register**: Register a new user.
* **POST /api/auth/login**: Log in and obtain a JWT.
* **POST /api/auth/verify**: Verify the two-factor authentication code.

## Testing

For backend testing, you can use tools like Postman to test the API endpoints. Ensure the server is running before testing.

## Contributing

Feel free to open issues or submit pull requests. Contributions to improve the project are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [MongoDB](https://www.mongodb.com/)
* [JWT](https://jwt.io/)
* [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en)
