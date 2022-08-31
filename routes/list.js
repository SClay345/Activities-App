const express = require('express')
const router = express.Router()
const listController = require('../controllers/list') 
const { ensureAuth } = require('../middleware/auth')
// Get Lists
router.get('/', ensureAuth, listController.getLists)
// Create Lists
router.post('/createList', listController.createList)
// Edit List Name
router.put('/editName', listController.editName)
// Delete List
router.delete('/deleteList', listController.deleteList)

module.exports = router