const fetch = require('node-fetch');
const api = 'https://jsonplaceholder.typicode.com/posts';

//Función para mostrar datos.

async function datosAPI() {

    try {
        const respuesta = await fetch(api);
        const datos = await respuesta.json();
        const elements = datos.slice(0, 3);
        console.log(elements);
    } catch (error) {
        console.log("Error encontrado:" + error);
    }
}

datosAPI();