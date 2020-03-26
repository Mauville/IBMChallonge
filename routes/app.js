// Define the router instance and point to the controller 
let router = require('express').Router();
let PagesController = require('../controllers/PagesController');

router.post('/cotizacion.html', PagesController.answers);

module.exports = router;
