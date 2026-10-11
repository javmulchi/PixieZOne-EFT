import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart, cart }) {
  if (products.length === 0) {
    return (
      <div className="alert alert-warning text-center" role="status">
        No se encontraron videojuegos con los filtros seleccionados.
      </div>
    );
  }

  return (
    <div className="row g-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          isInCart={cart.some((item) => item.id === product.id)}
        />
      ))}
    </div>
  );
}

export default ProductList;
