import express, { Request, Response } from 'express';

import {GeneradorCuotasUseCase} from '../../application/service/GeneradorCuotasUseCase';
import { CalculadoraCuotasService } from '../../domian/service/CalculadoraCuotasService';
import { PrestamoRepository } from '../../domian/repository/PrestamoRepository';
import validateRequest from '../../common/validation/validator';


export class PrestamoController {

          constructor(private generadorCuotasUseCase:GeneradorCuotasUseCase){

               this.generarPrestamo=this.generarPrestamo.bind(this);
          }

          async generarPrestamo(req: Request, res: Response) {

            validateRequest(req, res, async () =>{

                  try {
                    const { cliente, monto, tasaInteres, plazo } = req.body;

                    const clienteUser={
                      cliente, monto, tasaInteres, plazo 
                    }
              
                    // Puedes utilizar las dependencias aquí
                    const cuotas = await this.generadorCuotasUseCase.generarCuotas(cliente, monto, tasaInteres, plazo );

                
                    res.json({ clienteUser,cuotas });


                  } catch (error) {

                    console.error('Error al procesar la solicitud:', error);
                    res.status(500).json({ error: 'Hubo un error al procesar la solicitud' });
                  }
                  


            })

           

          }

          

}
