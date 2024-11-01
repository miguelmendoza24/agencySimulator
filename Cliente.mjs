export default class Cliente {
  constructor({ nombre = "", edad = 0 }) {
    this.nombre = nombre;
    this.edad = edad;
    this.historialDeCompras = [];
  }

  actualizar(nuevosDatos) {
    Object.assign(this, nuevosDatos);
  }
}
