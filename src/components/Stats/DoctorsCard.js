import React from 'react'

const DoctorsCard = () => {
    return (
      <div className="doctorsCard">
        <img
          scr="https://www.docplanner.com/img/doctors.png"
          srcset="https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x"
        />
        <h4>109k active doctors</h4>
        <p>trust our solutions</p>
      </div>
    );
}

export default DoctorsCard
