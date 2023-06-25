function Total({ totalBill, handleReset }) {
  return (
    <div className="container flex flex-col gap-6 rounded-2xl bg-[#00494d] px-4 pb-7 pt-10 md:row-span-3 md:h-full">
      <div className="flex justify-between">
        <p className=" text-white">
          Tip Amount <br />{" "}
          <span className="text-sm text-[#7f9c9f]">/ person</span>
        </p>
        <span className="text-3xl text-[#26c0ab]">
          ${totalBill.tip.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between">
        <p className=" text-white">
          Total <br /> <span className=" text-sm text-[#7f9c9f]">/ person</span>
        </p>
        <span className="text-3xl text-[#26c0ab]">
          ${totalBill.finalbill.toFixed(2)}
        </span>
      </div>
      <button
        onClick={handleReset}
        className="rounded-md  bg-[#26c0ab] p-4 text-2xl uppercase"
      >
        Reset
      </button>
    </div>
  );
}

export default Total;
