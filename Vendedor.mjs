export default class Vendedor {
  constructor({ nombre = "" }) {
    this.nombre = nombre;
    this.ventasRealizadas = [];
  }

  actualizar(nuevosDatos) {
    Object.assign(this, nuevosDatos);
  }

  realizarVenta(cliente, auto) {
    if (auto.disponible) {
      cliente.comprarAuto(auto);
      this.ventasRealizadas++;
    } else {
      console.log(`El auto ${auto.marca} ${auto.modelo} no está disponible.`);
    }
  }
}
