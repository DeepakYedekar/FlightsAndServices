const router = require('express').Router();
const { create, get, update, destroy, getAll, bulkCreate } = require('../../controllers/city-controller');

router.post('/city',create);
router.post("/city/bulk", bulkCreate);
router.get("/city", getAll);
router.get('/city/:id',get);
router.patch('/city/:id',update);
router.delete('/city/:id',destroy);

module.exports = router;