import React from "react";
import ReactDOM from "react-dom";

import { TopBar } from "./TopBar";
import { NavBar } from "./NavBar";
import { Header } from "./Header";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: true,
      isExpanded: false,
      isServicesExpanded: false,
      services: [
        "Handyman",
        "Help Moving",
        "Interior Painting",
        "TV Mounting",
        "Light Installation",
        "Hanging Pictures & Shelves",
        "Furniture Assembly",
        "Yard Work",
        "Furniture Delivery Services",
        "Delivery Service",
        "Grocery Shopping",
        "IKEA Services",
        "All Services"
      ]
    };
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  handleMenuClick = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  handleServicesClick = () => {
    this.setState({ isServicesExpanded: !this.state.isServicesExpanded });
  };

  render() {
    return (
      <div className="App">
        {this.state.isActive && (
          <TopBar
            isActive={this.state.isActive}
            handleClick={this.handleClick}
          />
        )}
        <NavBar
          isExpanded={this.state.isExpanded}
          handleMenuClick={this.handleMenuClick}
          services={this.state.services}
          handleServicesClick={this.handleServicesClick}
          isServicesExpanded={this.state.isServicesExpanded}
        />
        <Header />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
