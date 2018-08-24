import React from 'react';
import PropTypes from 'prop-types';

const generateType = (x) => {
  return PropTypes.oneOf([x-1, x, x+1]);
};

export default class Component extends React.Component {
  render() {
    return <div>Hello world</div>;
  }
}
Component.propTypes = {
  prop: generateType(1)
};
