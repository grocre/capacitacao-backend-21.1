const knex = require("../database");
const { v4 } = require("uuid");

class CrewControllers {

    static async index(req, res) {
        let crews = await knex("crews");
        return res.json(crews);
    }

    static async create(req, res) {
        let { name } = req.body;
        await knex("crews").insert({
            id: v4(), 
            name
        });
        return res.json({"message": "equipe cadastrada"});
    }
}

module.exports = CrewControllers;