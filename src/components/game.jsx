function InfoSide() {
  return (
    <div className="infoCont">
      <header>
        <h3 className="spTitle">Spongebob</h3>
        <h1 className="memoryTitle">MEMORY CARD</h1>
        <Instructions />
      </header>
    </div>
  );
}

function Instructions() {
  return (
    <div className="instructions">
      Click every Card but <br /> <span className="inHighlight">never the</span>{" "}
      same one twice!
    </div>
  );
}

export { InfoSide };
