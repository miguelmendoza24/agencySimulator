export default class Auto {
  constructor({ marca = "", modelo = "", año = 0, precio = 0 }) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.precio = precio;
    this.disponible = true;
  }

  actualizar(nuevosDatos) {
    Object.assign(this, nuevosDatos);
  }

  static buscarIndicePorPropiedad(autos, propiedad, valor) {
    if (["año", "precio"].includes(propiedad)) {
      valor = parseInt(valor);
    }
    return autos.findIndex((auto) => auto[propiedad] === valor);
  }

  static actualizarAutoPorPropiedad(autos, propiedad, valor, nuevosDatos) {
    const indice = this.buscarIndicePorPropiedad(autos, propiedad, valor);

    if (indice !== -1) {
      autos[indice].actualizar(nuevosDatos);
      return autos[indice];
    }
    return null;
  }
}

