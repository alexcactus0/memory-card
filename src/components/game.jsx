import { EasyCards, MediumCards, HardCards } from "./cards";
import returnArrow from "../assets/returnArrow.svg";

function Game({
  setScreen,
  level,
  setIncreaseScore,
  resetScore,
  setWinModal,
  setLoseModal,
}) {
  return (
    <>
      <nav className="returnToMenu">
        <div className="returnContWrapper">
          <div
            className="returnArrow"
            onClick={() => (setScreen("menu"), resetScore())}
          >
            <img src={returnArrow} alt="Return to Menu Arrow" />
          </div>
          <div className="returnTextWrapper">
            <p>MEMORY GAME</p>
          </div>
        </div>
      </nav>
      {level === "easy" ? (
        <EasyCards
          key={level}
          setIncreaseScore={setIncreaseScore}
          resetScore={resetScore}
          setWinModal={setWinModal}
          setLoseModal={setLoseModal}
        />
      ) : level === "medium" ? (
        <MediumCards
          key={level}
          setIncreaseScore={setIncreaseScore}
          resetScore={resetScore}
        />
      ) : (
        <HardCards
          key={level}
          setIncreaseScore={setIncreaseScore}
          resetScore={resetScore}
        />
      )}
    </>
  );
}

export default Game;
