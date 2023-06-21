function Bill() {
  return (
    <label className="relative w-full">
      <span className="sr-only">Total amount</span>
      <span className="absolute inset-y-0 left-2 flex items-center pl-2">
        <img src="src\assets\icon-dollar.svg"></img>
      </span>
      <input
        className="block w-full rounded-md bg-[#f4fafa] py-2 pl-9  pr-4 text-2xl text-[#00494d] shadow-sm placeholder:text-[#7f9c9f] focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
        placeholder="0"
        type="number"
        name="total_bill"
        dir="rtl"
      />
    </label>
  );
}

export default Bill;
