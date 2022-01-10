import React from 'react'
import {Button} from 'react-bootstrap'

const MexicoCard = () => {
    return (
      <div className="officeCard">
        <img
          scr="https://www.docplanner.com/images/mexico-city.png"
          srcset="https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x"
        />
        <div>
          <p>Mexico City</p>
          <Button type="primary">SEE OPENINGS</Button>
        </div>
      </div>
    );
}

export default MexicoCard
