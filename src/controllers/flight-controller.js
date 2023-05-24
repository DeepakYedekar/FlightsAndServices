const { flightService } = require('../services/index');

const create = async (req, res) => {
  const response = {
    status: 400,
    data: null,
    sucess: true,
    message: "",
    error: {}
  };
  try {
    const flight = await flightService.createFlight(req.body);
    response.status = 200;
    response.data = flight;
    response.sucess = true;
    response.message = "successfully created a flight";
  } catch (error) {
    response.status = 500;
    response.data = {};
    response.sucess = false;
    response.message = "Not able to create a flight";
    response.error = error;
  }
  res.send(response);
};

const getAllFlights = async (req, res) => {
    const response = {
      status: 400,
      data: null,
      sucess: true,
      message: "",
      error: {}
    };
    try {
      const response = await flightService.getAllFlights(req.query);
      response.status = 200;
      response.data = response;
      response.sucess = true;
      response.message = "successfully fetched all flight";
    } catch (error) {
      response.status = 500;
      response.data = {};
      response.sucess = false;
      response.message = "Not able to fetch flights";
      response.error = error;
    }
    res.send(response);
}
module.exports = {
  create,
  getAllFlights
}