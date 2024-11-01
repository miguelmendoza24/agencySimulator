export default class Devolucion {
  constructor({ cliente = "", auto = "", fecha = "",motivo =""}) {
    this.cliente = cliente;
    this.auto = auto;
    this.fecha = fecha;
    this.motivo = motivo;
  }

  actualizar(nuevosDatos) {
    Object.assign(this, nuevosDatos);
  }
}
