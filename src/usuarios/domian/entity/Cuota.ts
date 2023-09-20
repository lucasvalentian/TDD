

export class Cuota{

    constructor(
         public fecha: Date,
         public monto: string,
         public interes: number,
         public capitalMensual:number
         ) {}

        

         get fecha_credito():Date{

            return this.fecha
         }

         get monto_cre():string{
            return this.monto
         }

         get interes_cred():number{

            return this.interes
         }

         get capital_mont():number{
            return this.capitalMensual
         }



    
}