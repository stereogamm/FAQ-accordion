import React from "react";

import "../App.css";
import AccordionButton from "./AccordionButton";
import data from "./data";

function ListComponent({ openIndex, onClick }) {
 return (
    <>
    {data.map((item, index) => (
      <div key={index} className="list_item">
        <div className="list_wrapper">
          <h2>{item.header}</h2>
          <AccordionButton 
            isOpen={openIndex === index}
            onClick={() => onClick(index)}
          />
        </div>
        <p className={openIndex === index ? "visibleItem" : "hiddenItem"}>
          {item.text}
        </p>
        <hr />
      </div>
    ))}
  </>
 )
}

export default ListComponent;
