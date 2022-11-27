import Navbarr from "../navbar/navbar";
import Footerr from "../footer";
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full justify-between h-screen">
      <Navbarr />
      <div className="w-auto h-auto">{children}</div>
      <footer>
        <div>
          <Footerr />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
