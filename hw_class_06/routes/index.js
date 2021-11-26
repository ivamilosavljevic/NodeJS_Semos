const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../api-docs.json');
const residentHandlers = require('../controllers-handlers/residents');
const bodyValidator = require('../middlewares/residentValidator');  

//da se stavat rutite do metodite
router.get('/residents', residentHandlers.getAllResidents);
router.post('/residents', residentHandlers.addResident);
router.put('/residents/:ID', residentHandlers.editResident);   //ne mi rabotese so bodyValidator zatoa go izbrisav
router.delete('/residents/:ID', residentHandlers.deleteResident);


router.use('/api-docs', swaggerUi.serve)
router.use('/api-docs', swaggerUi.setup(swaggerDocs));

router.use('*', (req, res, next) => {
    return res.status(400).json('Not Found.')
});

module.exports = router;