import React from "react";
import styled from "styled-components";

import { Services } from "./Services";
import { LogIn } from "./LogIn";
import { Tasker } from "./Tasker";

const Container = styled.div`

`;

export const Menu = props => (
  <Container>
    <Services
      services={props.services}
      isServicesExpanded={props.isServicesExpanded}
      handleServicesClick={props.handleServicesClick}
    />
    <LogIn />
    <Tasker />
  </Container>
);
