import css from "./style.module.css";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import Link from "next/link";
const Navbarr = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div className={`w-full z-20 h-auto ${css.Navbar} `}>
      <Navbar fluid={true} rounded={true} color="#0000" className="bg-black">
        <Navbar.Brand href="/" className="bg-black">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4097/4097652.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Temka{"'"}s Lounge
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Temuulen</span>
              <span className="block truncate text-sm font-medium">
                Temuulen@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              onClick={() => {
                deleteCookie("logged", false);

                router.replace("/login");
              }}
            >
              Sign out
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link href="/">
            <a
              className={`text-gray-400 hover:text-black  duration-200 md:hover:scale-110 ${
                router.pathname == "/" ? `text-black` : ``
              }`}
            >
              HOME
            </a>
          </Link>
          <Link href="/list">
            <a
              className={`text-gray-400 hover:text-black  duration-200 md:hover:scale-110 ${
                router.pathname == "/list" ? `text-black` : ``
              }`}
            >
              COCKTAIL LIST
            </a>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbarr;
