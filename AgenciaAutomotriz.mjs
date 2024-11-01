import Auto from "./Auto.mjs";
import Cliente from "./Cliente.mjs";
import Vendedor from "./Vendedor.mjs";
import Venta from "./Venta.mjs";

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
  buscarAuto(propiedad, valor) {
    return this.autos.find((auto) => auto[propiedad] === valor);
  }

  //actualizar
  actualizarAuto(propiedad, valor, nuevosDatos) {
    const auto = this.autos.find((auto) => auto[propiedad] === valor);
    if (auto) {
      auto.actualizar(nuevosDatos);
    }
  }

  //borrar
  eliminarAuto(propiedad, valor) {
    this.autos = this.autos.filter((auto) => auto[propiedad] !== valor);
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
  buscarCliente(propiedad, valor) {
    return this.clientes.find((cliente) => cliente[propiedad] === valor);
  }
  //actualizar
  actualizarCliente(propiedad, valor, nuevosDatos) {
    const cliente = this.clientes.find(
      (cliente) => cliente[propiedad] === valor
    );
    if (cliente) {
      cliente.actualizar(nuevosDatos);
    }
  }
  //eliminar
  eliminarCliente(propiedad, valor) {
    this.clientes = this.clientes.filter(
      (cliente) => cliente[propiedad] !== valor
    );
  }

  // clase vendedor crud

  //create
  agregarVendedor(vendedor) {
    const vendedorNuevo = new Vendedor(vendedor);
    this.vendedores.push(vendedorNuevo);
  }

  //leer
  obtenerVendedores() {
    return this.vendedores;
  }

  //leer
  buscarVendedor(propiedad, valor) {
    return this.vendedores.find((vendedor) => vendedor[propiedad] === valor);
  }
  //actualizar
  actualizarVendedor(propiedad, valor, nuevosDatos) {
    const vendedor = this.vendedores.find((vendedor) => vendedor[propiedad] === valor);
    if(vendedor){ 
    vendedor.actualizar(nuevosDatos);
    }
  }
  //eliminar
  eliminarVendedor(propiedad, valor) {
    this.vendedores = this.vendedores.filter(
      (vendedor) => vendedor[propiedad] !== valor
    );
  }
  //clase venta crud
  registrarVenta(venta) {
    const nuevaVenta = new Venta(venta)
    this.ventas.push(nuevaVenta);
  }

  //leer
  obtenerVentas() {
    return this.ventas;
  }

  //leer
  buscarVenta(propiedad, valor) {
    return this.ventas.find((venta) => venta[propiedad] === valor)
  }
    //actualizar
  actualizarVenta(propiedad, valor, nuevosDatos) {
    const venta = this.ventas.find((venta) => venta[propiedad] === valor)
    if (venta) {
      venta.actualizar(nuevosDatos)
    }
  }
    //eliminar
  eliminarVenta(propiedad, valor) {
    this.ventas = this.ventas.filter((venta) => venta[propiedad] !== valor)
  }


    //clase devoluciones CRUD
  
  registrarDevolucion(devolucion) {
    this.devoluciones.push(devolucion);
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
