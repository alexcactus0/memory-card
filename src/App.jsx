import Menu from "./components/menu.jsx";
import Game from "./components/game.jsx";
import { Results } from "./components/score.jsx";
import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("menu");
  const [level, setLevel] = useState("easy");

  return (
    <div className="gameWrapper">
      {screen === "menu" && <Menu setScreen={setScreen} setLevel={setLevel} />}

      {screen === "game" && (
        <>
          <Game setScreen={setScreen} level={level} />
          <Results />
        </>
      )}
    </div>
  );
}

export default App;
