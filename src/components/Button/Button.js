/*
From: https://fontawesome.com/docs/web/use-with/react/
To use FontAwesome FREE icons styles with react, install the following packages
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/react-fontawesome@latest

*/

import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from '@fortawesome/fontawesome-svg-core/import.macro'
import './Button.css'

const Button = (props) => {
  const buttonIcon = icon({name: 'podcast'})

  return (
      <button
        type={props.type || "button"}
        className={"button"}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        <span className={"button__text"}>{props.text}</span>
        <span className={"button__icon"}>
          <FontAwesomeIcon icon={buttonIcon} />
        </span>
      </button>
  );
}

export default Button;
