const Footerr = () => {
  return (
    <div className="w-full h-auto text-gray-700">
      <footer
        className="text-center text-white flex justify-center flex-col items-center"
        style={{ backgroundColor: "#caced1" }}
      >
        <div className="container p-6">
          <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
            <div className="lg:mb-0 mb-6 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="lg:mb-0 mb-6 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1457518919282-b199744eefd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="lg:mb-0 mb-6 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1455621481073-d5bc1c40e3cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="lg:mb-0 mb-6 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1482349212652-744925892164?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                className="w-full rounded-md shadow-lg"
              />
            </div>

            <div className="lg:mb-0 mb-6 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1438522014717-d7ce32b9bab9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="lg:mb-0 mb-6 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1485265449635-ca623a55e95c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="w-full rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
        <div
          className="text-center p-4 w-full"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-white" href="https://tailwind-elements.com/">
            {"  "}Temuulen
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footerr;
