import React from 'react';
import Loader from 'components/Loader';
import * as ErrorComponent from 'components/Error';

export default Component => (props, context) => {
  const { className, loading, error, ...rest } = props;
  return loading ? (
    <Loader className={className} />
  ) : error ? (
    <ErrorComponent className={className} />
  ) : (
    <Component className={className} {...rest} />
  );
};
