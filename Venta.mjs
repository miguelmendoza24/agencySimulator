export default class Venta {
  constructor({ auto = "", cliente = "", vendedor = "", precio = ""}) {
    this.auto = auto;
    this.cliente = cliente;
    this.vendedor = vendedor;
    this.precio = precio
  }
  actualizar(nuevosDatos) {
    Object.assign(this, nuevosDatos);
  }
}
