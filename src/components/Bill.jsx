function Bill({ img, handleChange, minimum, title }) {
  return (
    <>
      <h1 className=" mb-2 text-[#7f9c9f]">{title}</h1>
      <label className="relative w-full">
        <span className="sr-only">Total amount</span>
        <span className="absolute inset-y-0 left-2 flex items-center pl-2">
          <img src={img}></img>
        </span>
        <input
          className="peer block w-full rounded-md bg-[#f4fafa] py-2 pl-9  pr-4 text-2xl text-[#00494d] shadow-sm placeholder:text-[#7f9c9f] invalid:border-red-600 invalid:text-pink-600
          focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-600 focus:invalid:ring-pink-500"
          placeholder="0"
          type="number"
          name="total_bill"
          dir="rtl"
          min={minimum}
          onChange={handleChange}
        />
        <p className="invisible absolute -top-8 right-2 text-red-600 peer-invalid:visible">
          Please enter a valid number
        </p>
      </label>
    </>
  );
}

export default Bill;
