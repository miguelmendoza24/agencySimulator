import rl from "./rl-interface.mjs";
import laConcesionaria from "./concesionaria-instancia.mjs";
import { volverAlMenuPrincipal } from "./navegacion.mjs";

export default function menuDevolucion() {
  console.log("Seleccione una opcion:");
  console.log("1 - Crear devolucion");
  console.log("2 - Ver devoluciones");
  console.log("3 - Ver devolucion");
  console.log("4 - Actualizar devolucion");
  console.log("5 - Eliminar devolucion");
  console.log("0 - Volver al menu principal");

  rl.question("opcion: ", (input) => {
    const opcion = parseInt(input);

    if (opcion === 1) {
      registrarDevolucion();
    } else if (opcion === 2) {
      obtenerDevoluciones();
    } else if (opcion === 3) {
      buscarDevolucion();
    } else if (opcion === 4) {
      actualizarDevolucion();
    } else if (opcion === 5) {
      eliminarDevolucion();
    } else if (opcion === 0) {
      volverAlMenuPrincipal();
    } else {
      console.log("Opción no válida, intenta de nuevo.");
      menuDevolucion();
    }
  });
}

export function registrarDevolucion() {
  rl.question("Nombre del cliente: ", (cliente) => {
    rl.question("Auto: ", (auto) => {
      rl.question("Fecha: ", (fecha) => {
        rl.question("Motivo de la devolucion: ", (motivo) => {
          const devolucion = {
            cliente,
            auto,
            fecha,
            motivo,
          };
          laConcesionaria.registrarDevolucion(devolucion);
          console.log("devolucion registrada:", devolucion);
          menuDevolucion();
        });
      });
    });
  });
}

export function obtenerDevoluciones() {
  const devoluciones = laConcesionaria.obtenerDevoluciones();
  console.log("devoluciones: ", devoluciones);
  menuDevolucion();
}

export function buscarDevolucion() {
  rl.question(
    "Ingresa la propiedad por la que deseas buscar (ej. cliente, auto, fecha, motivo): ",
    (propiedad) => {
      rl.question(`Ingresa el valor de la ${propiedad}: `, (valor) => {
        const devolucionEncontrada = laConcesionaria.buscarDevolucion(propiedad, valor);
        if (devolucionEncontrada) {
          console.log("devolucion encontrada", devolucionEncontrada)
        } else {
          console.log("No se encontraron autos con esa propiedad y valor.");
        }
        menuDevolucion();
      });
    }
  );
}

export function actualizarDevolucion() {
  rl.question(
    "Ingresa la propiedad de la devolucion que deseas actualizar (ej. cliente, auto, fecha, motivo): ",
    (propiedad) => {
      rl.question(
        `Ingresa el valor actual de la propiedad ${propiedad}: `,
        (valor) => {
          const devolucion = laConcesionaria.buscarDevolucion(propiedad, valor);

          if (devolucion) {
            console.log("Devolucion encontrada:", devolucion);
            rl.question(
              "Ingresa el nuevo valor para esa propiedad: ",
              (nuevoValor) => {
                const nuevosDatos = {
                  [propiedad]: nuevoValor,
                };
                laConcesionaria.actualizarDevolucion(propiedad, valor, nuevosDatos);
                console.log("Devolucion actualizada:", nuevosDatos);
              }
            );
          } else {
            console.log("No se encontró un auto con esa propiedad y valor.");
            menuDevolucion();
          }
        }
      );
    }
  );
}

export function eliminarDevolucion() {
  rl.question(
    "Ingresa la propiedad de la devolucion que deseas eliminar (ej. cliente, auto, fecha, motivo): ",
    (propiedad) => {
      rl.question(
        `Ingresa el valor de la propiedad ${propiedad}: `,
        (valor) => {
          laConcesionaria.eliminarDevolucion(propiedad, valor);
          console.log("Devolucion eliminada");
          menuDevolucion();
        }
      );
    }
  );
}
