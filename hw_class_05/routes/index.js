const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../api-docs.json');
const residentHandlers = require('../handlers/residents');

router.get('/residents', residentHandlers.getAllResidents);
router.post('/residents', residentHandlers.addResident);
router.put('/residents/:_id', residentHandlers.editResident);
router.delete('/residents/:_id', residentHandlers.deleteResident);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocs));

module.exports = router;