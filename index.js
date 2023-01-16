const express = require('express');
const qr = require('qr-image');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Welcome to QR Code Generator")
})

app.get('/qr', (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send('Missing url parameter');
    }

    const qr_svg = qr.imageSync(url, { type: 'svg' });
    res.type('svg');
    res.send(qr_svg);
});

app.listen(PORT, () => console.log(`Server Running On PORT ${PORT}`))