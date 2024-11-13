import rl from "./rl-interface.mjs";
import laConcesionaria from "./concesionaria-instancia.mjs";
import { volverAlMenuPrincipal } from "./navegacion.mjs";

export default function menuVendedor() {
  console.log("Seleccione una opcion:");
  console.log("1 - Agregar vendor");
  console.log("2 - revisar vendedores");
  console.log("3 - Ver vendedor");
  console.log("4 - Actualizar vendedor");
  console.log("5 - Eliminar vendedor");
  console.log("0 - Volver al menu principal");

  rl.question("opcion: ", (input) => {
    const opcion = parseInt(input);

    if (opcion === 1) {
      agregarVendedor();
    } else if (opcion === 2) {
      obtenerVendedores();
    } else if (opcion === 3) {
      buscarVendedor();
    } else if (opcion === 4) {
      actualizarVendedor();
    } else if (opcion === 5) {
      eliminarVendedor();
    } else if (opcion === 0) {
      volverAlMenuPrincipal()
    } else {
      console.log("Opción no válida, intenta de nuevo.");
      menuVendedor();
    }
  });
}

export function agregarVendedor() {
  rl.question("Nombre del vendedor", (nombre) => {
    if (!nombre.trim()) {
      console.log("Error: El nombre del vendedor no puede estar vacío.");
      return agregarVendedor();
    }

    const vendedor = { nombre };
    laConcesionaria.agregarVendedor(vendedor);
    console.log("Vendedor agregado", vendedor);
    menuVendedor();
  });
}

export function obtenerVendedores() {
  const vendedoresDisponibles = laConcesionaria.obtenerVendedores();
  if (vendedoresDisponibles.length === 0) {
    console.log("No hay vendedores registrados.");
  }
  console.log("vendedores disponibles:");
  vendedoresDisponibles.forEach((vendedor, index) => {
    console.log(`${index + 1}. Nombre: ${vendedor.nombre}`);
  })
  menuVendedor();
}

export function buscarVendedor() {
  rl.question("Ingresa el nombre del vendedor que desea buscar", (nombre) => {
    if (!nombre.trim()) {
       console.log("Error: El nombre del vendedor no puede estar vacío.");
       return buscarVendedor();
    }
    const vendedor = laConcesionaria.buscarVendedor("nombre", nombre);
    if (vendedor) {
      console.log("Vendedor encontrado:");
      console.log(`Nombre: ${vendedor.nombre}`);
    } else {
      console.log("no se encontro un vendedor con ese nombre.");
    }
    menuVendedor();
  });
}


export function actualizarVendedor() {
  rl.question("Ingresa el nombre del vendedor que desa actualizar", (nombre) => {
    if (!nombre.trim()) {
      console.log("Error: El nombre del vendedor no puede estar vacío.");
      return actualizarVendedor();
    }
    rl.question("Nuevo nombre del vendedor", (nuevoNombre) => {
      if (!nuevoNombre.trim()) {
        console.log("Error: El nuevo nombre no puede estar vacío.");
        return actualizarVendedor();
      }

      const nuevosDatos = { nombre: nuevoNombre }
      laConcesionaria.actualizarVendedor("nombre", nombre, nuevosDatos);
      console.log(`Vendedor actualizado: ${nuevoNombre}`);
      menuVendedor()
    })
  })
}

export function eliminarVendedor() {
  rl.question("Ingresa el nombre del vendedor que desea eliminar: ", (nombre) => {
    if (!nombre.trim()) {
      console.log("Error: El nombre del vendedor no puede estar vacío.");
      return eliminarVendedor();
    }
    laConcesionaria.eliminarVendedor("nombre", nombre);
    console.log(`El vendedor ${nombre} ha sido eliminado`);
    menuVendedor()
  })
}