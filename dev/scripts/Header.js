import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>The Beer Tracker</h1>
        <p>
          Ever forget what drinks you consumed? Say no more! This app will keep
          track for you so you don't have to.
        </p>
        {/* <form action="" onSubmit={this.props.addInventoryName}>
          <label htmlFor="inventoryName">Inventory Name</label>
          <input
            type="text"
            id="inventoryName"
            onChange={this.props.handleInventoryNameChange}
          />
          <button type="Submit">Load Inventory</button>
        </form> */}
      </header>
    );
  }
}

export default Header;
