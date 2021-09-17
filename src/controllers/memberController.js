const knex = require("../database");
const { v4 } = require("uuid");

const crewReferences = require("../services/crewReferences");

class CrewControllers {

    static async index(req, res) {
        let members = await knex("members");
        return res.json(members);
    }

    static async create(req, res) {
        let { name, crew } = req.body;
        let { id } = await crewReferences(crew).first();
        await knex("members").insert({
            id: v4(), 
            name, 
            crew_id: id
        })
        res.json({"message": "usuários cadastrado"})
    }
}

module.exports = CrewControllers;