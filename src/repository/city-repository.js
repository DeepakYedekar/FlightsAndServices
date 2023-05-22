const { City } = require('../models/index');

class cityRepository{
    async createCity({name}) {
        try {
            await City.create({name});
        } catch (error) {
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id:cityId
                }
            })
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = cityRepository;