function ShufflingModal() {
  return (
    <>
      <dialog dataModal open>
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
      <dialog dataModal open>
        <form method="dialog" className="loseModalForm" noValidate>
          <div className="loseText">
            <h2>YOU LOST! DONT CLICK THE SAME CARD!</h2>
          </div>
          <div className="winBtns">
            <button className="returnBtn">RETURN TO MENU</button>
            <button className="againBtn">PLAY AGAIN</button>
          </div>
        </form>
      </dialog>
    </>
  );
}

function WinModal() {
  return (
    <>
      <dialog dataModal open>
        <form method="dialog" className="winModalForm" noValidate>
          <div className="winText">
            <h2>CONGRATS, YOU WON!</h2>
          </div>
          <div className="winBtns">
            <button className="returnBtn">RETURN TO MENU</button>
            <button className="againBtn">PLAY AGAIN</button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export { ShufflingModal, LoseModal, WinModal };
