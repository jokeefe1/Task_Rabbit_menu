import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faHome } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto-fit;
`;

const P = styled.p`
  grid-column: 1 / 3;
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
  grid-column: 1 / 2;
  justify-self: start;
  padding: 10px;
  color: white;
`;

const Span2 = styled.span`
  padding: 10px;
  color: white;
  cursor: pointer;
`;

const Ul = styled.ul`
  margin: 0;
`;

const Li = styled.li`
  grid-column: 1 / 3;
  padding: 8px;
  list-style: none
  justify-content: start;
  min-width: 100%;
`;

const view1 = `

`;

export const Services = props => (
  <Container>
    <P onClick={props.handleServicesClick}>
      <Span1>
        <FontAwesomeIcon icon={faHome} />
      </Span1>Services
      <Span2>
        <FontAwesomeIcon icon={faPlusCircle} size="sm" />
      </Span2>
    </P>
    <Ul>
      {props.isServicesExpanded &&
        props.services.map((service, index) => (
          <Li key={index}>
            <a>{service}</a>
          </Li>
        ))}
    </Ul>
  </Container>
);
