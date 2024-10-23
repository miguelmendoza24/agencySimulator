import Auto from "./auto.mjs";
import Cliente from "./cliente.mjs";
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

  //create
  agregarCliente(cliente) {
    const nuevoCliente = new Cliente(cliente);
    this.clientes.push(nuevoCliente);
  }
  //create
  agregarVendedor(vendedor) {
    const vendedorNuevo = new Vendedor(vendedor)
    this.vendedores.push(vendedorNuevo);
  }
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

  obtenerAutoPorMarca(marca) {
    
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
