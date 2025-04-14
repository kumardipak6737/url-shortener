const express = require('express');
const router = express.Router();
const urlController = require('../controller/url');


router.post('/', urlController.handlegenerateUrl);

router.get('/:ShortId', urlController.getUrlAndUpadte);

router.get('/analytics/:ShortId', urlController.analytics);



module.exports = router;