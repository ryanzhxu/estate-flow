import styled from 'styled-components';

const StDropdownMenu = styled.div`
  width: 100%;
  left: -1px !important;

  border-radius: 8px;
  border: none;

  background-color: white;
  box-shadow: none;
  margin: 0;
  padding: 0;
  box-sizing: content-box;

  .dropdown-menu.show {
    display: contents;
  }
`;

export default StDropdownMenu;
