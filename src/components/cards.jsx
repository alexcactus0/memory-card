import { useState } from "react";
import { ShufflingModal } from "./modals";

function Card({ className, charName, text, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <div className={charName}></div>
      <div className="charName">
        <p>{text}</p>
      </div>
    </div>
  );
}

function shuffleArray(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const BASE_CARDS = [
  {
    id: 1,
    className: "charPatrickCont",
    charName: "charPatrick",
    text: "PATRICK",
  },
  { id: 2, className: "charSandyCont", charName: "charSandy", text: "SANDY" },
  {
    id: 3,
    className: "charKrabsCont",
    charName: "charKrabs",
    text: "MR. KRABS",
  },
  {
    id: 4,
    className: "charSpongeCont",
    charName: "charSponge",
    text: "SPONGEBOB",
  },
  {
    id: 5,
    className: "charSquidCont",
    charName: "charSquid",
    text: "SQUIDWARD",
  },
  {
    id: 6,
    className: "charGaryCont",
    charName: "charGary",
    text: "SANDY GARY",
  },
];

const EASY_CARDS = BASE_CARDS.slice(0, 4);
const MEDIUM_CARDS = BASE_CARDS.slice(0, 5);
const HARD_CARDS = BASE_CARDS.slice(0, 6);

function EasyCards({
  setIncreaseScore,
  resetScore,
  setWinModal,
  setLoseModal,
}) {
  const [cards, setCards] = useState(EASY_CARDS);
  const [clickedIds, setClickedIds] = useState([]);

  const [isShuffling, setIsShuffling] = useState(false);

  function handleCardClick(id) {
    setIncreaseScore((prev) => prev + 1);
    setClickedIds((prevClicked) => {
      if (prevClicked.includes(id)) {
        setLoseModal(true);
        resetScore();
        return [];
      }

      const newClicked = [...prevClicked, id];

      if (newClicked.length === cards.length) {
        setWinModal(true);
        resetScore();
        return [];
      }

      return newClicked;
    });

    setIsShuffling(true);

    setTimeout(() => {
      setCards((prevCards) => shuffleArray(prevCards));
      setIsShuffling(false);
    }, 700);
  }

  return (
    <>
      <div className={`cardsGrid ${isShuffling ? "shuffling" : ""}`}>
        {cards.map((card) => (
          <Card
            key={card.id}
            className={card.className}
            charName={card.charName}
            text={card.text}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
      {isShuffling && (
        <>
          <ShufflingModal />
          <div className="overlay show"></div>
        </>
      )}
    </>
  );
}

function MediumCards({
  setIncreaseScore,
  resetScore,
  setWinModal,
  setLoseModal,
}) {
  const [cards, setCards] = useState(MEDIUM_CARDS);
  const [clickedIds, setClickedIds] = useState([]);

  const [isShuffling, setIsShuffling] = useState(false);

  function handleCardClick(id) {
    setIncreaseScore((prev) => prev + 1);
    setClickedIds((prevClicked) => {
      if (prevClicked.includes(id)) {
        setLoseModal(true);
        resetScore();
        return [];
      }

      const newClicked = [...prevClicked, id];

      if (newClicked.length === cards.length) {
        setWinModal(true);
        resetScore();
        return [];
      }

      return newClicked;
    });

    setIsShuffling(true);

    setTimeout(() => {
      setCards((prevCards) => shuffleArray(prevCards));
      setIsShuffling(false);
    }, 700);
  }

  return (
    <>
      <div className={`cardsGrid ${isShuffling ? "shuffling" : ""}`}>
        {cards.map((card) => (
          <Card
            key={card.id}
            className={card.className}
            charName={card.charName}
            text={card.text}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
      {isShuffling && (
        <>
          <ShufflingModal />
          <div className="overlay show"></div>
        </>
      )}
    </>
  );
}

function HardCards({
  setIncreaseScore,
  resetScore,
  setWinModal,
  setLoseModal,
}) {
  const [cards, setCards] = useState(HARD_CARDS);
  const [clickedIds, setClickedIds] = useState([]);

  const [isShuffling, setIsShuffling] = useState(false);

  function handleCardClick(id) {
    setIncreaseScore((prev) => prev + 1);
    setClickedIds((prevClicked) => {
      if (prevClicked.includes(id)) {
        setLoseModal(true);
        resetScore();
        return [];
      }

      const newClicked = [...prevClicked, id];

      if (newClicked.length === cards.length) {
        setWinModal(true);
        resetScore();
        return [];
      }

      return newClicked;
    });

    setIsShuffling(true);

    setTimeout(() => {
      setCards((prevCards) => shuffleArray(prevCards));
      setIsShuffling(false);
    }, 700);
  }

  return (
    <>
      <div className={`cardsGrid ${isShuffling ? "shuffling" : ""}`}>
        {cards.map((card) => (
          <Card
            key={card.id}
            className={card.className}
            charName={card.charName}
            text={card.text}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
      {isShuffling && (
        <>
          <ShufflingModal />
          <div className="overlay show"></div>
        </>
      )}
    </>
  );
}

export { EasyCards, MediumCards, HardCards };
