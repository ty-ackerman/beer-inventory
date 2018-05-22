import React from "react";

class InventoryDisplay extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.props.inventoryList.map((item, i) => {
            return (
              <div className="oneItem">
                <button
                  className="exit"
                  onClick={() => this.props.removeAlcohol(i)}
                >
                  x
                </button>
                <li className="name" key={`alcName-${i}`}>
                  {item.alcName}
                </li>
                <img
                  className="beer-image"
                  key={`imageUrl-${i}`}
                  src={item.imageUrl}
                  alt="Alcohol Picture"
                />
                <li className="type " key={`type-${i}`}>
                  {item.type}
                </li>
                <li className="amount" key={`amount-${i}`}>
                  {item.container}s remaining: {item.amount}
                </li>
                <button
                  className="add"
                  onClick={() => this.props.buyAlcohol(i)}
                >
                  +
                </button>
                <button
                  className="subtract"
                  onClick={() => this.props.drinkAlcohol(i)}
                >
                  -
                </button>
              </div>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default InventoryDisplay;
