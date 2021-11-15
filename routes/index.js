const router = require('express').Router()

const booksHandlers = require('../handlers/books');
const petHandlers = require('../handlers/pets');
router.get('/pets/', petHandlers.getAllPets) //kje se povika koga i e vreme
router.post('/pets', petHandlers.addNewPet)
router.get('/books', booksHandlers.getAllBooks)



module.exports = router;

