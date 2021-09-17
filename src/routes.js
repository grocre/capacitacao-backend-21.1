const { Router } = require('express');

const crewControllers = require("./controllers/crewControllers");
const memberController = require("./controllers/memberController");

const router = Router();

router.
    get("/crews", crewControllers.index);
    post("/crews", crewControllers.create);

    get("/members", memberController.index);
    post("/members", memberController.create);

module.exports = router;
