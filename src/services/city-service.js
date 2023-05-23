const { cityRepository } = require("../repository/index");

class cityService {
  // if you dont make any constructor there is no problem in that as well
  constructor() {
    this.cityRepository = new cityRepository();
  }

  async createCity(name) {
    try {
      const data = await this.cityRepository.createCity(name);
      return data;
    } catch (error) {
      console.log("something went wrong with service layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const data = await this.cityRepository.deleteCity(cityId);
      return data;
    } catch (error) {
      console.log("something went wrong with service layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const response = await this.cityRepository.updateCity(cityId, data);
      return response;
    } catch (error) {
      console.log("something went wrong with service layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const response = await this.cityRepository.getCity(cityId);
      return response;
    } catch (error) {
      console.log("something went wrong with service layer");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      const response = await this.cityRepository.getAllCity({
        name: filter.name
      });
      return response;
    } catch (error) {
      console.log("something went wrong with service layer");
      throw { error };
    }
  }

  async bulkCreateCities(Data) {
    try {
      const response = await this.cityRepository.bulkCreate(Data);
      return response;
    } catch (error) {
      console.log("something went wrong with service layer");
      throw { error };
    }
  }
}

module.exports = cityService;