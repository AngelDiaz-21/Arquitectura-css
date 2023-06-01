import { getRecipes } from "./api.js";
import { ModalError } from "./modalError.js";
import { createModal } from "./modalResponse.js";

export const createCard = async (search, random=false, keepLastSearch=false) => {
    const dataFromResponse = await getRecipes(search, random);
    const meals = document.getElementById('recetas-cards');

    if(!keepLastSearch) meals.innerHTML = "";

    if(dataFromResponse != null){
        dataFromResponse.forEach(item => {
            const divReceta = document.createElement('div');
            divReceta.className = 'receta';
            divReceta.id = `receta${item.idMeal}`;

            const recetaImage = document.createElement('img');
            recetaImage.className = 'receta__imagen';
            recetaImage.src = item.strMealThumb;
            recetaImage.alt = item.strMeal;

            const divRecetaContenido = document.createElement('div');
            divRecetaContenido.className = 'receta__contenido';

            const recetaTitulo = document.createElement('h3');
            recetaTitulo.className = 'receta__titulo';
            recetaTitulo.title = item.strMeal;
            recetaTitulo.textContent = item.strMeal;

            const instrucciones = document.createElement('h5');
            instrucciones.textContent = 'Instrucciones';

            const recetaInstrucciones = document.createElement('p');
            recetaInstrucciones.className = 'receta__descripcion';
            recetaInstrucciones.textContent = item.strInstructions;

            const recetaBoton = document.createElement('button');
            recetaBoton.setAttribute('type', 'button');
            recetaBoton.className = 'receta__boton';
            recetaBoton.textContent = 'Ver receta';

            recetaBoton.addEventListener('click', async function(){
                const main = document.querySelector('main');                

                if(document.getElementById(`receta${item.idMeal}`)){
                    const response = await createModal(item.idMeal);
                    response.classList.add('active');
                    const modalPopup = response.childNodes[0];
                    modalPopup.classList.add('active');
                    main.appendChild(response);
                }else{
                    const badResponse = ModalError();
                    badResponse.classList.add('active');
                    const modalPopup = badResponse.childNodes[0];
                    modalPopup.classList.add('active');
                    main.appendChild(badResponse);
                }
            });

            divRecetaContenido.appendChild(recetaTitulo);
            divRecetaContenido.appendChild(instrucciones);
            divRecetaContenido.appendChild(recetaInstrucciones);
            divRecetaContenido.appendChild(recetaBoton);
            divReceta.appendChild(recetaImage);
            divReceta.appendChild(divRecetaContenido);
            meals.appendChild(divReceta);
        })
    }else{
        const messageSearch = document.getElementById('messageSearch');
        messageSearch.textContent = `No hay resultado(s) para ${search}`;
    }
}