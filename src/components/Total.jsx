function Total({ totalBill, handleReset, disabled }) {
  return (
    <div
      className="flex w-full flex-col gap-6 rounded-2xl bg-[#00494d] px-4 pb-7 pt-10 
    md:row-span-3 md:h-full md:w-full md:gap-y-20 md:p-16"
    >
      <div className="flex justify-between">
        <p className=" text-white md:text-lg">
          Tip Amount <br />{" "}
          <span className="text-sm text-[#7f9c9f]">/ person</span>
        </p>
        <span className="text-3xl text-[#26c0ab] md:text-5xl">
          ${totalBill.tip.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between">
        <p className=" text-white md:text-lg">
          Total <br /> <span className=" text-sm text-[#7f9c9f]">/ person</span>
        </p>
        <span className="text-3xl text-[#26c0ab] md:text-5xl">
          ${totalBill.finalbill.toFixed(2)}
        </span>
      </div>
      <button
        onClick={handleReset}
        className="rounded-md  bg-[#26c0ab] p-4 text-2xl uppercase disabled:opacity-20 md:mt-auto"
        disabled={disabled}
      >
        Reset
      </button>
    </div>
  );
}

export default Total;
