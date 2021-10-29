const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const rutas = require('./routers/main');

app.use('/',rutas)
app.use('/about',rutas)

app.listen(port,() => console.log('Server On'));