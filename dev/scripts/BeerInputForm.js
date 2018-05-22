import React from "react";

class BeerInputForm extends React.Component {
  render() {
    return (
      <form action="" id="beerForm" onSubmit={this.props.addAlcohol}>
        <h2>Add To The Collection</h2>
        <label htmlFor="alcName">Name of the Alcohol</label>
        <input
          type="text"
          required
          name="alcName"
          id="alcName"
          onChange={this.props.handleChange}
        />
        <label htmlFor="type">Type of Alcohol</label>
        <input
          type="text"
          id="type"
          required
          onChange={this.props.handleChange}
        />
        <label htmlFor="amount">Quantity</label>
        <input
          type="number"
          id="amount"
          required
          onChange={this.props.handleChange}
          min="0"
        />
        <label htmlFor="container">Container Type</label>
        <select
          name="container"
          id="container"
          onChange={this.props.handleChange}
        >
          <option value="bag">Bag</option>
          <option value="bottle">Bottle</option>
          <option value="can">Can</option>
        </select>
        <label htmlFor="imageUrl">Image Url</label>
        <input
          type="text"
          id="imageUrl"
          required
          onChange={this.props.handleChange}
        />
        <button type="submit">Add to inventory</button>
      </form>
    );
  }
}

export default BeerInputForm;
