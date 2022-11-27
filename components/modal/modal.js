import UserContext from "../../context/user-context";
import { useContext } from "react";
const Modall = ({ modalOpen }) => {
  const userCtx = useContext(UserContext);
  return (
    <div
      className={`w-full h-full  bg-black text-white top-0 z-30 opacity-80 ${
        userCtx.modal ? "fixed" : "hidden"
      } `}
    >
      <div className="h-full w-full flex justify-center items-center">
        <div className="text-4xl font-bold">Амжилттай бүртгэгдлээ.</div>
      </div>
    </div>
  );
};

export default Modall;
