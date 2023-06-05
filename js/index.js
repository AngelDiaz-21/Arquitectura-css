import { createCard } from "./cards.js";
const search = document.getElementById('search');
const submit = document.getElementById('submit');
const mealEl = document.getElementById('recetas-cards');
const randomMealBtn = document.getElementById('randomBtn');
const messageSearch = document.getElementById('messageSearch');
const btnSearch = document.getElementById('btnBuscar');
let lastSeachType   = '';

const searchMeal = (event) => {
    event.preventDefault();
    const termino = search.value;
    
    if(termino !== ''){
        lastSeachType = 'search';
        createCard(termino);
        messageSearch.textContent = `Resultado de la búsqueda de ${termino}`;
    }else{
        btnSearch.disabled = true;
    }
}

const randomMeal = (event) => {
    event.preventDefault();

    if(lastSeachType === 'search' || lastSeachType === 'random'){
        mealEl.innerHTML = '';
    }
    lastSeachType = 'random';
    createCard('random', true, true);
    messageSearch.textContent = `Resultado de la búsqueda aleatoria`;
}

function mealPopulate(){
    for(let i = 0; i < 8; i++){
        createCard('random', true, true);
        lastSeachType = 'random';
    }

    messageSearch.textContent = ''
}

randomMealBtn.addEventListener('click', randomMeal);
submit.addEventListener('submit', searchMeal);
mealPopulate();