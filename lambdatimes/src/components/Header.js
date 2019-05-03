import React from 'react';
import moment from 'moment'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <div className="header">
      <span className="date">{moment().format('LL')}</span>
      <h1>Lambda Times</h1>
      <span className="temp">98°</span>
    </div>
  )
}

export default Header