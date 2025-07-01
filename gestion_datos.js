// Obtenemos la referencia al elemento <pre> donde se mostrará la salida en la página
const output = document.getElementById("output");

/* 
  Paso 1: Crear un objeto llamado "productos" que almacena 3 productos.
  Cada producto contiene: id (identificador único), nombre y precio (valor numérico).
*/
const productos = {
  prod1: { id: 1, nombre: "Laptop", precio: 1200 },
  prod2: { id: 2, nombre: "Smartphone", precio: 800 },
  prod3: { id: 3, nombre: "Audifonos", precio: 150 }
};

/*
  Paso 2: Convertir los productos en una estructura Set para evitar duplicados.
  Para eso, primero pasamos los valores del objeto a un array.
*/
const productosArray = [productos.prod1, productos.prod2, productos.prod3];

// Creamos un Set usando el array. El Set automáticamente eliminará productos duplicados.
const productosSet = new Set(productosArray);

/*
  Crear un Map para almacenar información adicional.
  En este caso, se usa la categoría del producto como clave y su nombre como valor.
*/
const productosMap = new Map();
productosMap.set("Electrónica", "Laptop");
productosMap.set("Móviles", "Smartphone");
productosMap.set("Accesorios", "Audifonos");

// Paso 3: Recorrer las estructuras de datos y construir la salida

// Variable que acumula el texto que se mostrará en la consola de la página
let salida = "Lista completa de productos (desde el objeto):\n";

// Recorremos el objeto productos usando for...in para listar propiedades y sus valores
for (let clave in productos) {
  let p = productos[clave];
  salida += `ID: ${p.id}, Nombre: ${p.nombre}, Precio: $${p.precio}\n`;
}

// Recorremos el Set con for...of para mostrar productos únicos
salida += "\nProductos únicos (desde el Set):\n";
for (let producto of productosSet) {
  salida += `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}\n`;
}

// Recorremos el Map usando forEach para mostrar categoría y nombre de cada producto
salida += "\nCategorías y productos (desde el Map):\n";
productosMap.forEach((nombre, categoria) => {
  salida += `Categoría: ${categoria} → Producto: ${nombre}\n`;
});

/*
  Función para validar que un producto tenga datos correctos:
  - id debe ser un número
  - nombre debe ser una cadena
  - precio debe ser un número
*/
function validarProducto(p) {
  return (
    typeof p.id === "number" &&
    typeof p.nombre === "string" &&
    typeof p.precio === "number"
  );
}

// Validamos cada producto y agregamos el resultado a la salida
salida += "\nValidación de productos:\n";
productosArray.forEach(p => {
  if (validarProducto(p)) {
    salida += `${p.nombre} es un producto válido.\n`;
  } else {
    salida += `${p.nombre} tiene datos inválidos.\n`;
  }
});

// Mostramos todo el contenido en la página
output.textContent = salida;
