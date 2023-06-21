function TipButton({ percentage }) {
  return (
    <button className="h-16 w-52 rounded-lg  bg-[#00494d] p-2 text-3xl text-white hover:bg-[#26c0ab]">
      {percentage}%
    </button>
  );
}

export default TipButton;
