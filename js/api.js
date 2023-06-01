export const getRecipes = async (search, random=false) => {
    if(random){
        return getRandomMeal();
    }else if(Number(search)){
        return getRecipesById(search);
    }else if(search.toString().length === 1){
        return getRecipesByFirstLetter(search);
    } else if(search.toString().length > 1){
        return getRecipesByName(search);
    }
}

const getRandomMeal = async () => {
    try {
        const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
        if(resp.ok){
            const {meals} = await resp.json();
            return meals;
        }else{
            throw Error(`Request rejected with status ${resp.status}`)
        }
    } catch (error) {
        console.error;
    }
}
// getRandomMeal();

const getRecipesByFirstLetter = async (search)=>{
    try {
        const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
        if(resp.ok){
            const {meals} = await resp.json();
            return meals;
        }else{
            throw Error(`Request rejected with status ${resp.status}`)
        }
    } catch (error) {
        console.error;
    }
}

const getRecipesByName = async (search) => {
    try {
        const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        if(resp.ok){
            const {meals} = await resp.json();
            return meals;
        }else{
            throw Error(`Request rejected with status ${resp.status}`)
        }
    } catch (error) {
        console.error;
    }
}
// getRecipesByName('Apple');

const getRecipesById = async (idMeal) => {
    try {
        const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        if(resp.ok){
            const {meals} = await resp.json();
            return meals;
        }else{
            throw Error(`Request rejected with status ${resp.status}`);
        }
    } catch (error) {
        console.error;
    }
}