let router = require('express').Router();

let PagesController = require('../controllers/PagesController');

router.get('/', PagesController.homepage);

router.post('/cotizacion.html', PagesController.answers);

module.exports = router;
