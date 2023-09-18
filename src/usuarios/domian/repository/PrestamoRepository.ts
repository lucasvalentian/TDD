import { Cuota } from '../entity/Cuota';
import { Prestamo } from '../entity/Prestamo';

export interface PrestamoRepository{

     generarPrestamo(prestamo: Prestamo): Promise<Prestamo>;
     guardarCuotas(cuotas:Cuota[]):Promise<void>
}