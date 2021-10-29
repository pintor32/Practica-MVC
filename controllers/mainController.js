const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.resolve(__dirname, "./public")));

const mainController = {
    home: (req, res) => {
        res.sendFile(__dirname + "/views/home.html")
    },
    about: (req, res) => {
        res.sendFile(__dirname + "/views/about.html")
    }
};
// const mainController= {
//     home: (req, res) => {
//         res.send('HOLA')
//     },
//     about: (req, res) => {
//         res.send('ABOUT')
//     }
// };

module.exports = mainController;