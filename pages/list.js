import {
  categoryListByAlcoholic,
  categoryListByCategory,
  categoryListByGlass,
  categoryListByIngredient,
  getAllCocktail,
} from "../lib/api";
import Layout from "../components/layout/layout";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import Product from "../components/product/product";
import { useState } from "react";
import CategoryFilter from "../components/category-filter/filter";
import { FilterC } from "../lib/api";
import { useRouter } from "next/router";
export const getServerSideProps = async ({ req, res }) => {
  let cocktails = await getAllCocktail();
  cocktails = cocktails.data.drinks;
  let alcoholList = await categoryListByAlcoholic();
  alcoholList = alcoholList.data.drinks;
  let glassList = await categoryListByGlass();
  glassList = glassList.data.drinks;
  let ingredientList = await categoryListByIngredient();
  ingredientList = ingredientList.data.drinks;
  let categoryList = await categoryListByCategory();
  categoryList = categoryList.data.drinks;
  let logged = getCookie("logged", {
    req,
    res,
  });
  return {
    props: {
      logged: logged ? true : false,
      cocktails: cocktails ? cocktails : [],
      alcoholList,
      glassList,
      ingredientList,
      categoryList,
    },
  };
};

const CocktailList = ({
  logged,
  cocktails,
  alcoholList,
  glassList,
  ingredientList,
  categoryList,
}) => {
  const router = useRouter();
  useEffect(() => {
    if (logged == false) {
      router.replace("/login");
    }
  }, []);

  const [cocktailinPage, setCocktailin] = useState(cocktails);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    alcohol: "",
    category: "",
    glass: "",
  });
  const changeSearchField = (text) => {
    setSearch(text);
  };
  const setGlass = (glass) => {
    let k = glass.replaceAll(" ", "_");
    setFilter({ ...filter, glass: k });
    console.log(filter);
  };
  const setAlcohol = (alcohol) => {
    let k = alcohol.replaceAll(" ", "_");
    setFilter({ ...filter, alcohol: k });
    console.log(filter);
  };
  const setCategory = (category) => {
    let k = category.replaceAll(" ", "_");

    setFilter({ ...filter, category: k });
    console.log(filter);
  };

  const searchByCategory = async () => {
    let newCocktails;
    console.log(filter);
    if (
      filter.alcohol === "" &&
      filter.glass === "" &&
      filter.category === ""
    ) {
      newCocktails = await getAllCocktail();
    } else {
      newCocktails = await FilterC(
        filter.alcohol,
        filter.glass,
        filter.category,
        ingredi
      );

      // setFilter({ alcohol: "", category: "", glass: "" });
    }
    console.log(newCocktails);
    setCocktailin(newCocktails.data.drinks);
  };
  //   <div class="flex justify-center">
  //   <div class="mb-3 xl:w-96">
  //     <select class="form-select appearance-none
  //       block
  //       w-full
  //       px-3
  //       py-1.5
  //       text-base
  //       font-normal
  //       text-gray-700
  //       bg-white bg-clip-padding bg-no-repeat
  //       border border-solid border-gray-300
  //       rounded
  //       transition
  //       ease-in-out
  //       m-0
  //       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
  //         <option selected>Open this select menu</option>
  //         <option value="1">One</option>
  //         <option value="2">Two</option>
  //         <option value="3">Three</option>
  //     </select>
  //   </div>
  // </div>
  const [ingredi, setIngredi] = useState([]);
  const ingredientFilter = (ingredient, isChecked) => {
    console.log(ingredient, isChecked);
    let ingredients = ingredi;
    ingredient = ingredient.replaceAll(" ", "_");
    isChecked === true
      ? ingredients.push(ingredient)
      : (ingredients = ingredients.filter((e) => e !== ingredient));
    setIngredi(ingredients);
    console.log(ingredi);
  };

  return (
    <>
      {logged ? (
        <Layout>
          <div className="flex flex-col md:flex-row  w-full justify-center items-center md:items-start">
            <div className="md:w-1/4 w-full ">
              <div className="w-full mt-16 flex justify-center ">
                <CategoryFilter
                  ingredientFilter={ingredientFilter}
                  filter={filter}
                  searchByCategory={searchByCategory}
                  setCategory={setCategory}
                  setAlcohol={setAlcohol}
                  setGlass={setGlass}
                  filterAtt={{
                    ingredientList: ingredientList,
                    alcoholList: alcoholList,
                    glassList: glassList,
                    categoryList: categoryList,
                  }}
                />
              </div>
            </div>

            <div className="w-full md:w-3/4 h-auto">
              <div className="flex justify-center py-3">
                <div className="flex justify-center">
                  <form className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        onChange={(e) => {
                          changeSearchField(e.target.value);
                          console.log(search);
                        }}
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Хайх"
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-full h-auto">
                <div className="flex flex-wrap justify-center items-center">
                  {cocktailinPage ? (
                    cocktailinPage.map((el, i) =>
                      el.strDrink.toLowerCase().search(search.toLowerCase()) >
                      -1 ? (
                        <Product key={i} data={el} />
                      ) : null
                    )
                  ) : (
                    <div className="text-3xl">Бүтээгдэхүүн олдсонгүй</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </Layout>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default CocktailList;
