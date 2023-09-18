import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { PrestamoController } from '../controller/prestamoController';
import { GeneradorCuotasUseCase } from '../../application/service/GeneradorCuotasUseCase';
import { CalculadoraCuotasService } from '../../domian/service/CalculadoraCuotasService';
import PrestamoRepositoryImpl from '../repository/PostgrestRepositoryImpl';

const router = express.Router();
router.use(bodyParser.json());

//INICIALIZAMOS REPOSITORES
const prestamoRepositoryImpl=new PrestamoRepositoryImpl();

//INICIALIZAMOS CASOS DE USO
const generadorCuotasUseCase=new GeneradorCuotasUseCase(prestamoRepositoryImpl, new CalculadoraCuotasService);

//iniciart el user controller

  
const prestamoController = new PrestamoController(generadorCuotasUseCase)



  router.use(bodyParser.urlencoded({ extended: true }));
  router.post('/prestamo', prestamoController.generarPrestamo);

  export default router;