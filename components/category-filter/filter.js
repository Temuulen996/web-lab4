import axios from "axios";
import { useState } from "react";

const CategoryFilter = (props) => {
  const [filterType, setFilterType] = useState(false);
  const changeFilterType = (checked) => {
    checked ? setFilterType(true) : setFilterType(false);
  };
  return (
    <div className=" my-4">
      <p className="w-full text-center md:text-3xl">Filter хийх</p>
      <form>
        <label
          htmlFor="default-toggle"
          className="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            defaultValue
            onChange={(e) => {
              changeFilterType(e.target.checked);
            }}
            id="default-toggle"
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Орцоор filter хийх үү?
          </span>
        </label>

        <div
          className={`my-2 text-gray-500 ${filterType ? `hidden` : `block`}`}
        >
          {" "}
          <p className="text-xl flex justify-center text-black">Glass сонго</p>
          <select
            value={props.filter.glass.replaceAll("_", " ")}
            className="form-select appearance-none
            block
             w-full
             px-3
             py-1.5
             text-base
             font-normal
             text-gray-700
             bg-white bg-clip-padding bg-no-repeat
             border border-solid border-gray-300
             rounded
             transition
             ease-in-out
             m-0
           focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            onChange={(e) => {
              props.setGlass(e.target.value);
            }}
            name="glass"
          >
            <option value=""></option>
            {props.filterAtt.glassList.map(
              (el, i) => (
                <option key={i} value={el.strGlass}>
                  {el.strGlass}
                </option>
              )
              // <div className="flex items-center justify-between">
              //   <p>{el.strGlass}:</p>
              //   <input
              //     onChange={(e) => {
              //       props.setGlass(e.target.value);
              //     }}
              //     type={"checkbox"}
              //     value="Champagne_flute"
              //   ></input>
              // </div>
            )}
          </select>
        </div>
        <div
          className={` w-64 my-2 text-gray-500 ${
            filterType ? `hidden` : `block`
          }`}
        >
          {" "}
          <p className="text-xl flex justify-center text-black">
            Alcohol агуулсан эсэх
          </p>
          <select
            value={props.filter.alcohol.replaceAll("_", " ")}
            className="form-select appearance-none
            block
             w-full
             px-3
             py-1.5
             text-base
             font-normal
             text-gray-700
             bg-white bg-clip-padding bg-no-repeat
             border border-solid border-gray-300
             rounded
             transition
             ease-in-out
             m-0
           focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            onChange={(e) => {
              props.setAlcohol(e.target.value);
            }}
            name="alcohol"
          >
            <option value=""></option>
            {props.filterAtt.alcoholList.map(
              (el, i) => (
                <option key={i} value={el.strAlcoholic}>
                  {el.strAlcoholic}
                </option>
              )
              // <div className="flex items-center justify-between">
              //   <p>{el.strGlass}:</p>
              //   <input
              //     onChange={(e) => {
              //       props.setGlass(e.target.value);
              //     }}
              //     type={"checkbox"}
              //     value="Champagne_flute"
              //   ></input>
              // </div>
            )}
          </select>
        </div>
        <div
          className={`my-2 text-gray-500  ${filterType ? `hidden` : `block`}`}
        >
          {" "}
          <p className="text-xl flex justify-center text-black">
            Category-оор сонго
          </p>
          <select
            className=" form-select appearance-none
                  block
                   w-full
                   px-3
                   py-1.5
                   text-base
                   font-normal
                   text-gray-700
                   bg-white bg-clip-padding bg-no-repeat
                   border border-solid border-gray-300
                   rounded
                   transition
                   ease-in-out
                   m-0
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            value={props.filter.category.replaceAll("_", " ")}
            onChange={(e) => {
              props.setCategory(e.target.value);
            }}
            name="glass"
          >
            <option value=""></option>
            {props.filterAtt.categoryList.map(
              (el, i) => (
                <option key={i} value={el.strCategory}>
                  {el.strCategory}
                </option>
              )
              // <div className="flex items-center justify-between">
              //   <p>{el.strGlass}:</p>
              //   <input
              //     onChange={(e) => {
              //       props.setGlass(e.target.value);
              //     }}
              //     type={"checkbox"}
              //     value="Champagne_flute"
              //   ></input>
              // </div>
            )}
          </select>
        </div>
        {/* <div className="my-2 text-gray-500">
          {" "}
          <p className="text-xl flex justify-center text-black">Ingredient?</p>
          <div className="flex justify-center  w-full">
            <div>
              <div className="dropdown relative  w-full">
                <a
                  className="  w-full
    dropdown-toggle
    px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg active:text-white
    transition
    duration-150
    ease-in-out
    flex
    items-center
    whitespace-nowrap
  "
                  href="#"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    className="w-2 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    />
                  </svg>
                </a>
                <ul
                  className="
    dropdown-menu
    min-w-max
    absolute
    hidden
   
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    hidden
    m-0
    bg-clip-padding
    border-none
  "
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li className="flex justify-around">
                    <p className="">coffee</p>
                    <input type={"checkbox"} className="" href="#" />
                  </li>
                  <li className="flex justify-around">
                    <p className="">coffee</p>
                    <input type={"checkbox"} className="" href="#" />
                  </li>
                  <li className="flex justify-around">
                    <p className="">coffee</p>
                    <input type={"checkbox"} className="" href="#" />
                  </li>
                  <li className="flex justify-around">
                    <p className="">coffee</p>
                    <input type={"checkbox"} className="" href="#" />
                  </li>
                  <li className="flex justify-around">
                    <p className="">coffee</p>
                    <input type={"checkbox"} className="" href="#" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        <div className={`${filterType ? `block` : `hidden`} mt-2  w-64`}>
          <p className="text-2xl flex justify-center text-black mb-2">Орц</p>
          <div className={` h-96 overflow-scroll overflow-x-hidden w-full`}>
            {props.filterAtt.ingredientList.map((el, i) => (
              <div key={i} className="w-full flex justify-between">
                <p>{el.strIngredient1}</p>
                <input
                  onChange={(e) => {
                    props.ingredientFilter(e.target.value, e.target.checked);
                  }}
                  value={el.strIngredient1}
                  type={"checkbox"}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => {
              props.searchByCategory();
            }}
            type="button"
            class=" mt-4 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryFilter;
