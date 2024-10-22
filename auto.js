export default class Auto {
  constructor(marca = "", modelo = "", año = 0, precio = 0) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.precio = precio
    this.disponible = true;
  }
  vender() {
    this.disponible = false;
    console.log(`El auto ${this.marca} ${this.modelo} ha sido vendido.`);
  }
  devolver() {
    this.disponible = true;
    console.log(`El auto ${this.marca} ${this.modelo} ha sido devuelto.`);
  }
  mostrarInfo() {
    console.log(
      `Auto: ${this.marca} ${this.modelo}, Año: ${this.año}, Precio: $${this.precio}, Estado: ${this.disponible}`
    );
  }
}