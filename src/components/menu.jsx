import { InfoSide } from "./infoSide";
import { Results } from "./score";

function Menu({ setIsGameStarted }) {
  return (
    <div className="menu">
      <InfoSide setIsGameStarted={setIsGameStarted} />
      <Results />
    </div>
  );
}

export default Menu;
