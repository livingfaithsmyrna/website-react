/*
From: https://fontawesome.com/docs/web/use-with/react/
To use FontAwesome FREE icons styles with react, install the following packages
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/react-fontawesome@latest

Simplest way to do it
https://dev.to/sobhandash/how-to-simply-use-font-awesome-6-in-react-1bm8
*/

import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Button.css'

const Button = (props) => {
  library.add(faPodcast)
  return (
      <button
        type={props.type || "button"}
        className={"button"}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        <span className={"button__text"}>{props.text}</span>
        <span className={"button__icon"}>
          <FontAwesomeIcon icon={props.icon} />
        </span>
      </button>
  );
}

export default Button;
