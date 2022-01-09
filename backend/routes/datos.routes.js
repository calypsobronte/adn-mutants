import { Router } from "express";
const router = Router();

//We load the controller
import * as datosCtrl from "../controllers/datos.controllers";
import { checkAdn } from "../middlewares/check";

//We list the GET, POST, PUT, DELET
router.post('/mutant', checkAdn, datosCtrl.createDatos);
router.get('/all', datosCtrl.getDna);
router.get('/stats', datosCtrl.getStats);

export default router;