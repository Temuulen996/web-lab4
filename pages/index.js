import { useEffect, useState, useContext } from "react";
import UserContext from "../context/user-context";
import { getAllCocktail } from "../lib/api";
import styles from "../styles/Home.module.css";
import Carousel from "../components/carousel";
import Router, { useRouter } from "next/router";
import react from "react";
import { Redirect } from "react-router-dom";
import { getCookie } from "cookies-next";
import Navbarr from "../components/navbar/navbar";
import Footerr from "../components/footer";
import HomeCard from "../components/home-card/home-card";
import Modall from "../components/modal/modal";
import Latest from "../components/latest-drinks/Latest";
import Layout from "../components/layout/layout";
export default function Home({ logged, cocktails }) {
  const userCtx = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    if (logged == false) {
      router.replace("/login");
    }
  }, []);
  // logged = true; // uuniigg ustgah
  return (
    <div className="w-full">
      {logged ? (
        <Layout>
          <main className="w-full h-auto">
            <div>
              <div className="h-full">
                <Carousel />
              </div>
            </div>
            <div className="w-full my-4 flex flex-col justify-center items-center border-b-[1px] border-gray-200">
              <p className="text-2xl font-bold mt-3">TOP cocktail-ууд</p>
              <div className="w-full flex flex-col md:flex-row justify-center items-center my-6">
                {cocktails.map((el, i) => {
                  return el.strIngredient5 != null ? (
                    <HomeCard key={el.idDrink} data={el} />
                  ) : null;
                })}
              </div>
            </div>
            <div className="w-full my-4 flex flex-col justify-center items-center">
              <p className="text-2xl font-bold">Сүүлд нэмэгдсэн cocktail-ууд</p>
              <div className="w-full flex flex-col md:flex-row justify-center items-center my-6">
                {cocktails.map((el, i) => {
                  const modified = new Date(el.strIngredient5);

                  // return Date(el.strIngredient5) >
                  //   ? (
                  //   <Latest data={el} key={i} />
                  // ) : null;
                })}
              </div>
            </div>
          </main>
        </Layout>
      ) : (
        <div></div>
      )}
      <Modall />
    </div>
  );
}
export const getServerSideProps = async ({ req, res }) => {
  let cocktails = await getAllCocktail();

  cocktails = cocktails.data.drinks;

  let logged = getCookie("logged", {
    req,
    res,
  });
  return {
    props: { logged: logged ? true : false, cocktails }, // will be passed to the page component as props
  };
};
