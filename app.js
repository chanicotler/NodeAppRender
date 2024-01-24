const express = require('express');
const app = express();
const port = 3000;
const sdk = require('api')('@render-api/v1.0#jw0lr5hblce');

app.get('/', (req, res) => {
    sdk.auth('rnd_CcweNi8LrbNAw0uBT0MfcaRd8');
    sdk.getServices({ limit: '20' })
        .then(({ data }) => {

            res.json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
