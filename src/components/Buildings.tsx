import Slider from "react-slick";

const Building = () => {
  return (
    <>
      <div className="mx-3">
        <div className="bg-[url('https://digitaldelasalle.wordpress.com/wp-content/uploads/2020/09/dsc_0505.jpg?w=1024')] bg-cover bg-center w-96 h-72 rounded-t-md"></div>
        <div className="bg-[#081C15] w-96 h-36 rounded-b-md text-white px-6 pt-8">
          <div className="text-3xl font-bold">Velasco Hall</div>
          <div className="flex items-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
            <span className="font-medium mx-1">Available Rooms:</span>
            6/15
          </div>
        </div>
      </div>
    </>
  );
};

const Buildings = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <>
      <div className="font-Montserrat flex justify-center my-24">
        <Building></Building>
      </div>
    </>
  );
};

export default Buildings;
