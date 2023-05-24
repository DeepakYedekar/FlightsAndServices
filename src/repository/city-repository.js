const { City } = require('../models/index');
const { Op } = require('sequelize');
const CrudRepository = require('./crud-repository');
const {City} = require('../models/index');

class cityRepository extends CrudRepository {
  constructor() {
    super(City);
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