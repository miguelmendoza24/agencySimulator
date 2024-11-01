import Concesionaria from "./agenciaAutomotriz.mjs";

const laConcesionaria = new Concesionaria("Los evomind");

laConcesionaria.crearAuto({
  marca: "toyota",
  modelo: "erizo",
  año: 2024,
  precio: 30300,
});

laConcesionaria.crearAuto({
  marca: "mazda",
  modelo: "el chulo",
  año: 2023,
  precio: 29000,
});

laConcesionaria.crearAuto({
  marca: "cheroque",
  modelo: "Rayo",
  año: 2025,
  precio: 32000,
});

laConcesionaria.actualizarAuto("marca", "toyota", {
  modelo: "Erizo Plus",
  año: 2025,
  precio: 31000,
});

//console.log(laConcesionaria);
laConcesionaria.eliminarAuto("marca", "mazda");

const autosDisponibles = laConcesionaria.obtenerAutos();
const buscarAuto = laConcesionaria.buscarAuto("marca", "toyota");

laConcesionaria.agregarCliente({ nombre: "arcinicuiteco", edad: 45 });
laConcesionaria.agregarCliente({ nombre: "zinforiano", edad: 51 });
laConcesionaria.agregarCliente({ nombre: "macumba", edad: 35 });

//console.log(laConcesionaria);
console.log("------aqui termina-------");

laConcesionaria.actualizarCliente("nombre", "macumba", { edad: 26 });
const buscarCliente = laConcesionaria.buscarCliente("nombre", "macumba");
laConcesionaria.eliminarCliente("nombre", "arcinicuiteco");

const clientes = laConcesionaria.obtenerClientes();

laConcesionaria.agregarVendedor({ nombre: "serafin" });
laConcesionaria.agregarVendedor({ nombre: "chawi" });
laConcesionaria.agregarVendedor({ nombre: "maria" });

//console.log(laConcesionaria);
console.log("------aqui termina-------");

laConcesionaria.actualizarVendedor("nombre", "maria", { nombre: "mario" });

const buscarVendedor = laConcesionaria.buscarVendedor("nombre", "chawi");

laConcesionaria.eliminarVendedor("nombre", "serafin");
const vendedores = laConcesionaria.obtenerVendedores();

laConcesionaria.registrarVenta({
  cliente: "macumba",
  auto: "toyota",
  vendedor: "chawi",
  precio: 31000,
});

laConcesionaria.actualizarVenta("cliente", "macumba", { precio: 30500 });

const buscarVenta = laConcesionaria.buscarVenta("cliente", "macumba");

laConcesionaria.eliminarVenta("cliente", "macumba");

laConcesionaria.registrarDevolucion({
  cliente: "zinforiano",
  auto: "toyota",
  fecha: "2024-10-01",
  motivo: "defecto de fabrica",
});

laConcesionaria.actualizarDevolucion("cliente", "zinforiano", {
  motivo: "Cambio de modelo",
});

const buscarDevolucion = laConcesionaria.buscarDevolucion(
  "cliente",
  "zinforiano"
);

laConcesionaria.crearAdministrador("Jorge");
laConcesionaria.crearAdministrador("Marta");
console.log(laConcesionaria.obtenerAdministradores());

laConcesionaria.actualizarAdministrador("nombre", "Marta", {
  nombre: "Marta Gómez",
});

laConcesionaria.obtenerAdministradores();

laConcesionaria.eliminarAdministrador("nombre", "Jorge");
laConcesionaria.obtenerAdministradores();
console.log(laConcesionaria);

/*
laConcesionaria.obtenerDevoluciones()
console.log("------aqui termina-------");
console.log(buscarDevolucion);
console.log("------aqui termina-------");
laConcesionaria.eliminarDevolucion("cliente", "zinforiano");
console.log("------aqui termina-------");
console.log(laConcesionaria);*/

/*
console.log(laConcesionaria.obtenerVentas());
console.log(buscarVenta);
console.log(laConcesionaria);
*/

/*
//vendedores
console.log(buscarVendedor);
console.log("------aqui termina-------");
console.log(vendedores);
console.log("------aqui termina-------");
console.log(laConcesionaria);
console.log("------aqui termina-------");
*/

/*
//autos
console.log("------aqui termina-------");
console.log(autosDisponibles);
console.log("------aqui termina-------");
console.log(buscarAuto);
console.log("------aqui termina-------");
console.log(clientes);
console.log("------aqui termina-------");
console.log(buscarCliente);*/
/*
//vendedores
console.log("------aqui termina-------");
console.log(vendedores);
console.log("------aqui termina-------");
console.log(buscarVendedor);
console.log("------aqui termina------");
console.log("------aqui termina------");
*/
