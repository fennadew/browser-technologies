var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

/* GET users listing. */
router.get('/contact/:name', function(req, res) {
    fetch('https://uinames.com/api/?amount=25&region=netherlands&ext')
        .then((resp) => resp.json()) // transform the data into json
        .then(function (data) {
            const newData = data.map((obj, i) => {
                let fullName = obj.name + ' ' + obj.surname;
                return {
                    name: fullName,
                    phone: obj.phone,
                    email: obj.email.toLowerCase().replace(/ $/, "").split(' ').join('_'),
                    photo: obj.photo,
                    link: fullName.toLowerCase().replace(/ $/, "").split(' ').join('-')
                }
            })
            console.log(newData);
            const selectedMeme = newData.filter((obj) => {
                return obj.link === req.params.name;
            })
            console.log(selectedMeme)
            res.render('index', {contacts: newData});
        })
        .catch(function (error) {
            // if there is any error you will catch them here
            console.log(error);
        });});

module.exports = router;
