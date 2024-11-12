import rl from "./rl-interface.mjs";
import menuAuto from "./operacionesAuto.mjs";
import menuCliente from "./operacionesCliente.mjs";
import menuVendedor from "./operacionesVendedor.mjs";
import menuVenta from "./operacionesVenta.mjs";
import menuDevolucion from "./operacionesDevolucion.mjs";
import menuAdministrador from "./operacionesAdministrador.mjs";

export default function menuPrincipal() {
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
      menuVendedor();
    } else if (opcion === 4) {
      menuVenta();
    } else if (opcion === 5) {
      menuDevolucion();
    } else if (opcion === 6) {
      menuAdministrador();
    } else if (opcion === 0) {
       console.log("Saliendo...");
       rl.close();
    } else {
      console.log("Opción no válida, intenta de nuevo.");
      menuPrincipal()
    }
  });
}