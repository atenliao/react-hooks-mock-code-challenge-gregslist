import React, { useState } from "react";

function ListingCard({card, onhandDelete}) {
  const {id, description, image, location} = card;
  const [isEmojiClick, setIsEmojiClick] = useState(false)

  function handleEmojiClick(){
    
    setIsEmojiClick(!isEmojiClick)
  }

  function handleDeleteCard(){
    fetch(`http://localhost:6001/listings/${id}`,{
      method:"DELETE",
      
    })
    .then(res=> res.json())
    .then(()=>onhandDelete(card))
    
  }

  return (
    <li className="card">
      <div className="image" id = {id}>
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isEmojiClick ? (
          <button className="emoji-button favorite active" onClick={handleEmojiClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleEmojiClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteCard}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
