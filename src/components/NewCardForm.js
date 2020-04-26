import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "smiling_face_with_three_hearts", "zany", "eyes", "sparkles", "sunflower", "seedling", "cherry_blossom", "beer", "clap", "heart", "sparkling_heart", "heart_eyes_cat", "dog", "sob", "fu", "hugs", "partying", "star_struck", "sunglasses", "space_invader", "brain", "takeout_box", "nerd_face", "fire", "rainbow", "mask"];

const NewCardForm = ({ onPostCardCallback }) => {
  
  const [card, setCard] = useState({
    text: "",
    emoji: ""
  });

  const onInputChange = (event) => {
    const newCard = {
      ...card
    };

    newCard[event.target.name] = event.target.value;
    setCard(newCard);
  };

  const emojiOptions = (emojiList) => {
    const emojis = [];

    for (let i = 1; i < emojiList.length; i++) {
      emojis.push(<option value={emojiList[i]}>{emoji.getUnicode(emojiList[i])}</option>);
    };
    
    return emojis;
  };

  return (
    <form className="new-card-form" onSubmit={() => onPostCardCallback(card)}>
      <div className="new-card-form__header"></div>
      <div className="new-card-form__form">
        <label className="new-card-form__form-label" htmlFor="text">text</label>
        <input 
          className="new-card-form__form-textarea" 
          type="text" 
          name="text"
          placeholder="text" 
          value={card.text}
          onChange={onInputChange}
        />
        <label className="new-card-form__form-label" htmlFor="emoji">emoji</label>
        <select 
          className="new-card-form__form-select"  
          name="emoji"
          value={card.emoji}
          onChange={onInputChange} >
            <option value={EMOJI_LIST[0]}>Select an Emoji!</option>
            {emojiOptions(EMOJI_LIST)}
        </select>
        <input type="submit" className="new-card-form__form-button" value="Post a Card"/>
      </div>
    </form>
  );
};

NewCardForm.propTypes = {
  onPostCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;