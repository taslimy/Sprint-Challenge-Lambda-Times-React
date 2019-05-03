import React from 'react';
import { shape, string } from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  object: shape({
    headline: string.isRequired,
    tab: string.isRequired,
    img: string.isRequired,
    author: string.isRequired
  })
};

export default Card;
