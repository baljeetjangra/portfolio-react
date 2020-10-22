import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.navy};
  /* height: 80px; */
  padding: 0px 20px;
`;

const NavLogo = styled.h1`
  display: inline;
  cursor: pointer;
  margin: 20px;
  padding: 2px 10px;
  color: ${theme.colors.green};
  border-radius: 50%;
  border: 2px solid ${theme.colors.green};
  font-size: 2rem;
  &:hover {
    background-color: ${theme.colors.green_tint};
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  width: 500px;
`;

const NavLink = styled.li`
  color: ${theme.colors.lightest_slate};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.green};
  }
  span {
    color: ${theme.colors.green};
  }
`;

const NavLinkBtn = styled(NavLink)`
  background-color: ${theme.colors.navy};
  border: 1px solid ${theme.colors.green};
  padding: 12px;
  color: ${theme.colors.green};
  border-radius: 5px;
  &:hover {
    background-color: ${theme.colors.green_tint};
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLogo>B</NavLogo>
      <NavItems>
        <NavLink>
          <span>01.</span> About
        </NavLink>
        <NavLink>
          <span>02.</span> Work
        </NavLink>
        <NavLink>
          <span>03.</span> Contact
        </NavLink>
        <NavLinkBtn>Resume</NavLinkBtn>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
