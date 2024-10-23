export default class Auto {
  constructor({ marca = "", modelo = "", año = 0, precio = 0 }) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.precio = precio
    this.disponible = true;
  }
  vender() {
  }
  devolver() {
  }
  mostrarInfo() {
  }
}