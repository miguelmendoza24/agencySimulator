class Devolucion {
  constructor(cliente = "") {
    this.cliente = cliente;
    this.auto = auto;
    this.fecha = fecha;
  }
  mostrarInformacion() {
    console.log(
      `Devolución realizada por: ${this.cliente.nombre}
Auto: ${this.auto.marca} ${this.auto.modelo}, Año: ${this.auto.año}
Fecha: ${this.fecha}`
    );
  }
}
