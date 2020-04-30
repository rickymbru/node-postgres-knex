const express = require ('express');
const routes = require ('./routes');

const app = express();
app.use(routes);

require('dotenv').config();

app.listen(3333 || process.env.PORT, () => console.log('Server is running'));