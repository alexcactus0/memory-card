import { EasyCards, MediumCards, HardCards } from "./cards";
import returnArrow from "../assets/returnArrow.svg";

function Game({ setScreen, level }) {
  return (
    <div className="game">
      <nav className="returnToMenu">
        <div className="returnContWrapper">
          <div className="returnArrow" onClick={() => setScreen("menu")}>
            <img src={returnArrow} alt="Return to Menu Arrow" />
          </div>
          <div className="returnTextWrapper">
            <p>MEMORY GAME</p>
          </div>
        </div>
      </nav>
      <div className="cardsCont">
        {level === "easy" ? (
          <EasyCards />
        ) : level === "medium" ? (
          <MediumCards />
        ) : (
          <HardCards />
        )}
      </div>
    </div>
  );
}

export default Game;
