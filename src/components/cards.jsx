function Card({ className, charName, text }) {
  return (
    <div className={className}>
      <div className={charName}></div>
      <div className="charName">
        <p>{text}</p>
      </div>
    </div>
  );
}

function EasyCards() {
  return (
    <>
      <Card
        className={"charPatrickCont"}
        charName={"charPatrick"}
        text={"PATRICK"}
      />
      <Card className={"charSandyCont"} charName={"charSandy"} text={"SANDY"} />
      <Card
        className={"charKrabsCont"}
        charName={"charKrabs"}
        text={"MR. KRABS"}
      />
      <Card
        className={"charSpongeCont"}
        charName={"charSponge"}
        text={"SPONGEBOB"}
      />
    </>
  );
}

function MeduimCards() {
  return (
    <>
      <Card
        className={"charPatrickCont"}
        charName={"charPatrick"}
        text={"PATRICK"}
      />
      <Card className={"charSandyCont"} charName={"charSandy"} text={"SANDY"} />
      <Card
        className={"charKrabsCont"}
        charName={"charKrabs"}
        text={"MR. KRABS"}
      />
      <Card
        className={"charSpongeCont"}
        charName={"charSponge"}
        text={"SPONGEBOB"}
      />
      <Card
        className={"charSquidCont"}
        charName={"charSquid"}
        text={"SQUIDWARD"}
      />
    </>
  );
}

function HardCards() {
  return (
    <>
      <Card
        className={"charPatrickCont"}
        charName={"charPatrick"}
        text={"PATRICK"}
      />
      <Card className={"charSandyCont"} charName={"charSandy"} text={"SANDY"} />
      <Card
        className={"charKrabsCont"}
        charName={"charKrabs"}
        text={"MR. KRABS"}
      />
      <Card
        className={"charSpongeCont"}
        charName={"charSponge"}
        text={"SPONGEBOB"}
      />
      <Card
        className={"charSquidCont"}
        charName={"charSquid"}
        text={"SQUIDWARD"}
      />
      <Card
        className={"charGaryCont"}
        charName={"charGary"}
        text={"SANDY GARY"}
      />
    </>
  );
}

export { EasyCards, MeduimCards, HardCards };
