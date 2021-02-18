# Tv shows App

Aplicacion de React que hace uso de la API de [The Movie DB](https://themoviedb.api-docs.io/3/getting-started/introduction).

## Proceso de creación

1. Se creo la estructura del proyecto.
2. Se creo el manejo de rutas con react-router-dom.
3. Se eligió styled-components para el manejo de estilos del proyecto.
    - Se crearón los estilos globales que aplicarán a toda la app.
4. Se maquetó la pantalla de inicio
    - Se utilizaron las propiedades de scroll snap de CSS para una experiencia que simula una app móvil all hacer scroll sobre nuestros shows
5. Se maquetó la pantalla de detalle
6. Se configuró Redux como manejador de estado global
7. Se utilizó redux-thunk para el manejo de redux de manera asíncrona.
8. Mapeo de la data obtenida con fetch a cada una de nuestras vistas, pintando asi las listas de nuestros shows

### `npm start`

Ejecuta la aplicación en el modo de desarrollo..\
Abre [http://localhost:3000](http://localhost:3000) para ver en tu navegador.
