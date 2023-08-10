// Create web server

// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middlewares/auth');

// Create comment
router.post('/create', auth, commentController.create);

// Delete comment
router.delete('/delete/:commentId', auth, commentController.delete);

// Get comment
router.get('/:commentId', auth, commentController.get);

// Get all comment
router.get('/', auth, commentController.getAll);

// Update comment
router.put('/update/:commentId', auth, commentController.update);

// Export module
module.exports = router;