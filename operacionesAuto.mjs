import rl from "./rl-interface.mjs";
import laConcesionaria from "./concesionaria-instancia.mjs";
import { volverAlMenuPrincipal } from "./navegacion.mjs";

export default function menuAuto() {
  console.log("Seleccione una opcion:");
  console.log("1 - Crear auto");
  console.log("2 - Ver autos disponibles");
  console.log("3 - Ver auto disponible");
  console.log("4 - Actualizar auto");
  console.log("5 - Eliminar autos");
  console.log("0 - Volver al menu principal");

  rl.question("opcion: ", (input) => {
    const opcion = parseInt(input);

    if (opcion === 1) {
      crearAuto();
    } else if (opcion === 2) {
      verAutos();
    } else if (opcion === 3) {
      buscarAuto();
    } else if (opcion === 4) {
      actualizarAuto();
    } else if (opcion === 5) {
      eliminarAuto();
    } else if (opcion === 0) {
      volverAlMenuPrincipal();
    } else {
      console.log("Opción no válida, intenta de nuevo.");
      menuAuto();
    }
  });
}

export function crearAuto() {
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
          menuAuto();
        });
      });
    });
  });
}

export function verAutos() {
  const autosDisponibles = laConcesionaria.obtenerAutos();
  console.log("Autos disponibles: ", autosDisponibles);
  menuAuto();
}

export function buscarAuto() {
  rl.question(
    "Ingresa la propiedad por la que deseas buscar (ej. modelo, marca, año, precio): ",
    (propiedad) => {
      rl.question(
        `Ingresa el valor de la ${propiedad}: `,
        (valor) => {
          const autoEncontrado = laConcesionaria.buscarAuto(propiedad, valor);
          if (autoEncontrado) {
            console.log("Auto encontrado:");
            console.log(
              `${autoEncontrado.marca} ${autoEncontrado.modelo}, Año: ${autoEncontrado.año}, Precio: $${autoEncontrado.precio}`
            );
          } else {
            console.log("No se encontraron autos con esa propiedad y valor.");
          }
          menuAuto();
        }
      );
    }
  );
}


export function actualizarAuto() {
  rl.question(
    "Ingresa la propiedad del auto que deseas actualizar (ej. modelo, marca, año, precio): ",
    (propiedad) => {
      rl.question(
        `Ingresa el valor actual de la propiedad ${propiedad}: `,
        (valor) => {
          const auto = laConcesionaria.buscarAuto(propiedad, valor);

          if (auto) {
            console.log("Auto encontrado:", auto);
            rl.question(
              "Ingresa el nuevo valor para esa propiedad: ",
              (nuevoValor) => {
                const nuevosDatos = {
                  [propiedad]: nuevoValor
                };
                laConcesionaria.actualizarAuto(propiedad, valor, nuevosDatos);
                console.log("Auto actualizado:", nuevosDatos);
                menuAuto(); 
              }
            );
          } else {
            console.log("No se encontró un auto con esa propiedad y valor.");
            menuAuto();
          }
        }
      );
    }
  );
}

export function eliminarAuto() {
  rl.question(
    "Ingresa la propiedad del auto que deseas eliminar (ej. modelo, marca, año, precio): ",
    (propiedad) => {
      rl.question(
        `Ingresa el valor de la propiedad ${propiedad}: `,
        (valor) => {
          laConcesionaria.eliminarAuto(propiedad, valor);
          console.log("Auto eliminado");
          menuAuto();
        }
      );
    }
  );
}