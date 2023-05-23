const { City } = require('../models/index');
const { Op } = require('sequelize');

class cityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("something went wrong with city repository");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId
        }
      });
      return true;
    } catch (error) {
      console.log("something went wrong with city repository");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    // {name:"Mumbai"}
    try {
      const city = await City.update(data, { where: { _id: cityId } });
      return city;
    } catch (error) {
      console.log("something went wrong with city repository");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong with city repository");
      throw { error };
    }
  }
  async getAllCity(filter) {
    try {
      if (filter.name) {
        const city = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name
            }
          }
        });
        return city;
      }
      const city = await City.findAll();
      return city;
    } catch (error) {
      console.log("something went wrong with city repository");
      throw { error };
    }
  }

  async bulkCreate(Data) {
      try {
          const city = await City.bulkCreate(Data);
          return city;
    } catch (error) {
      console.log("something went wrong with city repository");
      throw { error };
    }
  }
}

module.exports = cityRepository;