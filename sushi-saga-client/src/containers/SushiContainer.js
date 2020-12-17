import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, handleButton, handleClick, eatenSushis}) => {
  return (
    <Fragment>
      <div className="belt">
        {sushis.map(sushi => <Sushi
          sushi={sushi}
          handleClick={handleClick}
          isEaten={eatenSushis.includes(sushi)}
        />)}
        <MoreButton handleButton={handleButton} />
      </div>
    </Fragment>
  )
}

export default SushiContainer