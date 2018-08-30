import React from 'react';
import PropTypes from 'prop-types';

const generateType = (x) => {
  return PropTypes.oneOf([x-1, x, x+1]);
};

const wrapComponent = (Component) => {
  return class OuterComponent extends React.Component {
    static propTypes = {
      prop: generateType(1)
    }
    render() {
      return (
        <Component />
      );
    }
  };
};

export default wrapComponent;
