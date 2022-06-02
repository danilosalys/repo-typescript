"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validations_1 = require("../domain/psicologo/validations");
const psicologo_controller_1 = require("../domain/psicologo/controllers/psicologo.controller");
const routes = express_1.default.Router();
routes.get("/psicologos", psicologo_controller_1.PsicologoController.getAll);
routes.get("/psicologos/:id", validations_1.PsicologoValidation.getOne, psicologo_controller_1.PsicologoController.getOne);
routes.post("/psicologos", validations_1.PsicologoValidation.create, psicologo_controller_1.PsicologoController.create);
routes.delete("/psicologos/:id", validations_1.PsicologoValidation.destroy, psicologo_controller_1.PsicologoController.delete);
routes.put("/psicologos/:id", validations_1.PsicologoValidation.update, psicologo_controller_1.PsicologoController.update);
module.exports = routes;
