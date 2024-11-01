export default class Vendedor {
  constructor({ nombre = "" }) {
    this.nombre = nombre;
    this.ventasRealizadas = [];
  }

  actualizar(nuevosDatos) {
    Object.assign(this, nuevosDatos);
  }
}
