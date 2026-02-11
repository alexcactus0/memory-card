import exMark from "../assets/exMark.svg";

function InfoSide({ setIsGameStarted }) {
  return (
    <div className="infoCont">
      <header>
        <h3 className="spTitle">Spongebob</h3>
        <h1 className="memoryTitle">MEMORY GAME</h1>
        <Instructions />
        <DifficultyButtons setIsGameStarted={setIsGameStarted} />
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

function DifficultyButtons({ setIsGameStarted }) {
  return (
    <div className="diffbutt">
      <div className="easyCont">
        <button onClick={() => setIsGameStarted(true)} className="easy">
          EASY
        </button>
      </div>
      <div className="mediumCont">
        <button onClick={() => setIsGameStarted(true)} className="medium">
          MEDIUM
        </button>
      </div>
      <div className="hardCont">
        <button onClick={() => setIsGameStarted(true)} className="hard">
          HARD
        </button>
      </div>
    </div>
  );
}

export { InfoSide };
