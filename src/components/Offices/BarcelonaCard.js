import React from 'react'
import {Button} from 'react-bootstrap'

const BarcelonaCard = () => {
    return (
      <div className="officeCard">
        <img
          scr="https://www.docplanner.com/images/barcelona.png"
          srcset="https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x"
        />
        <div>
          <p>Barcelona</p>
          <Button type="primary">SEE OPENINGS</Button>
        </div>
      </div>
    );
}

export default BarcelonaCard
