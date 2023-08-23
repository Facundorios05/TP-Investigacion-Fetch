//Obetener botones del html.

const boton1 = document.querySelector('#btn1');
const boton2 = document.querySelector('#btn2');
const boton3 = document.querySelector('#btn3');
const imgCont = document.querySelector('#image');

//Obtener datos de una API

const URL_API_JSON_PLACEHOLDER = 'https://jsonplaceholder.typicode.com/posts';
const URL_API_VIA_PLACEHOLDER = 'https://via.placeholder.com/150';
const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/';

const DatosAPI = () => {

    fetch(URL_API_JSON_PLACEHOLDER,
        {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((post) => console.log(post.slice(0, 3)))
        .catch((error) => console.error(error))
}

boton1.addEventListener('click', () => {
    DatosAPI()
})






//Enviar datos al servidor

const enviarDatos = (nuevoPost) => {
    fetch(URL_API_JSON_PLACEHOLDER,
        {
            method: 'POST',
            body: JSON.stringify(nuevoPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((post) => console.log(post))
        .catch((error) => console.log("Ha ocurrido el siguiente error: " + error))
}


boton2.addEventListener('click', () => {
    const nuevoPost = {
        title: 'Título',
        body: 'Cuerpo del post, oaa'
    }
    enviarDatos(nuevoPost);
})


//Descargar la imagen

const renderImagen = (url) => `
<img src=${url}>
`;

const ImagenAPI = () => {
    fetch(CORS_ANYWHERE + URL_API_VIA_PLACEHOLDER,
        {
            method: 'GET'
        })
        .then((response) => response.blob())
        .then((image) => {
            const urlObjeto = URL.createObjectURL(image);
            imgCont.innerHTML = renderImagen(urlObjeto)
        })
        .catch((error) => console.error(error))
}
boton3.addEventListener('click', () => {
    ImagenAPI();
})