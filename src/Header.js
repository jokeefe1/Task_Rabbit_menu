import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;

  background-image: url('https://uploads.codesandbox.io/uploads/user/1911f3ca-9906-4f8d-93ca-14b764f7ae4b/4wjV-tr-header.jpg');
`;

const P1 = styled.p`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  font-size: 1.8rem;
  color: #373c42;
  z-index: 1
`;
const P2 = styled.p`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  font-size: 1rem;
  color: #373c42;
  z-index: 1
`;

const ButtonDiv = styled.div`
  grid-column: 1 / 2;
  grid-row: 4 / 5;
`;

const Button = styled.button`
  grid-column: 1 / 2;
  grid-row: 4 / 5
  border: solid 1px #51af33;
  border-radius: 2px;
  color: #51af33;
  background-color: white;
  max-width: 180px;
  padding: 8px;
  justify-self: center;
  margin: 20px;

  :hover {
    background-color: #51af33;
    color: white;
  }
`;

const SearchDiv = styled.div`
  grid-column: 1 / 2;
  grid-row: 5 / 6;

  display: grid;
`;

const Input = styled.input`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  margin: 20px;
  padding: 15px 60px 15px 70px;
  font-size: 1rem;
  border: 1px solid #c9cfd6;
  border-radius: 5px;
  color: #c9cfd6
`;

const Span = styled.span`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding: 35px 300px 0px 0px;
  z-index: 1;
`;

export const Header = props => (
  <Container>
    <P1>The convenient & affordable way to get things done around the home</P1>
    <P2>
      Choose from over 60,000 vetted Taskers for help without breaking the bank.
    </P2>
    <ButtonDiv>
      <Button>Mounting and Installation</Button>
      <Button>Moving and Packing</Button>
      <Button>Furniture Assembly</Button>
      <Button>Home Improvement</Button>
      <Button>General Handyman</Button>
      <Button>Heavy Lifting</Button>
    </ButtonDiv>
    <SearchDiv>
      <Span>
        <FontAwesomeIcon icon={faSearch} size="sm" color="#51af33" />
      </Span>
      <Input type="text" placeholder="Need something different?" />
    </SearchDiv>
  </Container>
);
