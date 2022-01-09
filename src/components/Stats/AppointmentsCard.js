import React from 'react'

const appointmentsCard = () => {
    return (
      <div className="appointmentsCard">
        <img
          scr="https://www.docplanner.com/img/visits.png"
          srcset="https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x"
        />
        <h4>7 million appointments</h4>
        <p>booked last month</p>
      </div>
    );
}

export default appointmentsCard
