class Venta {
  constructor(cliente = "") {
    this.auto = auto;
    this.cliente = cliente;
    this.vendedor = vendedor;
    this.fecha = fecha;
  }
  mostrarInformacion() {
    console.log(
      `Venta: Cliente: ${this.cliente.nombre} ${this.cliente.apellido
      } Auto: ${this.auto.mostrarInfo()} Vendedor: ${this.vendedor.nombre
      } Fecha: ${this.fecha}`);
  }
}
