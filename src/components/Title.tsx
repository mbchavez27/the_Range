const Title = () => {
  return (
    <>
      <div className="font-Montserrat flex justify-center items-center text-[#081C15] my-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8em"
          height="8em"
          viewBox="0 0 24 24"
          className="mr-3"
        >
          <circle cx={12} cy={12} r={3} fill="currentColor"></circle>
          <path
            fill="currentColor"
            d="M13 4.069V2h-2v2.069A8.008 8.008 0 0 0 4.069 11H2v2h2.069A8.007 8.007 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6s6 2.691 6 6s-2.691 6-6 6"
          ></path>
        </svg>
        <div className="flex justify-center flex flex-col items-center">
          <div className="italic text-6xl my-2">
            the
            <span className="font-bold">Range</span>
          </div>
          View Vacant Rooms in DLSU
        </div>
      </div>
    </>
  );
};

export default Title;
