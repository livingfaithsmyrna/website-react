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
import { faPodcast, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Button.css'

const Button = (props) => {
  library.add(faPodcast)
  library.add(faExternalLinkAlt)

  const themeName = props.theme;

  return (
      <button
        type={"button"}
        className={`button button-${themeName}`}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        <span className={`button__text-${themeName}`}>{props.text}</span>
        <span className={`button__icon-${themeName}`}>
          <FontAwesomeIcon icon={props.icon} />
        </span>
      </button>
  );
}

export default Button;
