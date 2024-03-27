export const productos = [
  {
    id: 1,
    nombre: "Remera",
    precio: 4000,
    categoria: "Remeras",
    descripcion: "Remeras y camisas",
    image:
      "https://acdn.mitiendanube.com/stores/001/333/138/products/rem-rojo1-3c3a10a972a3f9e21e16957472045682-240-0.png",
  },
  {
    id: 2,
    nombre: "Pantalón",
    precio: 5000,
    categoria: "Pantalones",
    descripcion: "Jeans & Joggins",
    image:
      "https://static.cimalp.fr/22788-large_default/pantalon-de-montana-stretch-3d-flex-refuerzos.jpg",
  },
  {
    id: 3,
    nombre: "Campera",
    precio: 6000,
    categoria: "Camperas",
    descripcion: "Camperas de invierno",
    image: "https://pampero.com.ar/wp-content/uploads/2022/03/113109001-1.jpg",
  },
  {
    id: 4,
    nombre: "Zapatilla",
    precio: 5500,
    categoria: "Zapatillas",
    descripcion: "Calzado",
    image:
      "https://ortoleku.com/wp-content/uploads/zapatillas-deportivas-hombre-anchas-stability-fly-1.webp",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    const productosFiltrados = productos.filter(
      (el) => el.categoria === category
    );
    setTimeout(() => {
      resolve(productosFiltrados);
    }, 2000);
  });
};
