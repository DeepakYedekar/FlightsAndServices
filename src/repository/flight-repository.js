const { Flights } = require('../models/index');
const { Op } = require('sequelize');

class flightRepository {
  #createFliter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      this.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      this.departureAirportId = data.departureAirportId;
    }
    if (data.minPrice && data.maxPrice) {
      Object.assign(filter, {
        [Op.and]: [
          { price: { [Op.lte]: data.maxPrice } },
          { price: { [Op.gte]: data.minPrice } }
        ]
      });
    }
    if (data.minPrice) {
      //gte is greater than equals to minPrice
      Object.assign(filter, {price:{ [Op.gte]: data.minPrice }})
    }
    if (data.maxPrice) {
      //gte is greater than equals to minPrice
      Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
    }
  }

  async createFlight(data) {
    try {
      const flights = await Flights.create(data);
      return flights;
    } catch (error) {
      console.log("something went wrong with city repository");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flights.findById(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong with flight repository");
      throw { error };
    }
  }

  async getAllFlights() {
    try {
      const flight = await Flights.findAll();
      return flight;
    } catch (error) {
      console.log("something went wrong with flight repository");
      throw { error };
    }
  }
}

module.exports = flightRepository;