const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000
const rutas = require('./routers/main');
app.use(express.static(path.resolve(__dirname, "./public")));

app.use('/',rutas)
app.use('/about',rutas)

app.listen(port,() => console.log('Server On'));