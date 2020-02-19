// Library Imports
import React, { Component } from "react";

// Relative Imports
import {
  Container,
  Header,
  Title,
  Description,
  Button,
  Footer,
  Body,
  Fees,
  Label,
  Bold,
  Row,
  Form
} from "./styles";
import Dropdown from "../dropdown/index.js";

const platforms = [
  {
    name: "MakerDAO",
    status: "Available"
  },
  {
    name: "Synthetix",
    status: "Coming Soon"
  },
  {
    name: "DyDx",
    status: "Coming Soon"
  }
];

const collateral = [
  {
    name: "ETH to BAT"
  },
  {
    name: "BAT to ETH"
  }
];

const vaults = [
  {
    name: "1234"
  },
  {
    name: "5678"
  },
  {
    name: "9876"
  }
];

class Modal extends Component {
  state = {
    platform: {
      value: "MakerDAO",
      status: "Available"
    },
    collateral: {
      value: "Swap Collateral"
    },
    vaults: {
      value: "Select Vault"
    }
  };

  selectPlatform = option => {
    const { name, status } = option;
    const { platform } = this.state;

    this.setState({
      platform: { ...platform, value: name }
    });
  };

  selectCollateral = option => {
    const { name } = option;
    const collateral = this.state;

    this.setState({
      collateral: { ...collateral, value: name }
    });
  };

  selectVault = option => {
    const { name } = option;
    const vaults = this.state;

    this.setState({
      vaults: { ...vaults, value: name }
    });
  };

  render() {
    return (
      <Container>
        <Header>
          <Title>Collateral Swap</Title>
          <Description>
            Instantly swap collateral across DeFi platforms.
          </Description>
        </Header>
        <Body>
          <Form>
            <Dropdown
              options={platforms}
              onClick={this.selectPlatform}
              label="Platform"
              value={this.state.platform.value}
            />
            <Dropdown
              options={collateral}
              label="Swap"
              onClick={this.selectCollateral}
              value={this.state.collateral.value}
            />
            <Dropdown
              options={vaults}
              label="Vault"
              onClick={this.selectVault}
              value={this.state.vaults.value}
            />
          </Form>
          <Fees>
            <Row>
              <Bold>Fees</Bold>
              <Bold>Details</Bold>
            </Row>
            <Row>
              <Label>Transaction</Label>
              <Label>0.0432</Label>
            </Row>
          </Fees>
        </Body>
        <Footer>
          <Button>{this.props.button}</Button>
        </Footer>
      </Container>
    );
  }
}

export default Modal;
