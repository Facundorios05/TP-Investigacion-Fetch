//Obetener botones del html.

const boton1 = document.querySelector('#bt1');
const boton2 = document.querySelector('#bt2');
const boton3 = document.querySelector('#bt3');

const imgCont = document.querySelector('#image');

//Obtener datos de una API

const URL_API_JSON_PLACEHOLDER = 'https://jsonplaceholder.typicode.com/posts';
const URL_API_VIA_PLACEHOLDER = 'https://via.placeholder.com/150';
const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/';

const DatosAPi = () => {
    fetch(URL_API_JSON_PLACEHOLDER,
        {
            method: 'GET'
        })
        .then((Response) => Response.json)
        .then((post) => console.log(post.slice(0,3)))
        .catch((error) => console.log("Ha ocurrido el siguiente error:" + error))
}

boton1.addEventListener('click', () => {
    DatosAPi();
})

