function Container({ children }) {
  return (
    <div className="relative mt-10 flex h-96 flex-col items-start gap-4 rounded-lg border-4 border-white bg-white px-6 py-7 ">
      {children}
    </div>
  );
}

export default Container;
