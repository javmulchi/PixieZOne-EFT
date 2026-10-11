import { useState } from "react";

const initialForm = {
  name: "",
  category: "",
  price: "",
  offer: "",
  description: "",
  image: "img/juego1.jpg",
};

function CatalogManager({ products, onAddProduct, onRemoveProduct }) {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.category.trim() || !form.price || !form.description.trim()) {
      setMessage("Completa nombre, categoría, precio y descripción.");
      return;
    }

    const price = Number(form.price);
    const offer = form.offer ? Number(form.offer) : price;

    if (price <= 0 || offer <= 0) {
      setMessage("Los precios deben ser mayores que cero.");
      return;
    }

    onAddProduct({
      ...form,
      id: Date.now(),
      price,
      offer,
      image: form.image.trim() || "img/juego1.jpg",
    });

    setForm(initialForm);
    setMessage("Videojuego agregado correctamente al catálogo.");
  };

  return (
    <section id="gestion" className="container section-space">
      <div className="panel-card">
        <div className="section-heading">
          <span className="eyebrow">Administración</span>
          <h2>Gestión dinámica del catálogo</h2>
          <p>Esta sección demuestra el manejo de state y props para agregar y eliminar videojuegos.</p>
        </div>

        <form className="row g-3" onSubmit={handleSubmit} noValidate>
          <div className="col-12 col-md-6">
            <label className="form-label" htmlFor="nombreJuego">Nombre</label>
            <input
              id="nombreJuego"
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
              placeholder="Ej.: Hollow Knight"
            />
          </div>

          <div className="col-12 col-md-6">
            <label className="form-label" htmlFor="categoriaJuego">Categoría</label>
            <input
              id="categoriaJuego"
              name="category"
              className="form-control"
              value={form.category}
              onChange={handleChange}
              placeholder="Ej.: Acción"
            />
          </div>

          <div className="col-12 col-md-6">
            <label className="form-label" htmlFor="precioJuego">Precio normal</label>
            <input
              id="precioJuego"
              name="price"
              type="number"
              min="1"
              className="form-control"
              value={form.price}
              onChange={handleChange}
              placeholder="29990"
            />
          </div>

          <div className="col-12 col-md-6">
            <label className="form-label" htmlFor="ofertaJuego">Precio oferta</label>
            <input
              id="ofertaJuego"
              name="offer"
              type="number"
              min="1"
              className="form-control"
              value={form.offer}
              onChange={handleChange}
              placeholder="24990"
            />
          </div>

          <div className="col-12">
            <label className="form-label" htmlFor="descripcionJuego">Descripción</label>
            <textarea
              id="descripcionJuego"
              name="description"
              className="form-control"
              rows="3"
              value={form.description}
              onChange={handleChange}
              placeholder="Descripción breve del videojuego"
            ></textarea>
          </div>

          <div className="col-12">
            <label className="form-label" htmlFor="imagenJuego">Ruta de imagen</label>
            <input
              id="imagenJuego"
              name="image"
              className="form-control"
              value={form.image}
              onChange={handleChange}
              placeholder="img/juego1.jpg"
            />
            <div className="form-text">Puedes reutilizar img/juego1.jpg o img/juego2.jpg para la demostración.</div>
          </div>

          <div className="col-12 d-flex flex-column flex-sm-row align-items-sm-center gap-3">
            <button className="btn btn-primary" type="submit">Agregar videojuego</button>
            {message && <span className="small text-muted" aria-live="polite">{message}</span>}
          </div>
        </form>

        <hr className="my-4" />

        <h3 className="h5">Videojuegos actuales</h3>
        <div className="catalog-manager-list">
          {products.map((product) => (
            <div className="catalog-manager-item" key={product.id}>
              <div>
                <strong>{product.name}</strong>
                <div className="small text-muted">{product.category}</div>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-outline-danger"
                onClick={() => onRemoveProduct(product.id)}
              >
                Quitar del catálogo
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CatalogManager;
