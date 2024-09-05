/** @jsxImportSource @emotion/react */
import React from "react";
import {
  HeaderContainer,
  TopSection,
  Logo,
  SearchBar,
  ButtonContainer,
  Button,
  Navbar,
  NavLink,
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <TopSection>
        <Logo>Logo</Logo>

        <SearchBar type="text" placeholder="Search..." />

        <ButtonContainer>
          <Button>Login</Button>
          <Button>Create Account</Button>
        </ButtonContainer>
      </TopSection>

      <Navbar>
        <NavLink href="/home">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
