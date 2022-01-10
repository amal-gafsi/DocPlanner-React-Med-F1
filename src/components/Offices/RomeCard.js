import React from 'react'
import {Button} from 'react-bootstrap'

const RomeCard = () => {
    return (
      <div className="officeCard">
        <img
          scr="https://www.docplanner.com/images/rome.png"
          srcset="https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x"
        />
        <div>
          <p>Rome</p>
          <Button type="primary">SEE OPENINGS</Button>
        </div>
      </div>
    );
}

export default RomeCard
