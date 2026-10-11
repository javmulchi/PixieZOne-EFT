// Objeto JavaScript de respaldo del catálogo.
// Se utiliza si el archivo JSON no puede cargarse.
const catalogoFallback = [
  {
    id: 1,
    name: "One Piece World Seeker PS4",
    price: 29990,
    offer: 24990,
    image: "img/juego1.jpg",
    category: "Aventura",
    description:
      "¡Ven a bordo y deja tu brújula atrás! Zarpa en una aventura completamente nueva de ONE PIECE World Seeker.",
  },
  {
    id: 2,
    name: "Dragon Quest XI: Echoes of an Elusive Age PS4",
    price: 29990,
    offer: 24990,
    image: "img/juego2.jpg",
    category: "RPG",
    description:
      "Un joven aventurero descubre que es la reencarnación de un héroe legendario de una era olvidada.",
  },
];

export default catalogoFallback;
