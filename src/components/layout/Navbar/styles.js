import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin: 32px 16px 24px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  flex: 0 0 auto;
  position: relative;
  padding: 0 10px;
  color: #12153D;
  font-size: 16px;
  font-weight: 600;
  line-height: 38px;
  text-decoration: none;
  opacity: 0.3;
  &.active {
    opacity: 1;
    &::after {
      content: ' ';
      position: absolute;
      top: 35px;
      left: 10px;
      width: 32px;
      height: 3px;
      background-color: #FE6D8E;
    }
  }
`;
