import Concessionaria from './concessionaria';
import Auto from './auto';  

const laConcessionaria = new Concessionaria("Concesionaria");
const miAuto = new Auto("Toyota", "Cor", 2021, 200000);

laConcessionaria.agregarAuto(miAuto);
console.log(laConcessionaria.agregarAuto());
