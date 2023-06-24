import "./App.css";
import TipButton from "./components/TipButton";
import Logo from "./components/Logo";
import Container from "./components/Container";
import Bill from "./components/Bill";
import Total from "./components/Total";
import CustomInput from "./components/CustomInput";
import { useState } from "react";

function App() {
  const [totalBill, setBill] = useState({
    total: 0,
    tip: 0,
    finalbill: 0,
  });

  const [tipPercentage, setPercentage] = useState(0);

  const [totalPeople, setPeople] = useState(1);

  const handleBill = (e) => {
    setBill({
      ...totalBill,
      total: parseFloat(e.target.value),
      tip: parseFloat((e.target.value * tipPercentage).toFixed(2)),
      finalbill:
        (parseFloat(e.target.value * tipPercentage) +
          parseFloat(e.target.value)) /
        totalPeople,
    });
  };

  const handleTip = (e) => {
    const converted = parseFloat(e.target.textContent) / 100;

    setPercentage(converted);

    setBill({
      ...totalBill,
      tip: parseFloat((totalBill.total * converted).toFixed(2)),
      finalbill:
        parseFloat(totalBill.total) + parseFloat(totalBill.total * converted),
    });
  };

  const handlePeople = (e) => {
    e.target.value === "0"
      ? setPeople(1)
      : setPeople(parseFloat(e.target.value));

    setBill({ ...totalBill, finalbill: totalBill.total / e.target.value });
  };

  const handleReset = () => {
    setBill(0);
  };

  return (
    <>
      <div>
        <Logo></Logo>
        <Container>
          <div className="w-full">
            <h1 className="mb-2 text-[#7f9c9f]">Bill</h1>
            <Bill
              handleChange={handleBill}
              img="src\assets\icon-dollar.svg"
              personSet={false}
            />
          </div>
          <div className="w-full">
            <h1 className="mb-2 text-[#7f9c9f]">Select Tip %</h1>
            <div className="grid grid-flow-row grid-cols-2 grid-rows-3 gap-x-8 gap-y-4">
              <TipButton handleTip={handleTip} percentage={5} />
              <TipButton handleTip={handleTip} percentage={10} />
              <TipButton percentage={15} />
              <TipButton percentage={25} />
              <TipButton percentage={50} />
              <CustomInput />
            </div>
          </div>
          <div className="w-full">
            <h1 className=" mb-2 text-[#7f9c9f]">Number of People</h1>
            <Bill
              handleChange={handlePeople}
              img="src\assets\icon-person.svg"
              personSet={true}
            />
          </div>
          <Total totalBill={totalBill} handleReset={handleReset}></Total>
        </Container>
      </div>
    </>
  );
}

export default App;
