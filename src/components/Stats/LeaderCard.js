import React from 'react'

const LeaderCard = () => {
    return (
      <div className="leaderCard">
        <img
          scr="https://www.docplanner.com/img/flag.png"
          srcset="https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x"
        />
        <h4>Leader in 12 countries</h4>
        <p>
          Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech
          Republic, Portugal, Argentina, Peru and Chile
        </p>
      </div>
    );
}

export default LeaderCard
