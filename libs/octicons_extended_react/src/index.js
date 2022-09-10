import React from 'react';

const Octicon = ({ icon: Icon, children, ...props }) => {
  // eslint-disable-next-line no-console
  console.warn(
    // eslint-disable-next-line
    '<Octicon> is deprecated. Use icon components on their own instead (e.g. <Octicon icon={AlertIcon} /> → <AlertIcon />)'
  );
  return typeof Icon === 'function' ? (
    <Icon {...props} />
  ) : (
    React.cloneElement(React.Children.only(children), props)
  );
};

export default Octicon;

export * from './__generated__/icons';
