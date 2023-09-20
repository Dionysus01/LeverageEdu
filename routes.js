// routes.js
const express = require('express');
const router = express.Router();

// Import your controllers for handling route logic
const UserController = require('./controllers/UserController');

// Define routes
router.post('/register', UserController.register);
router.post('/login', UserController.login);

// Add more routes as per your requirements

module.exports = router;
