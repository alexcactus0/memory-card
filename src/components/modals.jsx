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

export { ShufflingModal };
