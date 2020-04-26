import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]; // TODO: Add a drop-down menu for the user to select an emoji

const NewCardForm = ({ onPostCardCallback }) => {
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

  return (
    <form className="new-card-form" onSubmit={() => onPostCardCallback(card)}>
      <div className="new-card-form__header">
        {/* <span>Post a Card</span> */}
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
        <select 
          className="new-card-form__form-select"  
          name="emoji"
          value={card.emoji}
          onChange={onInputChange}
         >
           <option value={EMOJI_LIST[0]}>Select an Emoji!</option>
           <option value={EMOJI_LIST[1]}>{emoji.getUnicode('heart_eyes')}</option>
           <option value={EMOJI_LIST[2]}>{emoji.getUnicode('beer')}</option>
           <option value={EMOJI_LIST[3]}>{emoji.getUnicode('clap')}</option>
           <option value={EMOJI_LIST[4]}>{emoji.getUnicode('sparkling_heart')}</option>
           <option value={EMOJI_LIST[5]}>{emoji.getUnicode('heart_eyes_cat')}</option>
           <option value={EMOJI_LIST[6]}>{emoji.getUnicode('dog')}</option>
         </select>
        <input type='submit' className="new-card-form__form-button" value='Post a Card'/>
      </div>
    </form>
      

  );
}

NewCardForm.propTypes = {
  onPostCardCallback: PropTypes.func.isRequired
}

export default NewCardForm;