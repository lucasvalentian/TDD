export class Prestamo {
    constructor(
      
      public cliente: string,
      public monto: number,
      public tasaInteres: number,
      public plazo: number,
      public state:number,
    ) {}

    get clientes():string{

      return this.cliente
    }

    get monto_cre():number{
       return this.monto
    }

    get tasa():number{
      return this.tasaInteres
    }

    get plazo_cre():number{

      return this.plazo
    }

    get state_cre():number{

      return this.state;
    }






  }

  