import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import InventoryDisplay from "./InventoryDisplay";
import BeerInputForm from "./BeerInputForm";
import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDMtdm57Vo21xtYXIVJgOevkIi2DP4T8x4",
  authDomain: "beer-tracker-3fb9b.firebaseapp.com",
  databaseURL: "https://beer-tracker-3fb9b.firebaseio.com",
  projectId: "beer-tracker-3fb9b",
  storageBucket: "beer-tracker-3fb9b.appspot.com",
  messagingSenderId: "598616436524"
};
firebase.initializeApp(config);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inventoryName: "",
      inventoryList: [],
      oneAlcohol: {
        alcName: "",
        type: "",
        amount: "",
        container: "",
        imageUrl: ""
      }
    };
    this.addInventoryName = this.addInventoryName.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInventoryNameChange = this.handleInventoryNameChange.bind(this);
    this.addAlcohol = this.addAlcohol.bind(this);
    this.drinkAlcohol = this.drinkAlcohol.bind(this);
    this.removeAlcohol = this.removeAlcohol.bind(this);
    this.buyAlcohol = this.buyAlcohol.bind(this);
  }
  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on("value", response => {
      const newInventoryState = [];
      const data = response.val();

      for (let key in data) {
        newInventoryState.push(data[key]);
      }

      this.setState({
        inventoryList: newInventoryState
      });
    });
  }

  addAlcohol(e) {
    //When the form is submitted, this function will push the oneAlcohol object state to the inventory list state

    e.preventDefault();
    // const inventoryState = Array.from(this.state.inventoryList);
    // inventoryState.push(this.state.oneAlcohol);
    // dbRef.push(inventoryState);
    // this.setState({
    //   inventoryList: inventoryState
    // });
    const dbRef = firebase.database().ref();
    dbRef.push(this.state.oneAlcohol);
    this.setState({
      oneAlcohol: {}
    });
    document.getElementById("beerForm").reset();
  }

  addInventoryName(e) {
    //When form is submitted, this will add the new inventory name

    e.preventDefault();
    // console.log(this.state.inventoryName);
    // const inventoryNameState = this.state.inventoryName;
    // console.log(inventoryNameState);
  }

  handleInventoryNameChange(e) {
    //This function takes the changes in value of the inventory name and saves it as a state and push to firebase

    let inventoryNameState = this.state.inventoryName;
    inventoryNameState = e.target.value;
    this.setState({ inventoryNameState });
  }

  handleChange(e) {
    //This takes the name value from the form and changes the state that matches the same name in the oneAlcohol object

    let oneAlcohol = Object.assign({}, this.state.oneAlcohol);
    oneAlcohol[e.target.id] = e.target.value;
    this.setState({ oneAlcohol });
  }

  drinkAlcohol(i) {
    const inventoryState = Array.from(this.state.inventoryList);
    const thisInventoryState = inventoryState[i];
    const newAmount = parseInt(thisInventoryState.amount) - 1;

    inventoryState[i].amount = newAmount;
    console.log(newAmount);
    this.setState({
      inventoryState
    });
  }

  buyAlcohol(i) {
    const inventoryState = Array.from(this.state.inventoryList);
    const thisInventoryState = inventoryState[i];
    const newAmount = parseInt(thisInventoryState.amount) + 1;
    inventoryState[i].amount = newAmount;
    console.log(newAmount);
    this.setState({
      inventoryState
    });

    //When user clicks the button, the amount of alcohol decreases

    // let drinkInventory = Array.from(inventoryState);
    // let oneInventory = Object.assign({}, this.state.oneAlcohol);
    // this.state.inventoryList[i].amount = parseInt(oneInventory["amount"]) + 1;
    // this.setState({
    //   inventoryState
    // });
  }

  removeAlcohol(i) {
    //When particular item is empty, user has the option to remove it by clicking the x
    const inventoryState = Array.from(this.state.inventoryList);
    inventoryState.splice(i, 1);
    this.setState({
      inventoryList: inventoryState
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header
          handleInventoryNameChange={this.handleInventoryNameChange}
          addInventoryName={this.addInventoryName}
        />
        <InventoryDisplay
          inventoryList={this.state.inventoryList}
          drinkAlcohol={this.drinkAlcohol}
          removeAlcohol={this.removeAlcohol}
          buyAlcohol={this.buyAlcohol}
        />
        <BeerInputForm
          handleChange={this.handleChange}
          addAlcohol={this.addAlcohol}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
