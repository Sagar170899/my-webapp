const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World! This is a simple Express.js application.');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
