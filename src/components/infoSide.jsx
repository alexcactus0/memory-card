import exMark from "../assets/exMark.svg";

function InfoSide({ setScreen, setLevel }) {
  return (
    <div className="infoCont">
      <header>
        <h3 className="spTitle">Spongebob</h3>
        <h1 className="memoryTitle">MEMORY GAME</h1>
        <Instructions />
        <DifficultyButtons setScreen={setScreen} setLevel={setLevel} />
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

function DifficultyButtons({ setScreen, setLevel }) {
  return (
    <div className="diffbutt">
      <div className="easyCont">
        <button
          onClick={() => (setScreen("game"), setLevel("easy"))}
          className="easy"
        >
          EASY
        </button>
      </div>
      <div className="mediumCont">
        <button
          onClick={() => (setScreen("game"), setLevel("medium"))}
          className="medium"
        >
          MEDIUM
        </button>
      </div>
      <div className="hardCont">
        <button
          onClick={() => (setScreen("game"), setLevel("hard"))}
          className="hard"
        >
          HARD
        </button>
      </div>
    </div>
  );
}

export { InfoSide };
