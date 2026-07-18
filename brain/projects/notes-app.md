# Notes App

## Overview

The Notes App is a full-stack web application that I built to strengthen my understanding of backend development, authentication, database management, and REST API design.

The application allows users to securely create, organize, update, and delete personal notes after authenticating themselves. My goal was to build a practical CRUD application while following good backend development practices.

---

## Why I Built It

I wanted to move beyond basic CRUD tutorials and build a complete backend application that included authentication, database integration, secure APIs, and deployment.

This project helped me understand how different backend components work together to create a real-world application.

---

## My Role

I independently designed and developed the complete backend of the application.

My responsibilities included:

- Designing the REST API
- Building authentication
- Creating CRUD operations
- Database modeling
- File upload integration
- API testing
- Deployment

---

## Technologies Used

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Authentication

- JSON Web Tokens (JWT)
- bcrypt

### File Storage

- AWS S3

### Tools

- Postman
- Git
- GitHub
- VS Code
- Render

---

## Features

The application includes:

- User registration
- User login
- JWT authentication
- Secure password hashing
- Create notes
- Update notes
- Delete notes
- View personal notes
- Profile image upload
- Cloud storage using AWS S3
- RESTful APIs

---

## Authentication

Authentication is implemented using JSON Web Tokens (JWT).

After logging in successfully, the server generates a JWT token which is sent to the client. Protected routes verify this token before allowing access to user-specific resources.

Passwords are securely hashed using bcrypt before being stored in the database.

This ensures that user credentials remain secure.

---

## Database Design

MongoDB is used as the primary database.

Mongoose is used to define schemas for users and notes, making it easier to validate data and interact with the database.

The application maintains relationships between users and their notes so that every user can only access their own data.

---

## AWS S3 Integration

One of the advanced features I added was profile image upload using Amazon S3.

Instead of storing images locally, uploaded files are securely stored in an S3 bucket.

While implementing this feature, I learned about:

- AWS IAM
- S3 Buckets
- Bucket Policies
- File uploads using Multer
- AWS SDK
- Object storage

This was my first experience integrating a cloud storage service into a backend application.

---

## Biggest Challenges

Some of the biggest challenges I faced included:

- Understanding JWT authentication flow
- Configuring MongoDB Atlas
- Debugging middleware issues
- Setting up AWS S3 correctly
- Managing environment variables securely
- Deploying the backend on Render

Working through these problems helped me become much more comfortable with backend debugging and deployment.

---

## What I Learned

This project significantly improved my backend development skills.

Some of the key concepts I learned include:

- REST API development
- Express middleware
- Authentication and authorization
- MongoDB and Mongoose
- Cloud storage with AWS S3
- Environment variable management
- Backend deployment
- API testing using Postman

---

## Favorite Part

My favorite part of the project was implementing authentication and integrating AWS S3.

Seeing users securely log in and upload profile images made the application feel much closer to a production-ready product than a simple CRUD project.

It also gave me confidence in working with cloud services.

---

## Future Improvements

Some features I would like to add in the future include:

- Rich text notes
- Categories and tags
- Note sharing
- Search functionality
- AI-powered note summaries
- Markdown support
- Dark mode
- Reminder notifications
- Version history

---

## Why This Project Matters

This project marked an important step in my backend development journey.

It helped me understand how authentication, databases, cloud storage, and REST APIs come together in a real application.

More importantly, it gave me confidence in building secure backend systems and integrating third-party cloud services.