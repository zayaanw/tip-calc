import "./App.css";
import TipButton from "./components/TipButton";
import Logo from "./components/Logo";
import Container from "./components/Container";
import Bill from "./components/Bill";
import Total from "./components/Total";
import CustomInput from "./components/CustomInput";

function App() {
  return (
    <>
      <div>
        <Logo></Logo>
        <Container>
          <div className="w-full">
            <h1 className="mb-2 text-[#7f9c9f]">Bill</h1>
            <Bill img="src\assets\icon-dollar.svg" />
          </div>
          <div className="w-full">
            <h1 className="mb-2 text-[#7f9c9f]">Select Tip %</h1>
            <div className="grid grid-flow-row grid-cols-2 grid-rows-3 gap-x-8 gap-y-4">
              <TipButton percentage={5} />
              <TipButton percentage={10} />
              <TipButton percentage={15} />
              <TipButton percentage={25} />
              <TipButton percentage={50} />
              <CustomInput />
            </div>
          </div>
          <div className="w-full">
            <h1 className=" mb-2 text-[#7f9c9f]">Number of People</h1>
            <Bill img="src\assets\icon-person.svg" />
          </div>
          <Total></Total>
        </Container>
      </div>
    </>
  );
}

export default App;
