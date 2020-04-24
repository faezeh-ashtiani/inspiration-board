import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"];

const NewCardForm = (/*onPostCardCallback*/) => {
  const [card, setCard] = useState({
    text: "",
    emoji: ""
  });

// TODO: Helper function to handle emoji input

  const onInputChange = (event) => {

    const newCard = {
      ...card
    }

    newCard[event.target.name] = event.target.value;
    setCard(newCard);
  }

// so we need a prop sent from Board called onPostCardCallback, which will be our axios post helper function

  return (
    <form className="new-card-form">
      <div className="new-card-form__header">
        <span>Post a Card</span>
      </div>
      <div className="new-card-form__form">
        {/* <label className="new-card-form__form-label" htmlFor=""></label> */}
        <input 
          className="new-card-form__form-textarea" 
          type="text" 
          name="text"
          placeholder="text" 
          value={card.text}
          onChange={onInputChange}
        />
        <input 
          className="new-card-form__form-textarea" 
          type="text" 
          name="emoji"
          placeholder="emoji" 
          value={card.emoji}
          onChange={onInputChange}
        />
        <input type='submit' className="new-card-form__form-button" value='Submit'/>
      </div>
    </form>
      

  );
}

export default NewCardForm;