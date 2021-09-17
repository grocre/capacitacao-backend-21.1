const knex = require("../database");

function crewReference(name){
    let crew = knex("crews").where({name: name}).select("*");
    return crew;
}

module.exports = crewReference;
