const { CityService } = require("../services/index");

const cityService = new CityService();
const create = async (req, res) => {
  const response = {
    status: 400,
    data: null,
    sucess: true,
    message: "",
    error: {}
  };
  try {
    const city = await cityService.createCity(req.body);
    response.status = 200;
    response.data = city;
    response.sucess = true;
    response.message = "successfully created a city";
  } catch (error) {
    response.status = 500;
    response.data = {};
    response.sucess = false;
    response.message = "Not able to create a city";
    response.error = error;
  }
  res.send(response);
};

const destroy = async (req, res) => {
      const response = {
    status: 400,
    data: null,
    sucess: true,
    message: "",
    error: {}
  };
  try {
    const Res = await cityService.deleteCity(req.params.id);
    response.status = 200;
    response.data = Res;
    response.sucess = true;
    response.message = "successfully deleted a city";
  } catch (error) {
    response.status = 500;
    response.data = {};
    response.sucess = false;
    response.message = "Not able to delete a city";
    response.error = error;
  }
  res.send(response);
};

const get =async (req, res) => {
      const response = {
    status: 400,
    data: null,
    sucess: true,
    message: "",
    error: {}
  };
  try {
    const city = await cityService.getCity(req.params.id);
    response.status = 200;
    response.data = city;
    response.sucess = true;
    response.message = "successfully fectch a city";
  } catch (error) {
    response.status = 500;
    response.data = {};
    response.sucess = false;
    response.message = "Not able to fetch a city";
    response.error = error;
  }
  res.send(response);
};

const update = async (req, res) => {
      const response = {
    status: 400,
    data: null,
    sucess: true,
    message: "",
    error: {}
  };
  try {
    const city = await cityService.updateCity(req.params.id,req.body);
    response.status = 200;
    response.data = city;
    response.sucess = true;
    response.message = "successfully updated a city";
  } catch (error) {
    response.status = 500;
    response.data = {};
    response.sucess = false;
    response.message = "Not able to update a city";
    response.error = error;
  }
  res.send(response);
};


const getAll = async (req, res) => {
  const response = {
    status: 400,
    data: null,
    sucess: true,
    message: "",
    error: {}
  };
  try {
    const city = await cityService.getAllCities(req.query);
    response.status = 200;
    response.data = city;
    response.sucess = true;
    response.message = "successfully fetch all cities";
  } catch (error) {
    response.status = 500;
    response.data = {};
    response.sucess = false;
    response.message = "Not able to update a city";
    response.error = error;
  }
  res.send(response);
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll
};
