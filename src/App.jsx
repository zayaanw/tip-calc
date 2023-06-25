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
    e.target.value <= 0
      ? setBill({ ...totalBill, total: 0, finalbill: 0 })
      : setBill({
          ...totalBill,
          total: parseFloat(e.target.value),
          tip:
            parseFloat((e.target.value * tipPercentage).toFixed(2)) /
            totalPeople,
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
      tip: parseFloat((totalBill.total * converted).toFixed(2) / totalPeople),
      finalbill:
        (parseFloat(totalBill.total) +
          parseFloat(totalBill.total * converted)) /
        totalPeople,
    });
  };

  const handleCustomTip = (e) => {
    const converted = parseFloat(e.target.value) / 100;

    setPercentage(converted);

    setBill({
      ...totalBill,
      tip: parseFloat((totalBill.total * converted).toFixed(2) / totalPeople),
      finalbill:
        (parseFloat(totalBill.total) +
          parseFloat(totalBill.total * converted)) /
        totalPeople,
    });
  };

  const handlePeople = (e) => {
    e.target.value <= 0 ? setPeople(1) : setPeople(parseFloat(e.target.value));

    e.target.value <= 0
      ? setBill({ ...totalBill, tip: 0, finalbill: 0 })
      : setBill({
          ...totalBill,
          tip: parseFloat(totalBill.total * tipPercentage) / e.target.value,
          finalbill:
            (parseFloat(totalBill.total) +
              parseFloat(totalBill.total * tipPercentage)) /
            e.target.value,
        });
  };

  const handleReset = () => {
    setBill({ ...totalBill, total: 0, tip: 0, finalbill: 0 });
    setPeople(1);
    setPercentage(0);
  };

  return (
    <>
      <div className="md:mt-12 md:flex md:flex-col md:items-center md:justify-center md:gap-y-16">
        <Logo></Logo>
        <Container>
          <div className="w-full">
            <Bill
              title="Bill"
              handleChange={handleBill}
              img="src\assets\icon-dollar.svg"
              minimum={0}
              value={totalBill.total}
            />
          </div>
          <div className="w-full">
            <h1 className="mb-2 text-[#7f9c9f]">Select Tip %</h1>
            <div className="grid grid-flow-row grid-cols-2 grid-rows-3 gap-x-8 gap-y-4 md:mt-7 md:grid-cols-3 md:grid-rows-2">
              <TipButton handleTip={handleTip} percentage={5} />
              <TipButton handleTip={handleTip} percentage={10} />
              <TipButton handleTip={handleTip} percentage={15} />
              <TipButton percentage={25} />
              <TipButton percentage={50} />
              <CustomInput handleTip={handleCustomTip} />
            </div>
          </div>
          <div className="w-full md:self-center">
            <Bill
              title="Number of People"
              handleChange={handlePeople}
              img="src\assets\icon-person.svg"
              minimum={1}
              value={totalPeople}
            />
          </div>
          <Total totalBill={totalBill} handleReset={handleReset}></Total>
        </Container>
      </div>
    </>
  );
}

export default App;
