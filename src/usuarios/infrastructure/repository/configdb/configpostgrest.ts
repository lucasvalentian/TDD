
import db from '../../db/db'

const dbConnecion=async()=>{
    try {

        await db.authenticate();
        console.log('Conexión Exitosa');
        
    } catch (error) {
        throw new Error('Error al conectarse a la base de datos' );
        
    }
     
}

export default dbConnecion;