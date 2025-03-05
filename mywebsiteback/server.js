const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files (like CSS)

// In-memory store for accounts (for simplicity)
const users = [];

// Route: Display the Create Account page
app.get('/create-account', (req, res) => {
    res.sendFile(__dirname + '/create-account.html');
});

// Route: Handle form submission
app.post('/create-account', (req, res) => {
    const { username, email, password, 'confirm-password': confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
        return res.status(400).send('Passwords do not match!');
    }

    // Save the user data (for now, we store it in memory)
    users.push({ username, email, password });

    // Respond with a success message
    res.send('Account created successfully!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
