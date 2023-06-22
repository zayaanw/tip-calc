function Container({ children }) {
  return (
    <div className="container relative mt-10 flex h-fit flex-col items-start gap-5 rounded-3xl border-4 border-white bg-white px-6 py-7 ">
      {children}
    </div>
  );
}

export default Container;
