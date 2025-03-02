import React from "react";

import "../App.css";
import iconMinus from '../assets/images/image/icon-minus.svg';


function ListComponent() {
  return (
    <>
        <div className="list_wrapper">
                <h2>What is the biggest challenge in  coding?</h2>
                <button className="button__icon" onClick={() => console.log('click')}>
                    <img src={iconMinus} alt="icon for open list item" />
                </button>
         </div>
         <p>I suppose coding is a hard action, but... you always can try something new and if you get unsuccess you can start it again. The biggest challenge in coding is solving complex problems and debugging errors, which require patience and logical thinking. However, every mistake is a learning opportunity, helping you grow and improve with each attempt. </p>
    </>
  );
}

export default ListComponent;
