import React from "react";

import "../App.css";
import IconMinus from "./IconMinus";
import IconPlus from "./IconPlus";

function AccordionButton({ onClick, isOpen }) {
  return (
    <button className="button__icon" onClick={onClick}>{isOpen ? <IconMinus /> : <IconPlus />}</button>
  );
}

export default AccordionButton;
