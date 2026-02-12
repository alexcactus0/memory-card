import Menu from "./components/menu.jsx";
import Game from "./components/game.jsx";
import { Results } from "./components/score.jsx";
import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("menu");
  const [level, setLevel] = useState("easy");

  const [count, setCount] = useState(0);

  function resetScore() {
    setCount(0);
  }

  return (
    <div className="gameWrapper">
      {screen === "menu" && <Menu setScreen={setScreen} setLevel={setLevel} />}

      {screen === "game" && (
        <>
          <Game
            setScreen={setScreen}
            level={level}
            setIncreaseScore={setCount}
            resetScore={resetScore}
          />
          <Results count={count} />
        </>
      )}
    </div>
  );
}

export default App;
