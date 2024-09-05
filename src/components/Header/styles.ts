import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const SearchBar = styled.input`
  width: 40%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #bdc3c7;
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: "#3498db";
  color: black;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.9;
  }
`;

export const Navbar = styled.nav`
  width: 100%;
  background-color: #34495e;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const NavLink = styled.a`
  color: #ecf0f1;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;
