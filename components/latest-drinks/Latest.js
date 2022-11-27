import Image from "next/image";
const Latest = ({ data }) => {
  return (
    <div className="">
      <Image
        src="https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        width={50}
        height={50}
      />
      <p>{data.strDrink}</p>
    </div>
  );
};

export default Latest;
