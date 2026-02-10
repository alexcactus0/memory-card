import exMark from "../assets/exMark.svg";
import { useState } from "react";

function InfoSide() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <div className="infoCont">
      <header>
        {isVisible && (
          <>
            <h3 className="spTitle">Spongebob</h3>
            <h1 className="memoryTitle">MEMORY GAME</h1>
            <Instructions />
            <DifficultyButtons
              handleEasy={handleClick}
              handleMedium={handleClick}
              handleHard={handleClick}
            />
          </>
        )}
      </header>
    </div>
  );
}

function Instructions() {
  return (
    <div className="instCont">
      <div className="instructions">
        <div className="inText">
          <p>
            Click every card but, <br />
            <mark> never the </mark>same one twice!
          </p>
        </div>
        <div className="exMark">
          <img src={exMark} alt="Exclamation Mark" />
        </div>
      </div>
    </div>
  );
}

function DifficultyButtons({ handleEasy, handleMedium, handleHard }) {
  return (
    <div className="diffbutt">
      <div className="easyCont">
        <button onClick={handleEasy} className="easy">
          EASY
        </button>
      </div>
      <div className="mediumCont">
        <button onClick={handleMedium} className="medium">
          MEDIUM
        </button>
      </div>
      <div className="hardCont">
        <button onCanPlay={handleHard} className="hard">
          HARD
        </button>
      </div>
    </div>
  );
}

export { InfoSide };
