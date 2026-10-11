function SearchBar({ search, onSearchChange }) {
  return (
    <div>
      <label htmlFor="busqueda" className="form-label fw-semibold">
        Buscar videojuego
      </label>
      <input
        id="busqueda"
        type="search"
        className="form-control"
        placeholder="Busca por nombre o categoría..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
