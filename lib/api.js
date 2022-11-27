import axios from "axios";
export const getDrinkById = async (id) => {
  const drink = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return drink;
};
export const getAllCocktail = async () => {
  const allCocktails = await axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s"
  );

  return allCocktails;
};
export const getCocktailByName = async (name) => {
  const cocktail = await axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => {
      console.log("amjilttai bolloo");
    })
    .catch((err) => {
      console.log("aldaa garlaa");
    });
  return cocktail;
};
export const getAllCocktailsByFirstLetter = async (letter) => {
  const cocktails = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
  );
  return cocktails;
};
export const getIngredientsByName = async (name) => {
  const ingredients = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`
  );
  return ingredients;
};
export const getIngredientsById = async (id) => {
  const ingredients = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`
  );
  return ingredients;
};
export const FilterC = async (alchohol, glass, category, ingredients) => {
  console.log(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${
      alchohol ? `a=${alchohol}` : ``
    }${category ? `&c=${category}` : ``}${
      glass
        ? `&g=${glass}`
        : `${ingredients.map((el, i) => {
            return i === 0 ? `i=${el}` : `&i=${el}`;
          })}`
    }`
  );
  const alchohols = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${
      alchohol ? `a=${alchohol}` : ``
    }${category ? `&c=${category}` : ``}${
      glass
        ? `&g=${glass}`
        : `${ingredients.map((el, i) => {
            return `&i=${el}`;
          })}`
    }`
  );
  // const alchohols = await axios.get(
  //   `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${
  //     alchohol ? `a=${alchohol}` : ``
  //   }${category ? `&c=${category}` : ``}${glass ? `&g=${glass}` : ``}`
  // );
  return alchohols;
};
export const categoryListByGlass = async () => {
  const list = axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list"
  );
  return list;
};
export const categoryListByAlcoholic = async () => {
  const list = axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list"
  );
  return list;
};
export const categoryListByIngredient = async () => {
  const list = axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
  );
  return list;
};
export const categoryListByCategory = async () => {
  const list = axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
  );
  return list;
};
