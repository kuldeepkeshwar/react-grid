import React from 'react';

export default (Component, baseProps) => {
  return props => <Component {...baseProps} {...props} />;
};
