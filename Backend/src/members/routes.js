const { Router } = require('express');  
const router = Router();
const controller = require('./controller');

router.get('/', controller.getBooks);
router.put('/', controller.addCopies);
router.post('/', controller.addBooks);
router.delete('/', controller.deleteBook);
router.put('/', controller.deleteCopies);
router.put('/', controller.borrowBooks);
router.put('/', controller.returnBooks);
router.put('/', controller.deleteCopies);


module.exports = router;    