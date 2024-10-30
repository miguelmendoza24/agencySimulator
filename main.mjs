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
  marca: "toyota",
  modelo: "Rayo",
  año: 2025,
  precio: 32000,
});

laConcesionaria.actualizarAuto(0, {
  modelo: "Erizo Plus",
  año: 2025,
  precio: 31000,
});

const autosToyota = laConcesionaria.obtenerAutoPorMarca("toyota");
const autosDisponibles = laConcesionaria.obtenerAutos();
laConcesionaria.actualizarAutoPorModelo("Rayo", { precio: 19500 });
laConcesionaria.eliminarAutoPorIndice(1);

laConcesionaria.agregarCliente({ nombre: "arcinicuiteco", edad: 45 });
laConcesionaria.agregarCliente({ nombre: "zinforiano", edad: 51 });
laConcesionaria.agregarCliente({ nombre: "macumba", edad: 35 });

const clientes = laConcesionaria.obtenerClientes();
const clientesPorNombre = laConcesionaria.obtenerClientePorNombre("macumba");
laConcesionaria.actualizarCliente(0, { edad: 26 });
laConcesionaria.eliminarClientePorIndice(1);

laConcesionaria.agregarVendedor({ nombre: "serafin" });
laConcesionaria.agregarVendedor({ nombre: "chawi" });
laConcesionaria.agregarVendedor({ nombre: "maria" });

const vendedores = laConcesionaria.obtenerVendedores();
const vendedorPorNombre = laConcesionaria.obtenerVendedoresPorNombre("chawi")
laConcesionaria.actualizarVendedor(2,{nombre:"mario"})
laConcesionaria.eliminarVendedor(0)



console.log("------aqui termina-------");
console.log(vendedores);
console.log("------aqui termina-------");
console.log(vendedorPorNombre);
console.log("------aqui termina-------");
console.log(clientesPorNombre);
console.log("------aqui termina-------");
console.log(clientes);
console.log("------aqui termina-------");
console.log(autosToyota);
console.log("------aqui termina-------");
console.log(autosDisponibles);
console.log("------aqui termina------");
console.log(laConcesionaria);
console.log("------aqui termina------");

/*const nombreDePropiedad = "nose-estado";

const objeto = {
  edad: 20,
  "direccio-usuario": {},
  [nombreDePropiedad]:"lo que yo quiera"

}

console.log(objeto.edad);
console.log(objeto["direccio-usuario"]);
console.log(objeto[nombreDePropiedad]);
console.log(objeto);*/
