import React from "react";
import CardClinic from "./Cards/CardClinic";
import CardDoctor from "./Cards/CardDoctor";
import CardPatient from "./Cards/CardPatient";
import Introduction from "./Introduction/Introduction";
import Offices from "./Offices/Offices";
import Sponsor from "./sponsor/Sponsor";
import Stats from "./Stats/Stats";

const Main = () => {
  return (
    <div>
      <Introduction />
      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0% 14%",
        }}
      >
        <CardPatient />
        <CardDoctor />
        <CardClinic />
      </section>
      <Sponsor />
      <Stats />
      <Offices />
    </div>
  );
};

export default Main;
