const router = require('express').Router();
const cityController = require('../../controllers/city-controller');
const flightController = require('../../controllers/flight-controller');

router.post("/city", cityController.create);
router.post("/city/bulk", cityController.bulkCreate);
router.get("/city", cityController.getAll);
router.get("/city/:id", cityController.get);
router.patch("/city/:id", cityController.update);
router.delete("/city/:id", cityController.destroy);
router.post("/flights", flightController.create);
router.get("/flights", flightController.getAll);
router.get("/flights", flightController.getAllFlights);

module.exports = router;