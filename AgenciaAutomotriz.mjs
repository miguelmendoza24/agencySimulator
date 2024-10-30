import Auto from "./Auto.mjs";
import Cliente from "./Cliente.mjs";
import Vendedor from "./Vendedor.mjs";

export default class Concesionaria {
  constructor(nombre = "") {
    this.nombre = nombre;
    this.autos = [];
    this.vendedores = [];
    this.administradores = [];
    this.clientes = [];
    this.ventas = [];
    this.devoluciones = [];
  }
  //create
  crearAuto(auto) {
    const nuevoAuto = new Auto(auto);
    this.autos.push(nuevoAuto);
  }
  //leer
  obtenerAutos() {
    return this.autos;
  }
  //leer
  obtenerAutoPorMarca(marca) {
    const autosPorMarca = this.autos.filter((auto) => auto.marca === marca);
    return autosPorMarca;
  }
  //actualizar
  actualizarAuto(index, nuevosDatos) {
    this.autos[index].actualizar(nuevosDatos);
  }

  //actualizar
  actualizarAutoPorModelo(modelo, nuevosDatos) {
    const autos = this.autos.filter((auto) => auto.modelo === modelo);
    if (autos.length > 0) {
      autos.forEach((auto) => auto.actualizar(nuevosDatos));
    }
  }
  //borrar
  eliminarAutoPorIndice(index) {
    if (index >= 0 && index < this.autos.length) {
      this.autos.splice(index, 1);
    }
  }

  //clase cliente crud

  //create
  agregarCliente(cliente) {
    const nuevoCliente = new Cliente(cliente);
    this.clientes.push(nuevoCliente);
  }
  //leer
  obtenerClientes() {
    return this.clientes;
  }

  //leer
  obtenerClientePorNombre(nombre) {
    return this.clientes.find((cliente) => cliente.nombre === nombre);
  }
  //actualizar
  actualizarCliente(index, nuevosDatos) {
    this.clientes[index].actualizar(nuevosDatos);
  }
  //eliminar
  eliminarClientePorIndice(indice) {
    if (indice >= 0 && indice < this.clientes.length) {
      this.clientes.splice(indice, 1);
    }
  }

  // clase vendedor crud

  //create
  agregarVendedor(vendedor) {
    const vendedorNuevo = new Vendedor(vendedor);
    this.vendedores.push(vendedorNuevo);
  }

  //leer
  obtenerVendedores() {
    return this.vendedores
  }

  //leer
  obtenerVendedoresPorNombre(nombre) {
    const vendedorPorNombre = this.vendedores.filter((vendedor) => vendedor.nombre === nombre)
    return vendedorPorNombre
  }
  //actualizar
  actualizarVendedor(index, nuevosDatos) {
    this.vendedores[index].actualizar(nuevosDatos)
  }

//eliminar
  eliminarVendedor(index) {
    if (index >= 0 && this.vendedores.length) {
      this.vendedores.splice(index, 1)
    }
  }


  //clase venta crud

  registrarVenta(venta) {
    this.ventas.push(venta);
  }
  registrarDevolucion(devolucion) {
    this.devoluciones.push(devolucion);
  }
  obtenarInventario() {
    return this.autos;
  }
  obtenerVentas() {
    return this.ventas;
  }
  obtenerDevoluciones() {
    return this.devoluciones;
  }
}

/*
1.- Quitar nombre de class a los archivos =listo
2.- Añadir operaciones CRUD a las propiedades guardadas en la clase main
3.- Crear un script donde se implemente la clase main (usar imports/exports) y al menos se prueben los métodos 
4.- Hacer un módulo para ejecutar y mostrar datos en consola, de tal manera que sea interactivo con el usuario
5.- Hacer un servicio que controle a las clases y los datos
Para el paso 4 se debe revisar el core package "readline"

¿Qué son los core packages en node?

Para la operación de creación: quisiera que dentro de los métodos para agregar se implementaran las clases respectivas, ejemplo, agregarAuto debería llevar un "new Auto"

Investigar imports/exports en ecma6 y ecma5 
*/
