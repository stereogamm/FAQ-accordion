import React from "react";

import "../App.css";
import AccordionButton from "./AccordionButton";
import data from "./data";

function ListComponent({ openIndex, onClick }) {
  
  return (
    <>
      {data.map((item, index) => {
        const isOpen = openIndex === index;
        const headerId = `accordion-header-${index}`;
        const contentId = `accordion-content-${index}`;

        return (
          <div key={index} className="list_item">
            <div className="list_wrapper">
              <h2 id={headerId} tabIndex="0">{item.header}</h2>
              <AccordionButton
                isOpen={openIndex === index}
                onClick={() => onClick(index)}
                aria-expanded={isOpen}
                aria-controls={contentId}
              />
            </div>
            <p
              role="region"
              aria-labelledby={headerId}
              id={contentId}
              className={openIndex === index ? "visibleItem" : "hiddenItem"}
            >
              {item.text}
            </p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ListComponent;
