import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Menu } from "./Menu";

const Container = styled.div`
  border-bottom: 1px solid grey;
`;

const IconDiv = styled.div`
  display: inline-block;
  margin: 8px; 
  float: right;
  cursor: pointer;
  color: #51af33;
`;

export const NavBar = props => (
  <Container>
    {props.isExpanded && (
      <Menu
        services={props.services}
        handleServicesClick={props.handleServicesClick}
        isServicesExpanded={props.isServicesExpanded}
      />
    )}
    <img
      src="https://uploads.codesandbox.io/uploads/user/1911f3ca-9906-4f8d-93ca-14b764f7ae4b/ShOM-tr-logo1.png"
      alt="logo"
    />
    <IconDiv>
      <FontAwesomeIcon
        icon={faBars}
        size="lg"
        onClick={props.handleMenuClick}
      />
    </IconDiv>
  </Container>
);
