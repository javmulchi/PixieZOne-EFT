import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CatalogManager from "./components/CatalogManager";
import ContactForm from "./components/ContactForm";
import catalogoFallback from "./data/catalogoFallback";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Carga dinámica del catálogo al montar la aplicación.
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${import.meta.env.BASE_URL}productos.json`);
        if (!response.ok) throw new Error("No fue posible cargar productos.json");

        const data = await response.json();
        setProducts(data);
      } catch (loadError) {
        console.error("Error al cargar el catálogo:", loadError);
        setProducts(catalogoFallback);
        setError("No se pudo cargar el JSON. Se utilizó el catálogo JavaScript de respaldo.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))].sort(),
    [products],
  );

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Todas" || product.category === selectedCategory;

      const matchesSearch =
        normalizedSearch === "" ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [products, search, selectedCategory]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const alreadyExists = currentCart.some((item) => item.id === product.id);
      return alreadyExists ? currentCart : [...currentCart, product];
    });
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((product) => product.id !== id));
  };

  const addProduct = (product) => {
    setProducts((currentProducts) => [...currentProducts, product]);
  };

  const removeProduct = (id) => {
    setProducts((currentProducts) => currentProducts.filter((product) => product.id !== id));
    setCart((currentCart) => currentCart.filter((product) => product.id !== id));
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <header id="inicio" className="hero text-white text-center">
        <div className="container hero-content">
          <div className="logo">◇ PIXIEZONE ◇</div>
          <div className="sublogo">✦ MUNDO GAMER ✦</div>
          <h1>Tienda de Videojuegos</h1>
          <p className="lead mb-0">
            Catálogo dinámico, filtrado por categoría y experiencia responsive.
          </p>
        </div>
      </header>

      <main>
        <section className="container section-space" aria-labelledby="filtros-title">
          <div className="panel-card">
            <div className="section-heading compact-heading">
              <span className="eyebrow">Explorar</span>
              <h2 id="filtros-title">Encuentra tu próximo juego</h2>
            </div>
            <div className="row g-3">
              <div className="col-12 col-md-8">
                <SearchBar search={search} onSearchChange={setSearch} />
              </div>
              <div className="col-12 col-md-4">
                <CategoryFilter
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="productos" className="container section-space" aria-labelledby="productos-title">
          <div className="section-heading text-center">
            <span className="eyebrow">Catálogo</span>
            <h2 id="productos-title">Productos disponibles</h2>
            <p>{filteredProducts.length} videojuego(s) visible(s).</p>
          </div>

          {loading && (
            <div className="text-center py-5" role="status">
              <div className="spinner-border text-primary" aria-hidden="true"></div>
              <p className="mt-3 mb-0">Cargando productos...</p>
            </div>
          )}

          {error && <div className="alert alert-warning">{error}</div>}

          {!loading && (
            <ProductList products={filteredProducts} onAddToCart={addToCart} cart={cart} />
          )}
        </section>

        <CatalogManager
          products={products}
          onAddProduct={addProduct}
          onRemoveProduct={removeProduct}
        />

        <Cart cart={cart} onRemove={removeFromCart} />
        <ContactForm />
      </main>

      <footer className="site-footer text-white text-center py-4">
        <div className="container">
          <p className="footer-brand mb-1">◇ PIXIEZONE ◇</p>
          <p className="mb-1">Proyecto Evaluación Final Transversal - Desarrollo Frontend I</p>
          <p className="mb-0">© 2026 PixieZone</p>
        </div>
      </footer>
    </>
  );
}

export default App;
