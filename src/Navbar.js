import React from "react";
import styled from "styled-components";
import { FaWindows } from "react-icons/fa";
import { Breakpoint } from "react-socks";
import "./Variables.css";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => (props.primary ? "palevioletred" : "white")};
  height: 10vmin;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
`;
const Li = styled.li`
  list-style: none;
  margin-right: 2rem;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const logoStyle = {
  color: "var(--background)",
  paddingLeft: "2rem",
  height: "30px",
  width: "30px"
};

const Navbar = () => {
  return (
    <div>
      <Breakpoint medium down>
        <NavContainer>
          <FaWindows style={logoStyle} />
          <Ul>
            <Li>1</Li>
            <Li>2</Li>
            <Li>3</Li>
          </Ul>
        </NavContainer>
      </Breakpoint>
      <Breakpoint large up>
        <NavContainer primary>
          <FaWindows style={logoStyle} />
          <Ul>
            <Li>1</Li>
            <Li>2</Li>
            <Li>3</Li>
          </Ul>
        </NavContainer>
      </Breakpoint>
    </div>
  );
};

export default Navbar;
