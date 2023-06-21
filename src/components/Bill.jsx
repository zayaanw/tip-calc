function Bill() {
  return (
    <label className="relative block w-full">
      <span className="sr-only">Total amount</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <img src="src\assets\icon-dollar.svg"></img>
      </span>
      <input
        className="block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 text-2xl shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        placeholder="0"
        type="number"
        name="total_bill"
      />
    </label>
  );
}

export default Bill;
