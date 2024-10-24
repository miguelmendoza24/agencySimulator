import Concesionaria from "./agenciaAutomotriz.mjs";

const laConcesionaria = new Concesionaria("Los evomind");

laConcesionaria.crearAuto({ marca: "toyota", modelo: "erizo", año: 2024, precio: 30300 });

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

laConcesionaria.agregarCliente({ nombre: "arcinicuiteco", edad: 25});

laConcesionaria.agregarVendedor({ nombre: "serafin" })
const autosDisponibles = laConcesionaria.obtenerAutos();

const autosToyota = laConcesionaria.obtenerAutoPorMarca("toyota");

console.log(autosToyota);
console.log("----aqui ternina-----");
console.log(autosDisponibles);
console.log("----aqui ternina----");
console.log(laConcesionaria);
console.log("----aqui ternina------");










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
