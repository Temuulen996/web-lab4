import { useState, useContext, isValidElement, useEffect } from "react";
import { useRouter } from "next/router";
import UserContext from "../context/user-context";
import Link from "next/link";
import Modall from "../components/modal/modal";
import Image from "next/image";
const Register = () => {
  const router = useRouter();
  const userCtx = useContext(UserContext);
  useEffect(() => {
    userCtx.setErr("");
  }, []);
  console.log(userCtx.regist);
  return (
    <>
      <Modall />
      <div className=" w-full h-full z-20 bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80)]">
        <div className="h-screen w-full flex justify-center items-center ">
          <div className=" mx-7 md:mx-0 block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput123"
                    aria-describedby="emailHelp123"
                    placeholder="First name"
                    onChange={(e) => {
                      userCtx.setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput124"
                    aria-describedby="emailHelp124"
                    placeholder="Last name"
                    onChange={(e) => {
                      userCtx.setLastName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput125"
                  placeholder="Email address"
                  onChange={(e) => {
                    userCtx.setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type={"tel"}
                  pattern="[0-9]{8}"
                  className="form-control block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput125"
                  placeholder="phone number"
                  onChange={(e) => {
                    userCtx.setPhone(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="password"
                  className="form-control block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput126"
                  placeholder="Password"
                  minLength="5"
                  onChange={(e) => {
                    userCtx.setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="w-full">
                <input
                  className="w-full my-3 h-auto rounded-[4px] border-gray-300"
                  type={"date"}
                  onChange={(e) => {
                    userCtx.setbornDate(e.target.value);
                  }}
                />
              </div>
              <div className="w-full mb-4">
                <div className="flex justify-center w-full">
                  <div className=" w-full">
                    <select
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
                      aria-label="Default select example"
                      onChange={(e) => {
                        userCtx.setSex(e.target.value);
                      }}
                    >
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center text-red-600">
                {userCtx.err}
              </div>

              <p
                onClick={() => userCtx.SingUp()}
                type="submit"
                className="
              cursor-pointer
w-full
px-6
py-2.5
bg-blue-600
text-white
font-medium
text-xs
flex justify-center
leading-tight
uppercase
rounded
shadow-md
hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-blue-800 active:shadow-lg
transition
duration-150
ease-in-out"
              >
                Sign up
              </p>

              <Link href="/login">
                <a
                  type="submit"
                  className="
w-full
px-6
mt-4
flex justify-center
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
active:bg-blue-800 active:shadow-lg
transition
duration-150
ease-in-out"
                >
                  i have an account
                </a>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
