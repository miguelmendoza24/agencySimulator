import rl from "./rl-interface.mjs";
import laConcesionaria from "./concesionaria-instancia.mjs";
import { volverAlMenuPrincipal } from "./navegacion.mjs";

export default function menuVenta() {
  console.log("Seleccione una opcion:");
  console.log("1 - Agregar venta");
  console.log("2 - revisar ventas");
  console.log("3 - Ver venta");
  console.log("4 - Actualizar venta");
  console.log("5 - Eliminar venta");
  console.log("0 - Volver al menu principal");

  rl.question("opcion: ", (input) => {
    const opcion = parseInt(input);

    if (opcion === 1) {
      agregarVenta();
    } else if (opcion === 2) {
      obtenerVentas();
    } else if (opcion === 3) {
      buscarVenta();
    } else if (opcion === 4) {
      actualizarVenta();
    } else if (opcion === 5) {
      eliminarVenta();
    } else if (opcion === 0) {
      volverAlMenuPrincipal();
    } else {
      console.log("Opción no válida, intenta de nuevo.");
      menuVenta();
    }
  });
}

export function agregarVenta() {
  rl.question("Modelo del auto: ", (modelo) => {
    rl.question("Nombre del cliente: ", (nombreCliente) => {
      rl.question("Nombre del vendedor: ", (nombreVendedor) => {
        rl.question("Precio del auto: ", (precio) => {
          const venta = {
            modelo,
            nombreCliente,
            nombreVendedor,
            precio: parseInt(precio),
          };
          laConcesionaria.agregarVenta(venta);
          console.log("Venta registrada: ", venta);
          menuVenta();
        });
      });
    });
  });
}

export function obtenerVentas() {
  const ventas = laConcesionaria.obtenerVentas();
  console.log("ventas: ", ventas);
  menuVenta();
}

export function buscarVenta() {
  rl.question(
    "Ingresa la propiedad por la que desea buscar (ej. auto, cliente, vendedor, precio)",
    (propiedad) => {
      rl.question(
        `Ingresa el valor de la propiedad   ${propiedad}:`,
        (valor) => {
          const ventaEncontrada = laConcesionaria.buscarVenta(propiedad, valor);
          if (ventaEncontrada) {
            console.log(
              `Venta encontrada: Auto: ${ventaEncontrada.auto}, Cliente: ${ventaEncontrada.cliente}, Vendedor: ${ventaEncontrada.vendedor}, Precio: ${ventaEncontrada.precio}`
            );
          } else {
            console.log("No se encontró ninguna venta con estos datos.");
          }
          menuVenta();
        }
      );
    }
  );
}

export function actualizarVenta() {
  rl.question(
    "Ingresa la propiedad de la venta que deseas actualizar(ej. auto, cliente, vendedor, precio)",
    (propiedad) => {
      rl.question(
        `Ingresa el valor actual de la propiedad ${propiedad}`,
        (valor) => {
          const venta = laConcesionaria.buscarVenta(propiedad, valor);

          if (venta) {
            console.log("venta encontrada:", venta);
            rl.question(
              "Ingresa el nuevor para esa propiedad: ",
              (nuevoValor) => {
                const nuevosDatos = {
                  [propiedad]: nuevoValor,
                };
                laConcesionaria.actualizarVenta(propiedad, valor, nuevosDatos);
                console.log("venta actualizada".nuevosDatos);
                menuVenta();
              }
            );
          } else {
            console.log("No se encontro ninguna venta con esos datos");
            menuVenta();
          }
        }
      );
    }
  );
}

export function eliminarVenta() {
  rl.question(
    "Ingresa la propiedad de la venta que deseas eliminar (ej. auto, cliente, vendedor, precio): ",
    (propiedad) => {
      rl.question(`Ingresa el valor de la propiedad ${propiedad}`, (valor) => {
        laConcesionaria.eliminarVenta(propiedad, valor);
        console.log("Venta eliminada");
        menuVenta();
      });
    }
  );
}
