import { Cuota } from '../../domian/entity/Cuota';
import { Prestamo } from '../../domian/entity/Prestamo';
import { PrestamoRepository } from '../../domian/repository/PrestamoRepository';
import { CalculadoraCuotasService } from '../../domian/service/CalculadoraCuotasService';



export class GeneradorCuotasUseCase {

    constructor(
         private prestamoRepository:PrestamoRepository,
         private calculadoraCuotasService:CalculadoraCuotasService
    ){}

           public async generarCuotas(
                cliente: string,
                monto: number,
                tasaInteres: number,
                plazo: number
            ):Promise<Cuota[]>{

              
                const state=1;
                
                const nuevoPrestamo =new Prestamo(cliente,monto,tasaInteres,plazo,state);

                this.prestamoRepository.generarPrestamo(nuevoPrestamo);

                //CALCULAR LOS CUOTAS
                const cuotasGeneradas=this.calculadoraCuotasService.calcularCuotas(nuevoPrestamo);
                await this.prestamoRepository.guardarCuotas(cuotasGeneradas);
                return cuotasGeneradas;
                

            }

            public registerUser=async ({cliente,monto,tasaInteres,plazo}) => {
                const state=1;
                const nuevoPrestamo =new Prestamo(cliente,monto,tasaInteres,plazo,state);
               
                const userCreated = await this.prestamoRepository.generarPrestamo(nuevoPrestamo);
                return userCreated;
            }


        }