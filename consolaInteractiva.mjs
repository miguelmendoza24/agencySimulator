import readline from "readline";
import Concesionaria from "./agenciaAutomotriz.mjs";


const rl = readline.createInterface(process.stdin, process.stdout);
const laConcesionaria = new Concesionaria("Los evomind");

function mostrarMenu() {
  console.log("Seleccione una opcion:");
  console.log("1 - Crear auto");
  console.log("2 - Ver autos disponibles");
  console.log("3 - Agregar cliente");
  console.log("4 - Ver clientes registrados");
  console.log("0 - Salir");

  rl.question("opcion: ", (input) => {
    const opcion = parseInt(input);

    if (opcion === 1) {
      rl.question("Marca del auto: ", (marca) => {
        rl.question("Modelo del auto: ", (modelo) => {
          rl.question("Año del auto: ", (año) => {
            rl.question("Precio del auto: ", (precio) => {
              const auto = {
                marca,
                modelo,
                año: parseInt(año),
                precio: parseInt(precio),
              };
              laConcesionaria.crearAuto(auto);
              console.log("Auto creado:", auto);
              mostrarMenu();
            });
          });
        });
      });
    } else if (opcion === 2) {
      const autosDisponibles = laConcesionaria.obtenerAutos();
      console.log("Autos disponibles: ", autosDisponibles);
      mostrarMenu();
    } else if (opcion === 3) {
      rl.question("nombre del cliente: ", (nombre) => {
        rl.question("Edad del cliente: ", (edad) => {
          laConcesionaria.agregarCliente({ nombre, edad });
          console.log("cliente agregado:", { nombre, edad });
          mostrarMenu();
        });
      });
    } else if (opcion === 4) {
      const clientes = laConcesionaria.obtenerClientes();
      console.log("clientes registrados:", clientes);
      mostrarMenu();
    } else if (opcion === 0) {
      console.log("saliendo...");
      rl.close();
    } else {
      console.log("Opcion no valida, intenta de nuevo");
      mostrarMenu();
    }
  });
}
mostrarMenu();
