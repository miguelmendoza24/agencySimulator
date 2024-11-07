import rl from "./rl-interface.mjs";
import Concesionaria from "./agenciaAutomotriz.mjs";

const laConcesionaria = new Concesionaria("Los evomind");


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
    } else {
      console.log("Opción no válida, intenta de nuevo.");
      menuPrincipal();
    }
  });
}

function menuAuto() {
  console.log("Seleccione una opcion:");
  console.log("1 - Crear auto");
  console.log("2 - Ver autos disponibles");
  console.log("3 - Actualizar auto");
  console.log("4 - Eliminar autos");
  console.log("0 - Volver al menu principal");

  rl.question("opcion: ", (input) => {
    const opcion = parseInt(input);

    if (opcion === 1) {
      crearAuto();
    } else if (opcion === 2) {
      verAutos();
    } else if (opcion === 3) {
      actualizarAutos();
    } else if (opcion === 4) {
      eliminarAuto();
    } else if (opcion === 0) {
      menuPrincipal();
    } else {
      console.log("Opción no válida, intenta de nuevo.");
      menuVenta();
    }
  });
}

function crearAuto() {
  rl.question("Marca del auto: ", (marca) => {
    rl.question("Modelo del auto: ", (modelo) => {
      rl.question("Año del auto: ", (año) => {
        rl.question("Precio del auto: ", (precio) => {
          const auto = {
            marca,
            modelo,
            año: parseInt(año),
            precio: parseInt(precio),
          };
          laConcesionaria.crearAuto(auto);
          console.log("Auto creado:", auto);
          menuAuto();
        });
      });
    });
  });
}
 
function verAutos(){
  const autosDisponibles = laConcesionaria.obtenerAutos()
  console.log("Autos disponibles: ", autosDisponibles)
  mostrarAuto()
}

function buscarAuto() {
  
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