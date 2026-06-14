# Spotify Basic Backend

A backend application inspired by Spotify, built with Node.js, Express.js, MongoDB, JWT Authentication, Multer, and ImageKit.

This project provides authentication, role-based authorization, music uploads, and album management functionality. 
It is designed as a learning project to understand backend development concepts such as REST APIs, authentication, database modeling, file uploads, and cloud storage integration.

## Features

### Authentication

- User registration
- User login
- Password hashing using bcrypt
- JWT-based authentication
- Cookie-based session handling
- Role-based authorization

### User Roles

- User
- Artist

### Music Management

- Upload music files
- Store music metadata in MongoDB
- Upload files to ImageKit
- Associate uploaded songs with artists

### Album Management

- Create albums
- Associate multiple songs with an album
- Maintain artist ownership of albums

## Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication & Security

- JSON Web Token (JWT)
- bcrypt
- cookie-parser

### File Upload & Storage

- Multer
- ImageKit
- 
## Project Structure

```text
Spotify-basic-backend/
│
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── music.controller.js
│   │
│   ├── db/
│   │   └── db.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   ├── music.model.js
│   │   └── album.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── music.routes.js
│   │
│   ├── services/
│   │   └── storage.service.js
│   │
│   └── app.js
│
├── server.js
├── .env
├── package.json
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/navneetsharma212006/Spotify-basic-backend.git
```

```bash
cd Spotify-basic-backend
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key

IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key

IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

### Start the Server

```bash
npm start
```

The server will run at:

```text
http://localhost:3000
```
## Security Features

- Password hashing using bcrypt
- JWT authentication
- Cookie-based authentication
- Protected routes
- Role-based authorization
- Secure user credential storage

## Learning Objectives

This project was built to gain hands-on experience with:

- REST API development
- Express.js architecture
- MongoDB and Mongoose
- JWT authentication
- Role-based access control
- File uploads with Multer
- Cloud storage integration using ImageKit
- Backend project structure and organization

## Future Improvements

- Album creation API
- Add and remove songs from albums
- Song deletion and updates
- Search functionality
- Playlist management
- User profile management
- Favorite songs
- Recently played songs
- Admin dashboard
- Streaming support
- Recommendation system

## Repository

GitHub Repository:

https://github.com/navneetsharma212006/Spotify-basic-backend

## Author

Navneet Sharma

Backend development practice project built using Node.js, Express.js, MongoDB, JWT, Multer, and ImageKit.
