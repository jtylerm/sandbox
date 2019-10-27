import React from "react";
import styled from "styled-components";
import { Breakpoint } from "react-socks";

const Button = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Nav = () => {
  return (
    <div>
      <Breakpoint medium down>
        <Button>Click Me</Button>
      </Breakpoint>
      <Breakpoint large up>
        <Button primary>Click Me</Button>
      </Breakpoint>
    </div>
  );
};

export default Nav;
