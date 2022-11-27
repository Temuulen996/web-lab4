import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../../components/layout/layout";
import { getCookie } from "cookies-next";
import {
  categoryListByAlcoholic,
  categoryListByCategory,
  categoryListByIngredient,
  getDrinkById,
} from "../../lib/api";
import { categoryListByGlass } from "../../lib/api";

export const getServerSideProps = async (context) => {
  let drink = await getDrinkById(context.query.id);
  console.log(context);
  drink = drink.data.drinks[0];
  let logged = getCookie("logged", { req: context.req, res: context.res });
  return {
    props: { logged: logged ? true : false, drink },
  };
};

const Item = ({ drink, logged }) => {
  const router = useRouter();
  useEffect(() => {
    if (logged == false) {
      router.replace("/login");
    }
  }, []);
  let ingredients = [];
  for (let i = 1; i <= 15; i++) {
    ingredients.push(drink[`strIngredient${i}`]);
  }

  return (
    <>
      {logged ? (
        <Layout>
          <div className="bg-white">
            <div className="pt-6">
              <nav aria-label="Breadcrumb">
                <ol
                  role="list"
                  className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                >
                  <li>
                    <div className="flex items-center">
                      <Link href="/list">
                        <a
                          href="#"
                          className="mr-2 text-sm font-medium text-gray-900"
                        >
                          cocktail list
                        </a>
                      </Link>
                      <svg
                        width={16}
                        height={20}
                        viewBox="0 0 16 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="h-5 w-4 text-gray-300"
                      >
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <a
                        href="#"
                        className="mr-2 text-sm font-medium text-gray-900"
                      >
                        {drink.strCategory}
                      </a>
                      <svg
                        width={16}
                        height={20}
                        viewBox="0 0 16 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="h-5 w-4 text-gray-300"
                      >
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                      </svg>
                    </div>
                  </li>
                  <li className="text-sm">
                    <a
                      href="#"
                      aria-current="page"
                      className="font-medium text-gray-500 hover:text-gray-600"
                    >
                      {drink.strDrink}
                    </a>
                  </li>
                </ol>
              </nav>
              {/* Image gallery */}
              <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8 w-full">
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8 ">
                  <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg justify-center flex">
                    <img
                      src={drink.strDrinkThumb}
                      alt="Model wearing plain gray basic tee."
                      className=" object-cover object-center w-96 h-96"
                    />
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {drink.strDrink}
                  </h1>
                </div>
                {/* Options */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <p className="text-3xl tracking-tight text-gray-900">
                    орцнуудын зураг
                  </p>
                  {/* Reviews */}
                  <div className="mt-6">
                    <div className="flex flex-wrap">
                      {ingredients.map((el, i) => {
                        return el != null ? (
                          <img
                            className="m-2 bg-gray-300 rounded"
                            src={`https://www.thecocktaildb.com/images/ingredients/${el}-small.png`}
                          />
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                  {/* Description and details */}
                  <div>
                    <h3 className="sr-only">Description</h3>
                    <div className="space-y-6">
                      <p className="text-base text-gray-900">
                        {drink.strInstructionsES}
                      </p>
                    </div>
                  </div>
                  <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-900">
                      Орцнууд
                    </h3>
                    <div className="mt-4">
                      <ul
                        role="list"
                        className="list-disc space-y-2 pl-4 text-sm"
                      >
                        {ingredients.map((el, i) => {
                          return el != null ? (
                            <li className="text-gray-400 list-none" key={i}>
                              <span className="text-gray-600">{el}</span>
                            </li>
                          ) : null;
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-10">
                    <h2 className="text-sm font-medium text-gray-900">
                      Alcoholic эсвэл non-Alcoholic
                    </h2>
                    <div className="mt-4 space-y-6">
                      <div className="text-sm text-gray-600 flex items-center ">
                        <p className="mr-5">{drink.strAlcoholic}</p>
                        <div className="my-2">
                          <svg
                            className="svg-icon h-6 w-6 fill-green-500"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <div>sadads</div>
      )}
    </>
  );
};
export default Item;
