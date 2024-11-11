import rl from "./rl-interface.mjs";
import laConcesionaria from "./concesionaria-instancia.mjs";
import { volverAlMenuPrincipal } from "./navegacion.mjs";

export default function menuCliente() {
  console.log("Seleccione una opcion:");
  console.log("1 - Agregar cliente");
  console.log("2 - revisar clientes");
  console.log("3 - Ver cliente");
  console.log("4 - Actualizar cliente");
  console.log("5 - Eliminar cliente");
  console.log("0 - Volver al menu principal");

  rl.question("opcion: ", (input) => {
    const opcion = parseInt(input);

    if (opcion === 1) {
      agregarCliente();
    } else if (opcion === 2) {
      obtenerClientes();
    } else if (opcion === 3) {
      buscarCliente();
    } else if (opcion === 4) {
      actualizarCliente();
    } else if (opcion === 5) {
      eliminarCliente();
    } else if (opcion === 0) {
      volverAlMenuPrincipal();
    } else {
      console.log("Opción no válida, intenta de nuevo.");
      menuCliente();
    }
  });
}
export function agregarCliente() {
  rl.question("Nombre del cliente: ", (nombre) => {
    rl.question("edad: ", (edad) => {
      const cliente = {
        nombre,
        edad,
      };
      laConcesionaria.agregarCliente(cliente);
      console.log("Cliente agregado:", cliente);
      menuCliente();
    });
  });
}

export function obtenerClientes() {
  const clientesDisponibles = laConcesionaria.obtenerClientes();
  console.log("Autos disponibles: ", clientesDisponibles);
  menuCliente();
}

export function buscarCliente() {
  rl.question("Ingresa el nombre del cliente que desea buscar: ", (nombre) => {
    const cliente = laConcesionaria.buscarCliente("nombre", nombre);

    if (cliente) {
      console.log("Cliente encontrado:");
      console.log(
        `Nombre: ${cliente.nombre}`
      );
    } else {
      console.log("No se encontró un cliente con ese nombre.");
    }
    menuCliente();
  });
}

export function actualizarCliente() {
  rl.question(
    "Ingresa el nombre del cliente que desea actualizar: ",
    (nombre) => {
      rl.question("Nuevo nombre del cliente: ", (nuevoNombre) => {
        rl.question("Nueva edad del cliente: ", (nuevaEdad) => {
          const nuevosDatos = {
            nombre: nuevoNombre,
            edad: parseInt(nuevaEdad),
          };

          laConcesionaria.actualizarCliente("nombre", nombre, nuevosDatos);
          console.log(
            `Cliente actualizado: ${nuevoNombre}, Edad: ${nuevaEdad}`
          );
          menuCliente();
        });
      });
    }
  );
}

export function eliminarCliente() {
  rl.question(
    "Ingresa el nombre del cliente que deseas eliminar: ",
    (nombre) => {
      laConcesionaria.eliminarCliente("nombre", nombre);
      console.log(`El cliente ${nombre} ha sido eliminado.`);
      menuCliente();
    }
  );
}

