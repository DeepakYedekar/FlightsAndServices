const router = require('express').Router();
const { create, get, update, destroy, getAll } = require('../../controllers/city-controller');

router.post('/city',create);
router.get("/city", getAll);
router.get('/city/:id',get);
router.patch('/city/:id',update);
router.delete('/city/:id',destroy);

module.exports = router;