const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Your app is listening on port ${PORT}`);
});