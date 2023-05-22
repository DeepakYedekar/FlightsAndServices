const express = require('express');
const { PORT } = require('../src/config/serverConfig');

const setUpAndStartServer = async () => {
    const app = express();
    app.listen(PORT, () => { console.log(`server is started on port ${PORT}`) });
} 

setUpAndStartServer();