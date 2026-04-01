const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Homepage Route
app.get('/index.html', (req, res) => {
    res.send(`
        <h1>Welcome to My Application</h1>
        <p>This is the homepage.</p>
        <a href="/about.html">About</a> |
        <a href="/contact.html">Contact</a>
    `);
});

// About Route
app.get('/about.html', (req, res) => {
    res.send(`
        <h1>About This Application</h1>
        <p>This application demonstrates basic Express routing.</p>
        <a href="/index.html">Home</a>
    `);
});

// Contact Route
app.get('/contact.html', (req, res) => {
    res.send(`
        <h1>Contact Us</h1>
        <p>Email: example@email.com</p>
        <p>Instagram: @myapp</p>
        <a href="/index.html">Home</a>
    `);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
