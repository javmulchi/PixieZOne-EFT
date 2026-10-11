function ProductCard({ product, onAddToCart, isInCart }) {
  const imageUrl = `${import.meta.env.BASE_URL}${product.image}`;

  return (
    <div className="col-12 col-md-6 col-xl-4">
      <article className="card product-card h-100 shadow-sm">
        <img
          src={imageUrl}
          className="card-img-top product-image"
          alt={`Portada de ${product.name}`}
        />

        <div className="card-body d-flex flex-column">
          <span className="badge product-category mb-2">{product.category}</span>
          <h3 className="card-title fs-5">{product.name}</h3>
          <p className="card-text">{product.description}</p>

          <div className="mt-auto">
            <p className="normal-price mb-1">
              Precio normal: ${Number(product.price).toLocaleString("es-CL")}
            </p>
            <p className="offer-price">
              Precio oferta: ${Number(product.offer).toLocaleString("es-CL")}
            </p>

            <button
              type="button"
              className={`btn w-100 ${isInCart ? "btn-secondary" : "btn-primary"}`}
              onClick={() => onAddToCart(product)}
              disabled={isInCart}
            >
              {isInCart ? "En el carrito" : "Agregar al carrito"}
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProductCard;
