function CartItem({ product, onRemove }) {
  return (
    <div className="cart-item">
      <div>
        <strong>{product.name}</strong>
        <p className="mb-1">Precio oferta: ${Number(product.offer).toLocaleString("es-CL")}</p>
        <small className="text-muted">Categoría: {product.category}</small>
      </div>

      <button
        type="button"
        className="btn btn-sm btn-outline-danger"
        onClick={() => onRemove(product.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default CartItem;
