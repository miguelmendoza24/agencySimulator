class Administrador {
  constructor(nombre = "") {
    this.nombre = nombre;
    this.sugerenciasYQuejas = [];
  }
  gestionarQueja(queja) {
    this.sugerenciasYQuejas.push(queja);
    console.log(`Queja o sugerencia recibida: "${queja}"`);
  }
  mostrarQuejas() {
    if (this.sugerenciasYQuejas.length === 0) {
      console.log("No se han recibido quejas ni sugerencias.");
    } else {
      console.log("Quejas y sugerencias recibidas:");
      const resultado = "";
      for (let index = 0; index < this.sugerenciasYQuejas.length; index++) {
        resultado += `${index + 1}. ${this.sugerenciasYQuejas[index]}`
      }
      return resultado;
    }

  }

}