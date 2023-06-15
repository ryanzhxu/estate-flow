import React from 'react';
import { Dropdown } from 'react-bootstrap';
import CustomDropdownMenu from './dropdownMenu/CustomDropdownMenu';

const DropdownMenu = ({ id, children }) => {
  return (
    <Dropdown.Menu id={`${id}-dropdown-menu`} as={CustomDropdownMenu} renderOnMount>
      {children}
    </Dropdown.Menu>
  );
};

export default DropdownMenu;
