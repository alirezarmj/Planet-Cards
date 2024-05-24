const Spinner = () => {
  return (
    <div className="justify-center items-center pt-20 flex">
      <div
        className=" text-orange-500 h-10 w-10 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        {/* <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span> */}
      </div>
      <p className="ml-3 text-orange-600 leading-10 tracking-widest">Loading...</p>
    </div>
  );
};

export default Spinner;
