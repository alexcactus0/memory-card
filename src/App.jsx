import Menu from "./components/menu.jsx";
import Game from "./components/game.jsx";
import { Results } from "./components/score.jsx";
import { useState } from "react";

import { WinModal, LoseModal } from "./components/modals.jsx";

function App() {
  const [screen, setScreen] = useState("menu");
  const [level, setLevel] = useState("easy");

  const [count, setCount] = useState(0);

  const [winModal, setWinModal] = useState(false);
  const [loseModal, setLoseModal] = useState(false);

  function resetScore() {
    setCount(0);
  }

  return (
    <div className={`gameWrapper ${screen}`}>
      {screen === "menu" && <Menu setScreen={setScreen} setLevel={setLevel} />}

      {screen === "game" && (
        <>
          <Game
            setScreen={setScreen}
            level={level}
            setIncreaseScore={setCount}
            resetScore={resetScore}
            setWinModal={setWinModal}
            setLoseModal={setLoseModal}
          />
          <Results count={count} />
          {winModal && (
            <>
              <WinModal setScreen={setScreen} setWinModal={setWinModal} />
              <div className="overlay show"></div>
            </>
          )}
          {loseModal && (
            <>
              <LoseModal setScreen={setScreen} setLoseModal={setLoseModal} />
              <div className="overlay show"></div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
