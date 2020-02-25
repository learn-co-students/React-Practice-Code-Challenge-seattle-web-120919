import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    index: 0,
    money: 100,
  }

  componentDidMount(){
    fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState({
        sushis: myJson
      })

    });
  
  }

  getFourSushis = () => {
    return this.state.sushis.slice(this.state.index, this.state.index+4);
  }

  addMore = (e) => {
    let temp = this.state.index + 4
    if(temp >= this.state.sushis.length) {
      temp = 0;
    }
    this.setState({
      index: temp
    })
  }

  eatSushi = (sushi) => {
    console.log("ate", sushi)
    let temp_money = this.state.money - sushi.price
    if(temp_money >= 0) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: temp_money
      })
    }
    console.log(this.state)
  }

  addMoney = (e, money) => {
    e.preventDefault()
    let temp = parseInt(this.state.money) + parseInt(money)
    console.log("add Money", money)
    this.setState({
      money: temp
    })

  } 

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.getFourSushis()} eatSushi={this.eatSushi} addMore={this.addMore} eaten={this.state.eaten}/>
        <Table money={this.state.money} eaten={this.state.eaten} addMoney={this.addMoney}/>
      </div>
    );
  }
}



export default App;