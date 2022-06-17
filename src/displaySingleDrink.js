import {hideLoading} from './toggleLoading.js';
import get from './getElement.js';
const displayDrink = (data) => {
     hideLoading();
     const drink = data.drinks[0];
     const {stringDrinkThumb: image,stringDrink: name,stringInstructions: description} = drink;
     const list = [drink.stringIngredient1,drink.stringIngredient2,drink.stringIngredient3,drink.stringIngredient4,drink.stringIngredient5];
     const images = get('.drink-image');
     const drinkName = get('.drink-name');
     const descriptions = get('.drink-description');
     const ingredients = get('.drink-ingredients');
     images.src = image;
     document.title = name;
     drinkName.textContent = name;
     descriptions.textContent = description;
     ingredients.innerHTML = list.map((item) => {
          if(!item) return;
          return `<li><i class="far fa-check-square"></i>${item}</li>`;
     }).join('');
};
export default displayDrink;