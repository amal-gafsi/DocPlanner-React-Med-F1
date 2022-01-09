import React from "react";
import WarsawCard from "./WarsawCard";
import BarcelonaCard from "./BarcelonaCard";
import IstanbulCard from "./IstanbulCard";
import RomeCard from "./RomeCard";
import BolognaCard from "./BolognaCard";
import CuritibiaCard from "./CuritibiaCard";
import MexicoCard from "./MexicoCard";

const Offices = () => {
  return (
    <section className="offices">
      <h3>Improve the lives of millions. Change yours forever</h3>
      <p>
        More than 3200 team mates share our same vision, goals and passion. With
        offices in Warsaw, Barcelona, Istanbul, Rome, Bologna, Mexico City and
        Curitiba, our search for great talent never stops.
      </p>
      <div>
        <WarsawCard />
        <BarcelonaCard />
        <IstanbulCard />
        <RomeCard />
        <BolognaCard />
        <CuritibiaCard />
        <MexicoCard />
      </div>
    </section>
  );
};

export default Offices;
