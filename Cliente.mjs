export default class Cliente {
  constructor({ nombre = "",edad = 0}) {
    this.nombre = nombre;
    this.edad = edad;
    this.historialDeCompras = [];
  }
  comprarAuto() {}
  
  devolverAuto() {
  }
  mostrarHistorial() {

  }
}
