import Concessionaria from "./agenciaAutomotriz.mjs";
import Auto from "./auto.mjs";

const laConcessionaria = new Concessionaria("Concesionaria");
const miAuto = new Auto({ marca: "Toyota", modelo: "Cor", año: 2021, precio:200000});

laConcessionaria.crearAuto(miAuto);
console.log(laConcessionaria);
