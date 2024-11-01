export default class Administrador {
  constructor(nombre = "") {
    this.nombre = nombre;
    this.sugerenciasYQuejas = [];
  }

  actualizar(nuevosDatos) {
    Object.assign(this, nuevosDatos);
  }
}