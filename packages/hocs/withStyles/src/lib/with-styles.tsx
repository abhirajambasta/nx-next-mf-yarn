import React from 'react';

const withStyles = <P extends {}>(
  Component: React.ComponentType<P>,
) => (styles: object, className: string = '') => (props: P) => (
  <>
    {styles}
    <Component {...props} className={className} />
  </>
);

export default withStyles;