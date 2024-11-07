import rl from "./rl-interface.mjs";
import menuAuto from "./operacionesAuto.mjs";
import menuCliente from "./operacionesCliente.mjs";


function menuPrincipal() {
  console.log("Menu principal");
  console.log("1 - Autos");
  console.log("2 - Clientes");
  console.log("3 - Vendedores");
  console.log("4 - Ventas");
  console.log("5 - devoluciones");
  console.log("6 - administrador");
  console.log("0 - Salir");

  rl.question("Opción: ", (input) => {
    const opcion = parseInt(input);

    if (opcion === 1) {
      menuAuto();
    } else if (opcion === 2) {
      menuCliente();
    } else if (opcion === 3) {
      menuVendedores();
    } else if (opcion === 4) {
      menuVenta();
    } else if (opcion === 5) {
      menuDevoluciones();
    } else if (opcion === 6) {
      menuAdministradores();
    } else if (opcion === 0) {
       console.log("Saliendo...");
       rl.close();
    } else {
      console.log("Opción no válida, intenta de nuevo.");
      menuPrincipal();
    }
  });
}
menuPrincipal();








/*
funtion () {
  rl.question("nombre del cliente: ", (nombre) => {
    rl.question("Edad del cliente: ", (edad) => {
      laConcesionaria.agregarCliente({ nombre, edad });
      console.log("cliente agregado:", { nombre, edad });
      mostrarMenu();
    });
  });
}*/

/*
  () {
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
}*/