import { InfoSide } from "./infoSide";
import { Results } from "./score";

function Menu({ setScreen, setLevel }) {
  return (
    <div className="menu">
      <InfoSide setScreen={setScreen} setLevel={setLevel} />
      <Results />
    </div>
  );
}

export default Menu;
