import React from 'react'
import {Button} from 'react-bootstrap'
 
const BolognaCard = () => {
    return (
      <div className="officeCard">
        <img
          scr="https://www.docplanner.com/images/bologna.png"
          srcset="https://www.docplanner.com/images/bologna.png 1x, https://www.docplanner.com/images/bologna@2x.png 2x"
        />
        <div>
          <p>Bologna</p>
          <Button type="primary">SEE OPENINGS</Button>
        </div>
      </div>
    );
}

export default BolognaCard
