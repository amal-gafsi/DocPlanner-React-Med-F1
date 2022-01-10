import React from 'react'
import {Button} from 'react-bootstrap'

const IstanbulCard = () => {
    return (
      <div className="officeCard">
        <img
          scr="https://www.docplanner.com/images/istanbul.png"
          srcset="https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x"
        />
        <div>
          <p>Istanbul</p>
          <Button type="primary">SEE OPENINGS</Button>
        </div>
      </div>
    );
}

export default IstanbulCard
