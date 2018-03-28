var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

let newData = [
    {
        name: "Couldn't recieve contactlist",
        phone: '',
        email: '',
        photo: '',
        link: '/'
    }
]

fetch('https://uinames.com/api/?amount=25&region=netherlands&ext')
    .then((resp) => resp.json()) // transform the data into json
    .then(function (data) {
        const dataSort = data.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
        newData = dataSort.map((obj, i) => {
            let fullName = obj.name + ' ' + obj.surname;
            return {
                name: fullName,
                phone: obj.phone,
                email: obj.email.toLowerCase().replace(/ $/, "").split(' ').join('_'),
                photo: obj.photo,
                link: fullName.toLowerCase().replace(/ $/, "").split(' ').join('-')
            }
        })
    })
    .catch(function (error) {
        // if there is any error you will catch them here
        console.log(error);
    });

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {contacts: newData});
});

router.post('/', function(req, res) {
    const filterContacts = newData.filter((obj) => {
        let name = obj.name.toLowerCase();
        let input = req.body.name[0].toLowerCase();
        return name.startsWith(input);
        });
        res.render('index', {contacts: filterContacts});

    // res.send(req.body.name[0]);
});

router.get('/:name', function (req, res) {
    const selectedContact = newData.filter((obj) => {
        return obj.link === req.params.name;
    })
    if (selectedContact.length > 0) {
        res.render('contact', {contact: selectedContact[0]});
    } else {
        res.render('error');
    }
});

module.exports = router;
