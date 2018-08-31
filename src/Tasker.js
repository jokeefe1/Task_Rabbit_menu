import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto-fit;
`;
const P = styled.p`
  background-color: #51af33;
  border-top: 1px solid #7DD161;
  color: white;
  height: 15px;
  padding: 15px;
  justify-self: left;
  min-width: 100%;
  margin: 0;
`;

const Span1 = styled.span`
  justify-self: start;
  padding: 10px;
  color: white;
`;

export const Tasker = props => (
  <Container>
    <P>
      <Span1>
        <FontAwesomeIcon icon={faWrench} />
      </Span1>Log In
    </P>
  </Container>
);
