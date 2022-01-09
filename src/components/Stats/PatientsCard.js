import React from 'react'

const PatientsCard = () => {
    return (
      <div className="patientsCard">
        <img
          scr="https://www.docplanner.com/img/patients.png"
          srcset="https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x"
        />
        <h4>64 mln patients</h4>
        <p>visit our websites each month</p>
      </div>
    );
}

export default PatientsCard
