const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = {};

app.use(express.json());

app.get('/get/:key', (req, res) => {
    res.json({ value: db[req.params.key]});
});

app.get('/dbinfo', (req, res) => {
    const dbKeys = Object.keys(db);

    const info = {
        size: dbKeys.length
    };

    if ('true' === req.query.details) {
        info.keys = dbKeys;
    }

    res.json(info);
});

app.post('/set', (req, res) => {
    db[req.body.key] = req.body.value;
    res.status(201).json({ 
        status: 'OK' 
    });
});

app.get('/', (req, res) => {
    res.json({
        appName: process.env.npm_package_name,
        appVersion: process.env.npm_package_version
    });
});

app.listen(PORT, () => {
    console.log(`Express application listening on port ${PORT}.`);
});