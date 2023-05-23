const { Flights } = require('../models/index');

class flightRepository {
  async createFlight({ name }) {
    try {
      const flights = await Flights.create({ name });
      return flights;
    } catch (error) {
      console.log("something went wrong with city repository");
      throw { error };
    }
  }
}

module.exports = flightRepository;