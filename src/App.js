import React, { Component } from "react";

// New Design
import Page from "./components/page";
import Navigation from "./components/navigation";
import Modal from "./components/modal";

// Modal States
import SwapCollateral from "./components/states/swap_collateral";
import ConnectWallet from "./components/states/connect_wallet";
import ConfirmTransaction from "./components/states/confirm_transaction";
import SwappingCollateral from "./components/states/swapping_collateral";
import SwappedCollateral from "./components/states/swapped_collateral";

class App extends Component {
  state = {
    count: 1,
    connected: true,
    status: "enabled",
    button: "Connect Wallet"
  };

  handleState = () => {
    const { count } = this.state;
    switch (count) {
      case 1:
        return <ConnectWallet />;
      case 2:
        return <SwapCollateral />;
      case 3:
        return <ConfirmTransaction />;
      case 4:
        return <SwappingCollateral />;
      case 5:
        return <SwappedCollateral />;
      default:
    }
  };

  connectWallet = () => {
    // Function  to connect the wallet and increment the count
    alert("Force Metamask Modal to appear here");
    this.setState({
      count: this.state.count + 1,
      button: "Swap Collateral"
    });
  };

  handleButton = () => {
    // Switch Statement to handle the display of component states
    const { count } = this.state;
    switch (count) {
      case 1:
        return this.setState({
          count: 2,
          button: "Swap Collateral",
          status: "enabled"
        });
      case 2:
        return this.setState({
          count: 3,
          button: "Confirm Transaction...",
          status: "enabled"
        });
      case 3:
        return this.setState({
          count: 4,
          button: "Transaction Confirming...",
          status: "disabled"
        });
      case 4:
        return this.setState({
          count: 5,
          button: "Swap Again",
          status: "enabled"
        });
      case 5:
        // Function to provide logic to redirect a user to start point
        return this.swapAgain();
      default:
    }
  };

  swapAgain = () => {
    // If the wallet is connected take the user to step 2 else step 1
    const { connected } = this.state;
    if (connected) {
      this.setState({
        count: 2,
        button: "Swap Collateral"
      });
    } else if (!connected) {
      this.setState({
        count: 1,
        button: "Connect Wallet"
      });
    } else {
      return null;
    }
  };

  render() {
    const { button, status, count, connected } = this.state;

    return (
      <>
        <Navigation />
        <Page>
          <Modal
            onClick={() => {
              // Ternary  to handle connectWallet and count increment
              count === 1 ? this.connectWallet() : this.handleButton();
            }}
            button={button}
            status={status}
            count={count}
            connected={connected}
          >
            {this.handleState()}
          </Modal>
        </Page>
      </>
    );
  }
}

export default App;
