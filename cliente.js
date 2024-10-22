export default class Cliente {
  constructor(nombre = "") {
    this.nombre = nombre;
    this.edad = 0;
    this.historialDeCompras = [];
  }
  comprarAuto(auto) {
    this.historialDeCompras.push(auto);
    auto.vender();
  }
  devolverAuto(auto) {
    const index = this.historialDeCompras.indexOf(auto);
    if (index !== -1) {
      this.historialDeCompras.splice(index, 1);
      auto.devolver();
    } else {
      console.log(
        `Sr ${this.nombre} no tiene un ${auto.marca} ${auto.modelo} en su historial.`
      );
    }
  }
  mostrarHistorial() {
    if (this.historialDeCompras.length === 0) {
      return `${this.nombre} no tiene compras registradas.`;
    } else {
      return `${this.nombre} ha comprado: ${this.historialDeCompras
        .map((auto) => auto.mostrarInfo())
        .join("")}`;
    }
  }
}
