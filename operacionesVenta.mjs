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
    if (!modelo) {
      console.log("El modelo no puede estar vacío.");
      return agregarVenta();
    }

    rl.question("Nombre del cliente: ", (nombreCliente) => {
      if (!nombreCliente) {
        console.log("El nombre del cliente no puede estar vacío.");
        return agregarVenta();
      }

      rl.question("Nombre del vendedor: ", (nombreVendedor) => {
        if (!nombreVendedor) {
          console.log("El nombre del vendedor no puede estar vacío.");
          return agregarVenta();
        }
        rl.question("Precio del auto: ", (precio) => {
          const precioNum = parseInt(precio)
          if (isNaN(precioNum) || precioNum <= 0) {
            console.log("El precio debe ser un número positivo.");
            return agregarVenta();
          }
          const venta = {
            modelo,
            nombreCliente,
            nombreVendedor,
            precio: precioNum,
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
  if (ventas.length === 0) {
     console.log("No hay ventas registradas.");
  } else {
    console.log("Ventas registradas:");
    ventas.forEach((venta, index) => {
      console.log(
        `${index + 1}. Auto: ${venta.modelo}, Cliente: ${
          venta.nombreCliente
        }, Vendedor: ${venta.nombreVendedor}, Precio: ${venta.precio}`
      );
    });
  }
  menuVenta();
}

export function buscarVenta() {
  rl.question(
    "Ingresa la propiedad por la que desea buscar (ej. auto, cliente, vendedor, precio)",
    (propiedad) => {
      const validarPropiedad = [
        "modelo",
        "nombreCliente",
        "nombreVendedor",
        "precio",
      ];
      if (!validarPropiedad.includes(propiedad)) {
         console.log("Propiedad no válida. Intenta de nuevo.");
         return buscarVenta();
      }
      rl.question(
        `Ingresa el valor de la propiedad   ${propiedad}:`,
        (valor) => {
          if (!valor) {
            console.log("El valor no puede estar vacío.");
            return buscarVenta();
          }
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
      const validarPropiedad = [
        "modelo",
        "nombreCliente",
        "nombreVendedor",
        "precio",
      ];
      if (!validarPropiedad.includes(propiedad)) {
        console.log("Propiedad no válida. Intenta de nuevo.");
        return actualizarVenta();
      }
      rl.question(
        `Ingresa el valor actual de la propiedad ${propiedad}`,
        (valor) => {
          if (!valor) {
             console.log("El valor no puede estar vacío.");
             return actualizarVenta();
          }
          const venta = laConcesionaria.buscarVenta(propiedad, valor);

          if (venta) {
            console.log("venta encontrada:", venta);
            rl.question(
              "Ingresa el nuevor para esa propiedad: ",
              (nuevoValor) => {
                if (!nuevoValor) {
                   console.log("El nuevo valor no puede estar vacío.");
                   return actualizarVenta();
                }
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
    "Ingresa la propiedad de la venta que deseas eliminar (ej. modelo, nombreCliente, nombreVendedor, precio): ",
    (propiedad) => {
      const validProps = [
        "modelo",
        "nombreCliente",
        "nombreVendedor",
        "precio",
      ];
      if (!validProps.includes(propiedad)) {
        console.log("Propiedad no válida. Intenta de nuevo.");
        return eliminarVenta();
      }

      rl.question(
        `Ingresa el valor de la propiedad ${propiedad}: `,
        (valor) => {
          if (!valor) {
            console.log("El valor no puede estar vacío.");
            return eliminarVenta();
          }

          const venta = laConcesionaria.buscarVenta(propiedad, valor);
          if (venta) {
            laConcesionaria.eliminarVenta(propiedad, valor);
            console.log("Venta eliminada.");
          } else {
            console.log("No se encontró ninguna venta con estos datos.");
          }
          menuVenta();
        }
      );
    }
  );
}
