import React from 'react';
export const Aux = props => {
  if (props.name) {
    return <div id={props.name}>{props.children}</div>;
  } else {
    return props.children;
  }
};
