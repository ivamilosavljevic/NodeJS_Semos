const router = require('express').Router();
const tendzerinjaHandlers = require('../controllers/tendzerinja');
const bodyValidator = require('../middlewares/tendzereValidator');

router.get('/tendzerinja', tendzerinjaHandlers.getAllTendzerinja);
router.post('/tendzerinja', bodyValidator, tendzerinjaHandlers.addNewTendzere);
router.put('/tendzerinja/:_id', bodyValidator,tendzerinjaHandlers.updateTendzere);
router.delete('/tendzerinja/:_id',tendzerinjaHandlers.deleteTendzere);


router.use('*', (req, res, next) => {
    return res.status(404).json('Not Found');
})

module.exports = router;