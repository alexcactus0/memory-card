function ShufflingModal() {
  return (
    <>
      <dialog className="shufDialog" dataModal open>
        <form method="dialog" className="shufModalForm" noValidate>
          <div className="shufText">
            <h1>SHUFFLING...</h1>
          </div>
        </form>
      </dialog>
    </>
  );
}

function LoseModal() {
  return (
    <>
      <dialog className="loseDialog" dataModal open>
        <form method="dialog" className="loseModalForm" noValidate>
          <div className="loseTitle">
            <h2>YOU LOST!</h2>
          </div>
          <div className="loseText">
            <h2>DON'T CLICK THE SAME CARD TWICE!</h2>
          </div>
          <div className="loseBtns">
            <div className="loseWrapper">
              <button className="returnBtn">RETURN TO MENU</button>
              <button className="againBtn">PLAY AGAIN</button>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
}

function WinModal() {
  return (
    <>
      <dialog className="winDialog" dataModal open>
        <form method="dialog" className="winModalForm" noValidate>
          <div className="winTitle">
            <h2>CONGRATS, YOU WON!</h2>
          </div>
          <div className="winText">
            <h2>
              GREAT JOB! YOU CLEARED THE <br /> BOARD.
            </h2>
          </div>
          <div className="winBtns">
            <div className="winWrapper">
              <button className="returnBtn">RETURN TO MENU</button>
              <button className="againBtn">PLAY AGAIN</button>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
}

export { ShufflingModal, LoseModal, WinModal };
