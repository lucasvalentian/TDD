import { BaseEntity } from "../entity/BaseEntity";
import { Cuota } from "../entity/Cuota";
import { Prestamo } from "../entity/Prestamo";


export class CalculadoraCuotasService extends BaseEntity {

    calcularCuotas(prestamo: Prestamo): Cuota[] {

        const cuotas: Cuota[] = [];

        const montoPrestamo = prestamo.monto_cre;
        const tasaInteres = prestamo.tasa;
        const plazo=prestamo.plazo_cre;
       

        const tasaMensual = tasaInteres / 12 / 100;
        const cuotaMensual = (montoPrestamo * tasaMensual) /
        (1 - Math.pow(1 + tasaMensual, -plazo));

        let saldoRestante = montoPrestamo
        const fechaActual = new Date();

        for (let i = 0; i < plazo; i++) {

            const interesMensual = saldoRestante * tasaMensual;
            const capitalMensual = cuotaMensual - interesMensual;
            saldoRestante -= capitalMensual;

            const fechaVencimiento = new Date(fechaActual);
            fechaVencimiento.setMonth(fechaActual.getMonth() + i + 1);

            const cuota = new Cuota(
                fechaVencimiento, 
                CalculadoraCuotasService.Round(cuotaMensual),
                interesMensual,
                capitalMensual);


            cuotas.push(cuota);
            
        }

        
        return cuotas;

    }
}