
export abstract class BaseEntity {
    
        protected uuidV4():string{
            const uuidv4 = require('uuid/v4');
            return uuidv4;
        }

      protected static getCurrentTimeIso():string{

        const fecha= new Date();
        const fechaString=fecha.toLocaleDateString('en-US',{
            timeZone: 'America/Lima'
        });

        return new Date(fechaString).toISOString().slice(0, -1);
      }

      protected static Round(mount):string{

        return (Math.round(mount*100)/100).toFixed(2); 
     }




}