export default class Devolucion {
  constructor(cliente = "") {
    this.cliente = cliente;
    this.auto = auto;
    this.fecha = fecha;
  }

  actualizar(nuevosDatos) {
    Object.assign(this, nuevosDatos);
  }
}
