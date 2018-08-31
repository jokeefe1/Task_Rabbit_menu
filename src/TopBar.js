import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  padding 8px;
  background-color: teal;
  color: white
  min-width: 100%;
`;

const A = styled.a`
  color: white
  text-decoration: none;

  :hover {
    color: orange;
  }
`;

const Span = styled.span`
  padding 15px;
  cursor: pointer;
`;

export const TopBar = props => (
  <Container>
    <p>
      Get the most out of your time. Click <A href="www.here.com">here</A> to
      learn more.
      <Span>
        <FontAwesomeIcon icon={faTimes} size="lg" onClick={props.handleClick} />
      </Span>
    </p>
  </Container>
);
