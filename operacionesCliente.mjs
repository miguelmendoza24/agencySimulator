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
    if (!nombre.trim()) {
      console.log("error: El nombre del cliente no puede estar vacio. ");
      return agregarCliente()
    }
    rl.question("Edad: ", (edad) => {
      const edadNum = parseInt(edad)
      if (isNaN(edadNum) || edadNum <= 0) {
        console.log("Error: La edad debe ser un numero positivo");
        return agregarCliente()
      }

      const cliente = { nombre, edad };
      laConcesionaria.agregarCliente(cliente);
      console.log("Cliente agregado:", cliente);
      menuCliente();
    });
  });
}

export function obtenerClientes() {
  const clientesDisponibles = laConcesionaria.obtenerClientes();
  if (clientesDisponibles.length === 0) {
    console.log("No hay clientes disponibles.");
  } else {
    console.log("Autos disponibles:");
    clientesDisponibles.forEach((cliente, index) => {
      console.log(`${index + 1}. Nombre: ${cliente.nombre}, Edad: ${cliente.edad}`);
    })
  }
  menuCliente();
}

export function buscarCliente() {
  rl.question("Ingresa el nombre del cliente que desea buscar: ", (nombre) => {
    if (!nombre.trim()) {
      console.log("Error: El nombre del cliente no puede estar vacío.");
      return buscarCliente()
    }
    const cliente = laConcesionaria.buscarCliente("nombre", nombre);

    if (cliente) {
      console.log("Cliente encontrado: ", cliente);
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
      if (!nombre.trim()) {
        console.log("Error: El nombre del cliente no puede estar vacío.");
        return actualizarCliente()
      }
      const clienteExistente = laConcesionaria.buscarCliente("nombre", nombre);
      if (!clienteExistente) {
        console.log("No se encontró un cliente con ese nombre.");
        return menuCliente();
      }
      
      rl.question("Nuevo nombre del cliente: ", (nuevoNombre) => {
        if (!nuevoNombre.trim()) {
          console.log(
            "Error: El nuevo nombre del cliente no puede estar vacío."
          );
          return actualizarCliente();
        }
        rl.question("Nueva edad del cliente: ", (nuevaEdad) => {
          const nuevaEdadNum = parseInt(nuevaEdad, 10)
          if (isNaN(nuevaEdadNum) || nuevaEdadNum <= 0) {
            console.log("Error: La edad debe ser un número positivo.");
            return actualizarCliente();
          }
          const nuevosDatos = { nombre: nuevoNombre, edad: parseInt(nuevaEdad)
          };
          laConcesionaria.actualizarCliente("nombre", nombre, nuevosDatos);
          console.log(
            `Cliente actualizado: Nombre: ${nuevoNombre}, Edad: ${nuevaEdad}`
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
      if (!nombre.trim()) {
        console.log("Error: El nombre del cliente no puede estar vacio.");
        return eliminarCliente()
      }
      const clienteExistente = laConcesionaria.buscarCliente("nombre", nombre);
      if (!clienteExistente) {
        console.log("No se encontró un cliente con ese nombre.");
      } else {
        laConcesionaria.eliminarCliente("nombre", nombre);
        console.log(`El cliente ${nombre} ha sido eliminado.`);
      }
      menuCliente();
    }
  );
}

