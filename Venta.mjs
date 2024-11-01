export default class Venta {
  constructor(cliente = "") {
    this.auto = auto;
    this.cliente = cliente;
    this.vendedor = vendedor;
    this.fecha = fecha;
  }
  actualizar(nuevosDatos) {
    Object.assign(this, nuevosDatos);
  }
}
