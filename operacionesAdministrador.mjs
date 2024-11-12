import rl from "./rl-interface.mjs";
import laConcesionaria from "./concesionaria-instancia.mjs";
import { volverAlMenuPrincipal } from "./navegacion.mjs";

export default function menuAdministrador() {
  console.log("Seleccione una opcion:");
  console.log("1 - Crear administrador");
  console.log("2 - Ver administradores");
  console.log("3 - Ver administrador");
  console.log("4 - Actualizar administrador");
  console.log("5 - Eliminar administardor");
  console.log("0 - Volver al menu principal");

  rl.question("opcion: ", (input) => {
    const opcion = parseInt(input);

    if (opcion === 1) {
      crearAdministrador();
    } else if (opcion === 2) {
      verAdministradores();
    } else if (opcion === 3) {
      buscarAdministradores();
    } else if (opcion === 4) {
      actualizarAdministrador();
    } else if (opcion === 5) {
      eliminarAdministrador();
    } else if (opcion === 0) {
      volverAlMenuPrincipal();
    } else {
      console.log("Opción no válida, intenta de nuevo.");
      menuAdministrador();
    }
  });
}

export function crearAdministrador() {
  rl.question("Nombre del administardor: ", (nombre) => {
    if (!nombre.trim()) {
      console.log("Error: El nombre del administrador no puede estar vacío.");
      return crearAdministrador()
    }
    const administardor = { nombre };
    laConcesionaria.crearAdministrador(administardor);
    console.log("administrador registrado:", administardor);
    menuAdministrador();
  });
}

export function verAdministradores() {
  const administradoresDisponibles = laConcesionaria.obtenerAdministradores();

  if (administradoresDisponibles.length === 0) {
    console.log("No hay administradores disponibles.");
  } else {
    console.log("Administradores disponibles:");
    administradoresDisponibles.forEach((administardor, index) => {
      console.log(`${index + 1}. Nombre: ${administardor.nombre}`);
    })
  }
  menuAdministrador();
}


export function buscarAdministradores() {
  rl.question(
    "Ingresa el nombre del administrador que deseas buscar: ",
    (nombre) => {
      if (!nombre.trim()) {
        console.log("Error: El nombre del administrador no puede estar vacio.");
        return buscarAdministradores()
      }
      const administrador = laConcesionaria.buscarAdministrador(
        "nombre",
        nombre
      );

      if (administrador) {
        console.log("Administrador encontrado: ", administrador);
      } else {
        console.log("No se encontró un administrador con ese nombre.");
      }
      menuAdministrador();
    }
  );
}

export function actualizarAdministrador() {
  rl.question(
    "Ingresa el nombre del administrador que desea actualizar: ",
    (nombre) => {
      if (!nombre.trim()) {
        console.log("Error: El nombre del administrador no puede estar vacio");
        return actualizarAdministrador();
      }
      const administardor = laConcesionaria.buscarAdministrador("nombre", nombre);
      if (!administardor) {
        console.log("No se encontro un administrador con ese nombre.");
        return menuAdministrador();
      }

      rl.question("Nuevo nombre del administrdor: ", (nuevoNombre) => {
        if (!nuevoNombre.trim()) {
          console.log("Error: El nuevo nombre del administrador no puede estar vacio");
          return actualizarAdministrador()
        }
        const nuevosDatos = { nombre: nuevoNombre };
        laConcesionaria.actualizarAdministrador("nombre", nombre, nuevosDatos);
        console.log(`Administrador actualizado: ${nuevoNombre}`);
        menuAdministrador();
      });
    }
  );
}

export function eliminarAdministrador() {
  rl.question(
    "Ingresa el nombre del administrador que deseas eliminar: ",
    (nombre) => {
      if (!nombre.trim()) {
        console.log("Error: El nombre del administrador no puede estar vacio.");
        return eliminarAdministrador();
      }
      const administrador = laConcesionaria.buscarAdministrador("nombre", nombre);
      if (!administrador) {
        console.log("No se encontro un administrador con ese nombre.");
      } else {
        laConcesionaria.eliminarAdministrador("nombre", nombre);
        console.log(`El administardor ${nombre} ha sido eliminado.`);
      }
      menuAdministrador();
    }
  );
}
