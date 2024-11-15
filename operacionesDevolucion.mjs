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
    if (!cliente.trim()) {
      console.log("Error: El nombre no puede estar vacio.");
      return registrarDevolucion();
    }

    rl.question("Auto: ", (auto) => {
      if (!auto.trim()) {
        console.log("Error: El nombre del auto no puede estar vacio.");
        return registrarDevolucion();
      }

      rl.question("Fecha: ", (fecha) => {
        const fechaRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!fechaRegex.test(fecha)) {
          console.log("Error: La fecha debe tener el formato DD/MM/AAAA.");
          return registrarDevolucion();
        }
        rl.question("Motivo de la devolucion: ", (motivo) => {
          if (!motivo.trim()) {
            console.log(
              "Error: El motivo de la devolución no puede estar vacío."
            );
            return registrarDevolucion();
          }
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
  if (devoluciones.length === 0) {
    console.log("No hay devoluciones registradas.");
  } else {
    console.log("Devoluciones registradas:");
    devoluciones.forEach((devolucion, index) => {
      console.log(
        `${index + 1}. Cliente: ${devolucion.cliente}, Auto: ${
          devolucion.auto
        }, Fecha: ${devolucion.fecha}, Motivo: ${devolucion.motivo}`
      );
    });
  }
  menuDevolucion();
}

export function buscarDevolucion() {
  rl.question(
    "Ingresa el nombre del cliente para buscar la devolución: ",
    (cliente) => {
      if (!cliente.trim()) {
        console.log("Error: El nombre del cliente no puede estar vacío.");
        return buscarDevolucion();
      }

      const devolucion = laConcesionaria.buscarDevolucion("cliente", cliente);
      if (devolucion) {
        console.log("Devolución encontrada:", devolucion);
      } else {
        console.log("No se encontró una devolución para ese cliente.");
      }
      menuDevolucion();
    }
  );
}

export function actualizarDevolucion() {
  rl.question(
    "Ingresa el nombre del cliente cuya devolución deseas actualizar: ",
    (cliente) => {
      if (!cliente.trim()) {
        console.log("Error: El nombre del cliente no puede estar vacío.");
        return actualizarDevolucion();
      }

      const devolucion = laConcesionaria.buscarDevolucion("cliente", cliente);
      if (!devolucion) {
        console.log("No se encontró una devolución para ese cliente.");
        return menuDevolucion();
      }

      rl.question(
        "Ingresa la propiedad que deseas actualizar(ej, cliente, auto, fecha, motivo): ",
        (propiedad) => {
          const propiedadesValidas = ["cliente", "auto", "fecha", "motivo"];
          if (!propiedadesValidas.includes(propiedad)) {
            console.log("propiedad no valida. Intenta de nuevo.");
            return actualizarDevolucion();
          }
          rl.question(
            `Nuevo valor para la propiedad ${propiedad}: `,
            (nuevoValor) => {
              if (!nuevoValor.trim()) {
                console.log(
                  `Error: El valor de ${propiedad} no puede estar vacío.`
                );
                return actualizarDevolucion();
              }
              const nuevosDatos = {
                [propiedad]: nuevoValor,
              };

              laConcesionaria.actualizarDevolucion(
                "cliente",
                cliente,
                nuevosDatos
              );
              console.log(`Drvolucion de ${cliente} actualizada`);
              menuDevolucion();
            }
          );
        }
      );
    }
  );
}

export function eliminarDevolucion() {
  rl.question(
    "Ingresa el nombre del cliente cuya devolución deseas eliminar: ",
    (cliente) => {
      if (!cliente.trim()) {
        console.log("Error: El nombre del cliente no puede estar vacío.");
        return eliminarDevolucion();
      }
      const devolucion = laConcesionaria.buscarDevolucion("cliente", cliente);
      if (!devolucion) {
        console.log("No se encontró una devolución para ese cliente.");
      } else {
        laConcesionaria.eliminarDevolucion("cliente", cliente);
        console.log(`Devolucion eliminada para el cliente ${cliente}.`);
      }
      menuDevolucion();
    }
  );
}
