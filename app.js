const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Updated this line
require('./db/conn');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "SignIn", "signIn.html"));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "dashboard", "dashboard.html"));
});

app.get('/Register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','Register', 'Register.html'));
});

app.listen(port, () => {
    console.log(`Your server is running at port: localhost:${port}/`);
});