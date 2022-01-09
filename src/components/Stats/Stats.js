import React from "react";
import AppointmentsCard from "./AppointmentsCard";
import LeaderCard from "./LeaderCard";
import PatientsCard from "./PatientsCard";
import DoctorsCard from "./DoctorsCard";
import "./Stats.css";

const Stats = () => {
  return (
    <section className="stats">
      <div className="statsOne">
        <h3>
          The world's biggest
          <br />
          healthcare platform
        </h3>
        <p>
          We work from 7 offices all over the world, bringing Docplanner Group
          to life in a dozen countries.
        </p>
        <img
          src="https://www.docplanner.com/img/logo.png"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="statsTwo">
        <LeaderCard />
        <AppointmentsCard />
        <PatientsCard />
        <DoctorsCard />
      </div>
    </section>
  );
};

export default Stats;
