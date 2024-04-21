import axiosClient from '../axiosClient';

export async function searchMeals({ commit }, keyword) {
  try {
    const { data } = await axiosClient.get(`search.php?s=${encodeURIComponent(keyword)}`);
    commit('setSearchedMeals', data.meals || []);
  } catch (error) {
    console.error('Error searching meals:', error);
    commit('setSearchedMeals', []); 
  }
}

export async function searchMealsByLetter({ commit }, letter) {
  try {
    const { data } = await axiosClient.get(`search.php?f=${encodeURIComponent(letter)}`);
    commit('setMealsByLetter', data.meals || []);
  } catch (error) {
    console.error('Error searching meals by letter:', error);
    commit('setMealsByLetter', []);
  }
}

export async function searchMealsByIngredient({ commit }, ingredient) {
  try {
    const { data } = await axiosClient.get(`filter.php?i=${encodeURIComponent(ingredient)}`);
    commit('setMealsByIngredients', data.meals || []);
  } catch (error) {
    console.error('Error searching meals by ingredient:', error);
    commit('setMealsByIngredients', []);
  }
}
