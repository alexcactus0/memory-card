function Results() {
  return <Score />;
}

function Score() {
  return (
    <div className="resultsSide">
      <aside className="gameScoreWrapper">
        <div className="gameScore">
          <div className="scoreCont">
            <p>SCORE: 0</p>
          </div>
          <div className="scoreLine"></div>
          <div className="bestScoreCont">
            <p>BEST SCORE: 0</p>
          </div>
        </div>
      </aside>
      <footer>
        <p>
          BUILT AND MAINTAINED <br /> BY <mark>ALEXCACTUS0</mark>
        </p>
      </footer>
    </div>
  );
}

export { Results };
