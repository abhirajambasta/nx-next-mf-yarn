import React from 'react';
import { Flex, ProgressCircle } from '@adobe/react-spectrum';

export const Loader = ({ progressCircleProps = {}, className = '' }) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height={600}
    >
      <ProgressCircle
        aria-label="Loading…"
        isIndeterminate
        {...progressCircleProps}
        UNSAFE_className={className}
      />
    </Flex>
  );
};

export default Loader;
