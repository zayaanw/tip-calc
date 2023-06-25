function Container({ children }) {
  return (
    <div
      className=" md:gap-x-15 relative mt-10 flex h-fit flex-col items-start gap-7 rounded-3xl border-4 
    border-white bg-white px-6 
    py-7 md:grid md:h-[40rem] md:w-[85rem] md:grid-flow-col md:grid-cols-2 md:grid-rows-3 md:items-center md:gap-y-24 md:shadow-xl"
    >
      {children}
    </div>
  );
}

export default Container;
