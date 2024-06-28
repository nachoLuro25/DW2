let productos = [
    { nombre: "Camiseta", stock: 10 },
    { nombre: "Pantalones", stock: 15 },
    { nombre: "Zapatos", stock: 8 },
    { nombre: "Gorra", stock: 5 }
];

for (let i = 0; i < productos.length; i++) {
    console.log(`Producto: ${productos[i].nombre}, Stock: ${productos[i].stock}`);
}
