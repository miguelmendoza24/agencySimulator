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
    const administardor = {
      nombre,
    };
    laConcesionaria.crearAdministrador(administardor);
    console.log("administrador registrado:", administardor);
    menuAdministrador();
  });
}

export function verAdministradores() {
  const administradoresDisponibles = laConcesionaria.obtenerAdministradores();
  console.log("Administradores disponibles: ", administradoresDisponibles);
  menuAdministrador();
}

export function buscarAdministradores() {
  rl.question(
    "Ingresa el nombre del administrador que deseas buscar: ",
    (nombre) => {
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
      rl.question("Nuevo nombre del administrdor: ", (nuevoNombre) => {
        const nuevosDatos = {
          nombre,
        };
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
      laConcesionaria.eliminarAdministrador("nombre", nombre);
      console.log(`El administardor ${nombre} ha sido eliminado.`);
      menuAdministrador();
    }
  );
}
