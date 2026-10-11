import CartItem from "./CartItem";

function Cart({ cart, onRemove }) {
  const total = cart.reduce((sum, product) => sum + Number(product.offer), 0);

  return (
    <section id="carrito" className="container section-space">
      <div className="panel-card cart-panel">
        <h2>Carrito de compras</h2>
        <p>
          Productos seleccionados: <strong>{cart.length}</strong>
        </p>

        {cart.length === 0 ? (
          <div className="alert alert-light border" role="status">
            Tu carrito está vacío.
          </div>
        ) : (
          cart.map((product) => (
            <CartItem key={product.id} product={product} onRemove={onRemove} />
          ))
        )}

        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="h4 mb-0">Total:</h3>
          <strong className="cart-total">${total.toLocaleString("es-CL")}</strong>
        </div>
      </div>
    </section>
  );
}

export default Cart;
