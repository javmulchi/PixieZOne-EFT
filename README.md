# PixieZone - Evaluación Final Transversal

Proyecto final de **Desarrollo Frontend I**. PixieZone es una tienda ficticia de videojuegos desarrollada con HTML5, CSS3, JavaScript, Bootstrap 5 y React.

## Funcionalidades

- Página principal responsiva con navegación Bootstrap 5.
- Catálogo de videojuegos cargado dinámicamente desde `public/productos.json` mediante `fetch` y `useEffect`.
- Objeto JavaScript de respaldo en `src/data/catalogoFallback.js`.
- Tarjetas de producto generadas dinámicamente con React.
- Búsqueda por nombre o categoría.
- Filtro específico por categoría mediante selector.
- Carrito con agregar, eliminar, contador y total dinámico.
- Gestión del catálogo con `state` y `props` para agregar o quitar videojuegos.
- Formulario de contacto con validación de nombre, email y mensaje.
- Renderizado condicional para carga, errores, resultados vacíos, carrito y mensajes del formulario.
- Diseño responsive para computador, tablet y dispositivos móviles.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Bootstrap 5
- React
- Hooks: `useState`, `useEffect`, `useMemo`
- Vite
- Git / GitHub

## Estructura principal

```text
PixieZoneReact/
├── public/
│   ├── img/
│   │   ├── juego1.jpg
│   │   └── juego2.jpg
│   └── productos.json
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── CatalogManager.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   └── SearchBar.jsx
│   ├── data/
│   │   └── catalogoFallback.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Requisitos

- Node.js LTS
- npm
- Navegador moderno (Chrome, Edge o Firefox)

## Instalación

1. Clonar o descargar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir una terminal en la raíz del proyecto.
4. Instalar dependencias:

```bash
npm install
```

## Ejecución local

```bash
npm run dev
```

Vite mostrará una dirección local. Con la configuración actual, normalmente será:

```text
http://localhost:5173/PixieZoneReact/
```

## Crear versión de producción

```bash
npm run build
```

La aplicación compilada se generará en `dist/`.

## Publicar con GitHub Pages

El archivo `vite.config.js` está configurado para un repositorio llamado `PixieZoneReact`:

```js
base: "/PixieZoneReact/"
```

Si el repositorio tiene otro nombre, se debe cambiar ese valor.

Luego ejecutar:

```bash
npm run deploy
```

## Uso del sitio

1. Utiliza el buscador para filtrar por nombre o categoría.
2. Selecciona una categoría en el menú desplegable.
3. Agrega un videojuego al carrito y revisa el contador y el total.
4. Elimina productos del carrito para verificar la actualización dinámica.
5. En “Gestión” agrega un videojuego nuevo o elimina uno del catálogo.
6. En “Contacto” prueba primero campos incorrectos y luego datos válidos para comprobar las validaciones.

## Pruebas recomendadas

- Escritorio: 1366 × 768.
- Tablet: aproximadamente 768 px de ancho.
- Móvil: aproximadamente 375 px de ancho.
- Navegadores: Chrome, Edge y Firefox.
- Verificar menú responsive, imágenes, filtros, carrito y formulario.

## Control de versiones

Se recomienda que el historial de GitHub contenga commits descriptivos que reflejen el avance, por ejemplo:

```text
Implementa estructura React y Bootstrap de PixieZone
Agrega catálogo dinámico y filtro por categoría
Implementa carrito y gestión del catálogo con state
Agrega formulario de contacto y validaciones
Mejora diseño responsive y documentación EFT
```

## Autor

**Javiera Mülchi**  
Desarrollo Frontend I - 2026