import React, {useState} from "react";

function Item({ name, category }) {

  const [isAdded, setIsAdded]=useState(false)

  function handleClick(event){
event.target.parentElement.className='in-cart'
    setIsAdded(!isAdded)
  
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"
      onClick={handleClick}>{isAdded?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
