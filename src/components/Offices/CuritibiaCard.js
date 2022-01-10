import React from 'react'
import {Button} from 'react-bootstrap'

const CuritibiaCard = () => {
    return (
      <div className="officeCard">
        <img
          scr="https://www.docplanner.com/images/curitiba.png"
          srcset="https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x"
        />
        <div>
          <p>Curitibia</p>
          <Button type="primary">SEE OPENINGS</Button>
        </div>
      </div>
    );
}

export default CuritibiaCard
