function TipButton({ percentage, handleTip }) {
  return (
    <button
      onClick={handleTip}
      className="h-16 w-48 rounded-lg bg-[#00494d] p-2 text-3xl text-white hover:bg-[#26c0ab] hover:text-[#00494d]"
    >
      {percentage}%
    </button>
  );
}

export default TipButton;
