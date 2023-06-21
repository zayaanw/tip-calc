function Container({ children }) {
  return (
    <div className="relative mx-2 mt-4 h-96 rounded-lg border-4 border-white bg-white">
      {children}
    </div>
  );
}

export default Container;
