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
          <TipButton />
        </Container>
      </div>
    </>
  );
}

export default App;
