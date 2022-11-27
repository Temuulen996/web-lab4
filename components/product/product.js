import Link from "next/link";
const Product = ({ data }) => {
  return (
    <div className="w-36 md:w-64 mx-4 my-4">
      <div className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src={data.strDrinkThumb}
            alt="Front of men's Basic Tee in black."
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link href={`/cocktails/${data.idDrink}`}>
                <a>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {data.strDrink}
                </a>
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">дэлгэрэнгүй</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
      {/* More products... */}
    </div>
  );
};

export default Product;
