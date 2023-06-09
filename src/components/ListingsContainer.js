import React, { useEffect, useState } from "react";
// import ListingCard from "./ListingCard";
import ListingCard from "./ListingCard";

function ListingsContainer({search}) {
  const [cards, setCards] = useState([])

  console.log(search)
  useEffect(()=>{
  fetch("http://localhost:6001/listings")
  .then(res=> res.json())
  .then((cards) => setCards(cards))
  },[])

  function DeleteCard(deletedcard){
   
    const updatedCards = cards.filter((card)=>
      {return (card.id !== deletedcard.id)}
    )
    setCards(updatedCards)
  }

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
       { cards.filter((card)=>{
        if(card.description.toLowerCase().includes(search.toLowerCase())){
          return card
        }else if(card.description === ""){
          return card
        }
        return card
        
       })
       .map((card) => 
        <ListingCard key = {card.id} card = {card} onhandDelete={DeleteCard}/>
        )}
        
      </ul>
    </main>
  );
}

export default ListingsContainer;
