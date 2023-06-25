function CustomInput({ handleTip }) {
  return (
    <label className="relative w-full">
      <span className="sr-only">Custom input</span>
      <input
        className="h-16 w-52 rounded-lg bg-[#f4fafa]  p-5 text-3xl text-[#00494d] hover:bg-[#26c0ab] hover:text-[#00494d]"
        placeholder="Custom"
        type="number"
        name="total_bill"
        dir="rtl"
        onChange={handleTip}
      />
    </label>
  );
}

export default CustomInput;
