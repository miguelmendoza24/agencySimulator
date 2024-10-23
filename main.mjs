import Concesionaria from "./agenciaAutomotriz.mjs";
import Auto from "./auto.mjs";
import Cliente from "./cliente.mjs";
import Vendedor from "./Vendedor.mjs";





const laConcesionaria = new Concesionaria("Concesionaria");
const miAuto = new Auto({ marca: "Toyota", modelo: "Cor", año: 2021, precio: 200000 });

const nuevoCliente = new Cliente({ nombre: "sinforiano", edad: 35 });

const vendedor = new Vendedor({ nombre:"miguel"})

laConcesionaria.crearAuto(miAuto);
console.log(nuevoCliente);

laConcesionaria.agregarCliente(nuevoCliente)
laConcesionaria.agregarVendedor(vendedor)
console.log(laConcesionaria);










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
