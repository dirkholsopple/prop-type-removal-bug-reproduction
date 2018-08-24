import React from 'react';
import PropTypes from 'prop-types';

const generateType = process.env.NODE_ENV !== "production" ? x => {
  return PropTypes.oneOf([x - 1, x, x + 1]);
} : {};;

export default class Component extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      'Hello world'
    );
  }
}
Component.propTypes = process.env.NODE_ENV !== "production" ? {
  prop: generateType(1)
} : {};