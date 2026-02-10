import exMark from "../assets/exMark.svg";

function InfoSide() {
  return (
    <div className="infoCont">
      <header>
        <h3 className="spTitle">Spongebob</h3>
        <h1 className="memoryTitle">MEMORY CARD</h1>
        <Instructions />
        <DifficultyButtons />
      </header>
    </div>
  );
}

function Instructions() {
  return (
    <div className="instructions">
      <div className="inText">
        Click every Card but <br />
        <span className="inHighlight">never the</span> same one twice!
      </div>
      <div className="exMark">
        <img src={exMark} alt="Exclamation Mark" />
      </div>
    </div>
  );
}

function DifficultyButtons() {
  return (
    <div className="diffbutt">
      <div className="easyCont">
        <button className="easy">Easy</button>
      </div>
      <div className="mediumCont">
        <button className="medium">Medium</button>
      </div>
      <div className="hardCont">
        <button className="hard">Hard</button>
      </div>
    </div>
  );
}

export { InfoSide };
