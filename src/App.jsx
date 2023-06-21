import "./App.css";
import TipButton from "./components/TipButton";
import Logo from "./components/Logo";
import Container from "./components/Container";

function App() {
  return (
    <>
      <div>
        <Logo></Logo>
        <Container>
          <h1 className="mx-4 my-4">Bill</h1>
          <h1 className="mx-4 my-4">Select Tip %</h1>
          <TipButton />
        </Container>
      </div>
    </>
  );
}

export default App;
