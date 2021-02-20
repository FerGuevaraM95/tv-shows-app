# Tv shows App

Aplicación de React que hace uso de la API de [The Movie DB](https://themoviedb.api-docs.io/3/getting-started/introduction).

## Proceso de creación

1. Creación de estructura del proyecto.
2. Manejo de rutas con react-router-dom.
3. Se eligió styled-components para el manejo de estilos del proyecto.
    - Se crearon los estilos globales que aplicarán a toda la app.
4. Se maquetó la pantalla de inicio
    - Se utilizaron las propiedades de scroll snap de CSS para una experiencia que simula una app móvil al hacer scroll sobre nuestros shows
5. Se maquetó la pantalla de detalle
6. Se configuró Redux como manejador de estado global
7. Se utilizó redux-thunk para el manejo de redux de manera asíncrona.
8. Mapeo de la data obtenida con fetch a cada una de nuestras vistas, pintando así las listas de nuestros shows
9. Manejo de ruta por ID de show
10. Se pintó la data del show obtenido
    - Se crearon algunos métodos para el seteo del tiempo aproximado, listar los géneros, etc.
11. Se manejaron las páginas por medio de react lazy en apoyo con react suspense para un mejor performance y mejor UX
12. Se agregaron loaders de tipo 'esqueleto' a los componentes
13. Se agregó la funcionalidad de marcar como favorito el show en la pantalla de detalle (por medio de localstorage con un hook personalizado)
14. Se agregó la función de ordenar los resultados de las listas por mayor puntuación y 
alfabéticamente

### Diseño

Diseño tomado de [Figma Elements](https://figmaelements.com/movie-app/) creditos a su autor "simantOo".

### Librerías
* react 17.0.1
* react-dom 17.0.1
* react-content-loader 6.0.1
* react-redux 7.2.2
* react-router-dom 5.2.0
* redux 4.0.5
* redux-thunk
* styled-components


#### `npm start`

Ejecuta la aplicación en el modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para ver en tu navegador.
