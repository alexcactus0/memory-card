function Results({ count }) {
  return (
    <>
      <Score count={count} />
      <Footer />
    </>
  );
}

function Score({ count }) {
  return (
    <aside className="gameScoreWrapper">
      <div className="gameScore">
        <div className="scoreCont">
          <p>SCORE: {count || 0}</p>
        </div>
        <div className="scoreLine"></div>
        <div className="bestScoreCont">
          <p>BEST SCORE: 6</p>
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
