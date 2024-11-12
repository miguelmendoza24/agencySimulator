import rl from "./rl-interface.mjs";
import laConcesionaria from "./concesionaria-instancia.mjs";
import { volverAlMenuPrincipal } from "./navegacion.mjs";

export default function menuAuto() {
  console.log("Seleccione una opcion:");
  console.log("1 - Crear auto");
  console.log("2 - Ver autos disponibles");
  console.log("3 - Ver auto disponible");
  console.log("4 - Actualizar auto");
  console.log("5 - Eliminar autos");
  console.log("0 - Volver al menu principal");

  rl.question("opcion: ", (input) => {
    const opcion = parseInt(input);

    if (opcion === 1) {
      crearAuto();
    } else if (opcion === 2) {
      verAutos();
    } else if (opcion === 3) {
      buscarAuto();
    } else if (opcion === 4) {
      actualizarAuto();
    } else if (opcion === 5) {
      eliminarAuto();
    } else if (opcion === 0) {
      volverAlMenuPrincipal();
    } else {
      console.log("Opción no válida, intenta de nuevo.");
      menuAuto();
    }
  });
}

export function crearAuto() {
  rl.question("Marca del auto: ", (marca) => {
    rl.question("Modelo del auto: ", (modelo) => {
      rl.question("Año del auto: ", (año) => {
        rl.question("Precio del auto: ", (precio) => {

          const añoParsed = parseInt(año)
          const precioParsed = parseInt(precio);

          if (!marca || !modelo) {
            console.log("La marca y el modelo no pueden estar vacios.");
            return crearAuto()
          } else if(isNaN(añoParsed) || añoParsed < 1900 || añoParsed > new Date().getFullYear()) {
            console.log("Año invalido. Deve estar entre 1900 y el año actual");
            return crearAuto()
          }else if (isNaN(precioParsed) || precioParsed <= 0) {
            console.log("Precio invalido. Deve ser numero positivo");
            return crearAuto()
          }
          const auto = {
            marca,
            modelo,
            año: añoParsed,
            precio: precioParsed,
          };
          laConcesionaria.crearAuto(auto);
          console.log("Auto creado:", auto);
          menuAuto();
        });
      });
    });
  });
}

export function verAutos() {
  const autosDisponibles = laConcesionaria.obtenerAutos();
  if (autosDisponibles.length === 0) {
    console.log("No hay autos disponibles en este momento.");
  } else {
    console.log("Autos disponibles:");
    autosDisponibles.forEach((auto, index) => {
      console.log(`${index + 1}.marca: ${auto.marca}, Modelo: ${auto.modelo}, Año: ${auto.año}, precio:$${auto.precio}`);
    })
  }
  menuAuto();
}

export function buscarAuto() {
  rl.question(
    "Ingresa la propiedad por la que deseas buscar (ej. modelo, marca, año, precio): ",
    (propiedad) => {
      rl.question(`Ingresa el valor de la ${propiedad}: `, (valor) => {
        if (!["marca","modelo","año","precio"].includes(propiedad)) {
          console.log("Propiedad no valida. las opciones son: marca, modelo,año, precio");
          return buscarAuto()
        }
        const autoEncontrado = laConcesionaria.buscarAuto(propiedad, valor);
        if (autoEncontrado) {
          console.log("Auto encontrado:", autoEncontrado);
        } else {
          console.log("No se encontraron autos con esa propiedad y valor.");
        }
        menuAuto();
      });
    }
  );
}

export function actualizarAuto() {
  rl.question(
    "Ingresa la propiedad del auto que deseas actualizar (ej. modelo, marca, año, precio): ",
    (propiedad) => {
      rl.question(
        `Ingresa el valor actual de la propiedad ${propiedad}: `,
        (valor) => {
          const auto = laConcesionaria.buscarAuto(propiedad, valor);

          if (auto) {
            console.log("Auto encontrado:", auto);
            rl.question(
              "Ingresa el nuevo valor para esa propiedad: ",
              (nuevoValor) => {
                if (propiedad === "año" && (isNaN(nuevoValor) || nuevoValor < 1900 || nuevoValor > new Date().getFullYear())) {
                  console.log("Año invalido. Deve estar entre 1900 y el año actual.");
                  return actualizarAuto()
                }else if (propiedad === "precio" && (isNaN(nuevoValor) || nuevoValor <= 0)) {
                  console.log("Precio invalido. Deve ser un numero positivo");
                  return actualizarAuto();
                }
                const nuevosDatos = {
                  [propiedad]: propiedad === "año" || propiedad === "preecio" ? parseInt(nuevoValor) : nuevoValor
                };
                
                laConcesionaria.actualizarAuto(propiedad, valor, nuevosDatos);
                console.log("Auto actualizado:", nuevosDatos);
                menuAuto()
              }
            );
          } else {
            console.log("No se encontró un auto con esa propiedad y valor.");
            menuAuto();
          }
        });
    });
}

export function eliminarAuto() {
  rl.question(
    "Ingresa la propiedad del auto que deseas eliminar (ej. modelo, marca, año, precio): ",
    (propiedad) => {
      if (!["marca", "modelo", "año", "precio"].includes(propiedad)) {
        console.log("Propiedad no valida. Las opciones son: marca, modelo, año, precio");
        return eliminarAuto()
      }
      rl.question(
        `Ingresa el valor de la propiedad ${propiedad}: `,
        (valor) => {
          const auto = laConcesionaria.buscarAuto(propiedad, valor);
          if (!auto) {
            console.log("No se encontró un auto con esa propiedad y valor.");
            return eliminarAuto()
          }
          console.log("Auto encontrado:", auto);
          rl.question("¿Estas seguro de que deseas eliminar este auto (s/n):", (confirmacion) => {
            if (confirmacion.toLowerCase() === "s") {
              laConcesionaria.eliminarAuto(propiedad, valor);
              console.log("Auto eliminado");
            }
            menuAuto();
          })
        }
      );
    }
  );
}
