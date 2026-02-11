import Menu from "./components/menu.jsx";
import Game from "./components/game.jsx";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <>
      {!isGameStarted ? <Menu setIsGameStarted={setIsGameStarted} /> : <Game />}
    </>
  );
}

export default App;
