import Link from "next/link";
const HomeCard = ({ data }) => {
  return (
    <div className="m-2">
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img className="rounded-t-lg" src={data.strDrinkThumb} alt="true" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {data.strDrink}
            </h5>
            <p className="text-gray-700 text-base mb-4 overflow-hidden h-[96px]">
              {data.strInstructions}
            </p>
            <Link href={`/cocktails/${data.idDrink}`}>
              <a className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Дэлгэрэнгүй
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
