export class Prestamo {
    constructor(
      public cliente: string,
      public monto: number,
      public tasaInteres: number,
      public plazo: number,
      public state:number,
    ) {}
  }

  