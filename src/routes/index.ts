import express from "express";
import { PsicologoValidation } from '../domain/psicologo/validations'
import { PsicologoController } from '../domain/psicologo/controllers/psicologo.controller';

const routes = express.Router();

routes.get(
    "/psicologos", 
    PsicologoController.getAll
);
routes.get(
  "/psicologos/:id",
  PsicologoValidation.getOne,
  PsicologoController.getOne
);
routes.post(
  "/psicologos",
  PsicologoValidation.create,
  PsicologoController.create
);
routes.delete(
  "/psicologos/:id",
  PsicologoValidation.destroy,
  PsicologoController.delete
);
routes.put(
  "/psicologos/:id",
  PsicologoValidation.update,
  PsicologoController.update
);


module.exports = routes;
