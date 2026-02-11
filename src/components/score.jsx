function Results() {
  return (
    <>
      <Score />
      <Footer />
    </>
  );
}

function Score() {
  return (
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
  );
}

function Footer() {
  return (
    <>
      <footer>
        <p>
          BUILT AND MAINTAINED <br /> BY <mark>ALEXCACTUS0</mark>
        </p>
      </footer>
    </>
  );
}

export { Results };
