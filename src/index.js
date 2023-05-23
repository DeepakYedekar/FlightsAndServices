const express = require('express');
const { PORT } = require('../src/config/serverConfig');
const ApiRoutes = require('./routes/index');
// const db = require('./models/index');

const setUpAndStartServer = async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api', ApiRoutes);
    // db.sequelize.sync({ alter: true });
    app.listen(PORT, () => { console.log(`server is started on port ${PORT}`) });
} 

setUpAndStartServer();