class CrudRepository{
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log('Something went wrong in Crud Repo');
            throw { error };
        }
    }

    async destroy(modelId) {
         try {
             await this.model.destroy({
                 where: {
                     id: modelId
                }
             })
             return true;
        } catch (error) {
            console.log("Something went wrong in Crud Repo");
            throw { error };
        }
    }

    async get(modelId) {
         try {
             const result = await this.model.findByPk(modelId);
             return result;
        } catch (error) {
            console.log("Something went wrong in Crud Repo");
            throw { error };
        }
    }

    async getAll() {
         try {
             const result = await this.model.findAll(modelId);
             return result;
        } catch (error) {
            console.log("Something went wrong in Crud Repo");
            throw { error };
        }
    }

    async update(data,modelId) {
         try {
             let result = await this.model.update(data, {
                 where: {
                     id: modelId
                }
             })
             return result;
        } catch (error) {
            console.log("Something went wrong in Crud Repo");
            throw { error };
        }
    }
}

module.exports = CrudRepository;