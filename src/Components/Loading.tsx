import React from 'react';

const style = {
  border: 'var(--gap-s) solid var(--color-3)',
  borderRadius: '50%',
  borderRightColor: 'var(--color-4)',
  height: 'var(--gap)',
  width: 'var(--gap)',
  animation: 'spin 1s linear infinite',
};

const Loading = () => {
  return <div style={style}></div>;
};

export default Loading;
