# 🏠 StayNest – Airbnb Inspired Property Listing Platform

StayNest is a full-stack web application inspired by Airbnb that allows users to explore, create, and manage rental property listings.

The platform enables users to sign up, log in, create property listings, upload images, categorize listings, leave reviews with ratings, and view the average rating of each property.

This project demonstrates the implementation of modern full-stack web development concepts including MVC architecture, authentication, authorization, database relationships, and cloud image storage.

---

# 🚀 Features

## 🔐 User Authentication
- User signup and login
- Secure authentication using Passport.js
- Password hashing using passport-local-mongoose
- Session-based login system
- Logout functionality

---

## 🏡 Property Listings
Users can:

- Create new property listings
- Upload property images
- View all available listings
- View detailed listing information
- Edit existing listings
- Delete their listings

Each listing includes:

- Title
- Description
- Image
- Price
- Location
- Country
- Category
- Reviews
- Owner information

---

## ⭐ Review & Rating System

StayNest includes a review and rating system.

Features include:

- Users can add reviews
- Users can give ratings
- Each listing displays the average rating
- Users can delete reviews

This helps users evaluate properties based on community feedback.

---

## 🔎 Search & Filtering

Users can easily find listings using:

- Country-based search
- Category-based filtering

Available categories include:

- Trending
- Rooms
- Iconic Cities
- Hills
- Coastal
- Camping
- Snow

---

# 🏗 Project Architecture
StayNest
│
├── controllers
├── DBModels
├── routes
├── middlewares.js
├── utils
├── views
├── public
├── app.js
└── validation.js

---

# 🛠 Tech Stack

Frontend:
- HTML
- CSS
- EJS
- EJS-Mate

Backend:
- Node.js
- Express.js

Database:
- MongoDB
- Mongoose

Authentication:
- Passport.js
- Passport Local
- Passport Local Mongoose

File Upload:
- Multer
- Cloudinary

Other Tools:
- Joi Validation
- Connect Flash
- Express Session
- Connect Mongo
- Method Override
- Dotenv

---

# 📦 Installation

Clone the repository

git clone https://github.com/yourusername/staynest.git

Go to project directory

cd staynest

Install dependencies

npm install

Create .env file and add

ATLASDB_URL=your_mongodb_connection_string  
SESSION_SECRET=your_secret  
CLOUDINARY_KEY=your_cloudinary_key  
CLOUDINARY_SECRET=your_cloudinary_secret  

Run the server

node app.js

Server runs at:

http://localhost:1000

---

# 🎯 Learning Outcomes

Through this project I learned:

- Full-stack web development
- RESTful routing
- Authentication and authorization
- MVC architecture
- MongoDB schema relationships
- Cloud image storage
- Session management
- Error handling in Express

---

# 👨‍💻 Author

Kshitij Verma  
B.Tech Computer Science & Engineering  
ABES Engineering College

Skills:
HTML  
CSS  
JavaScript  
React  
Node.js  
MongoDB

The project follows the MVC (Model View Controller) architecture.
