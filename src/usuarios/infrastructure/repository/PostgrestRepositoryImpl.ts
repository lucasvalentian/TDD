import { Cuota } from '../../domian/entity/Cuota';
import { Prestamo } from '../../domian/entity/Prestamo';
import { PrestamoRepository } from '../../domian/repository/PrestamoRepository';
import Credito from '../model/credito';


class PrestamoRepositoryImpl implements PrestamoRepository{
   
      async generarPrestamo(prestamo: Prestamo): Promise<Prestamo> {


         console.log(prestamo);

         await Credito.create({
            cliente:prestamo.cliente,
            monto_prestamo:prestamo.monto,
            tasa_interes:prestamo.tasaInteres,
            plazo:prestamo.plazo,
            state:prestamo.state
         });

         console.log('Guadado de forma Exitosa');

         return prestamo;// throw new Error('Method not implemented.');
   }

   async guardarCuotas(cuotas: Cuota[]): Promise<void> {

      
         
      console.log('Guardando cuotas:', cuotas);
   }



}

export default PrestamoRepositoryImpl;