function Container({ children }) {
  return (
    <div className="container relative mt-10 flex h-fit flex-col items-start gap-7 rounded-3xl border-4 border-white bg-white px-6 py-7 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-3 md:items-center md:gap-x-4 md:gap-y-0">
      {children}
    </div>
  );
}

export default Container;
