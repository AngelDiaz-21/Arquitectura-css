import { getRecipes } from "./api.js";

export const createModal = async (mealId) =>{
    const dataFromResponse = await getRecipes(mealId);
    const meal = dataFromResponse[0];

    const ingredientList = document.createElement('ol');
    ingredientList.className='list-group';
                    
    for(let i=1;i<21;i++){
        if(meal[`strIngredient${i}`]){
            const itemIngrendient = document.createElement('li');
            itemIngrendient.className="items";
            itemIngrendient.textContent = meal[`strMeasure${i}`] +" of " + meal[`strIngredient${i}`];
            
            ingredientList.appendChild(itemIngrendient);
        }
    }

    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const popupModal = document.createElement('div');
    popupModal.className = 'popup';

    const contentClose = document.createElement('div');
    contentClose.className = 'contenedor-cerrar';

    const btnClose = document.createElement('a');
    btnClose.className = 'btn-cerrar-popup';
    btnClose.id = 'btn-cerrar-popup';

    const iconClose = document.createElement('i');
    iconClose.className = 'fa-regular fa-circle-xmark';

    const contentMeal = document.createElement('div');
    contentMeal.className = 'contenedor-elementos';

    const titleMeal = document.createElement('h1');
    titleMeal.className = 'titleMeal';
    titleMeal.textContent = meal.strMeal;

    const videoMeal = document.createElement('iframe');
    videoMeal.className = 'videoMeal';
    const linkVideo = meal.strYoutube.slice(32, meal.strYoutube.lenght);
    videoMeal.src = `https://www.youtube.com/embed/${linkVideo}`;

    const watchOnYoutube = document.createElement('a');
    watchOnYoutube.textContent='¡Ver Tutorial de la receta!';
    watchOnYoutube.setAttribute('target',"_blank");
    watchOnYoutube.href = meal.strYoutube;

    const imageMeal = document.createElement('img');
    imageMeal.className = 'imageMeal';
    imageMeal.src = meal.strMealThumb;
    imageMeal.alt = meal.strMeal;

    const titleInstructions = document.createElement('h5');
    titleInstructions.className = 'subTitles';
    titleInstructions.textContent = 'Instrucciones';

    const contentInstructions = document.createElement('div');
    contentInstructions.className = 'contentInstructions';

    const instructions = document.createElement('p');
    instructions.textContent = meal.strInstructions;
    instructions.className = 'instructions';

    const titleIngredients = document.createElement('h5');
    titleIngredients.className = 'subTitles';
    titleIngredients.textContent = 'Ingredientes';

    contentInstructions.appendChild(instructions);
    contentMeal.appendChild(titleMeal);
    contentMeal.appendChild(videoMeal);
    contentMeal.appendChild(imageMeal);
    contentMeal.appendChild(watchOnYoutube);
    contentMeal.appendChild(titleInstructions);
    contentMeal.appendChild(contentInstructions);
    contentMeal.appendChild(titleIngredients);
    contentMeal.appendChild(ingredientList);
    btnClose.appendChild(iconClose);
    contentClose.appendChild(btnClose);
    popupModal.appendChild(contentClose);
    popupModal.appendChild(contentMeal);
    overlay.appendChild(popupModal);
    
    btnClose.addEventListener("click", function() {
        overlay.classList.remove('active');
        popupModal.classList.remove('active');
        overlay.remove();
    });

    return overlay;
}