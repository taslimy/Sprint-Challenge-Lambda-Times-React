import React from 'react';
import Card from './Card';
import { shape, string } from "prop-types";


const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map(card => <Card card={card} /> )}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  object: shape({
    headline: string.isRequired,
    tab: string.isRequired,
    img: string.isRequired,
    author: string.isRequired
  })
};

export default Cards;