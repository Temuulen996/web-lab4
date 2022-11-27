import "../styles/globals.css";

import { useEffect } from "react";
import { UserStore } from "../context/user-context";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <UserStore>
      {" "}
      <Component {...pageProps} />
    </UserStore>
  );
}

export default MyApp;
