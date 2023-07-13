import React from 'react';
import StDropdownMenu from './StDropdownMenu';

const CustomDropdownMenu = ({ children, id, className }, ref) => {
  return (
    <StDropdownMenu id={id} ref={ref} className={className}>
      {children}
    </StDropdownMenu>
  );
};

export default CustomDropdownMenu;
