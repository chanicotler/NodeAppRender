const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.get('/', (req, res) => {

const sdk = require('api')('@render-api/v1.0#jw0325lr5hblce');

sdk.auth('rnd_CcweNi8LrbNAw0uBT0MSNHfcaRd8');
sdk.getServices({ limit: '20' })
    .then(({ data }) => {
        console.log(data);
        const serviceNames = data.map(service => service.service.name);
        console.log(serviceNames);
        res.json({ serviceNames });

})
    .catch(err => console.error(err));
});