import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushiIndex: 0,
    eatenSushis: [],
    eatenSushi: [],
    balance: 100
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({
        sushis: sushis
    })}
  )}

  eatSushi = (id, price) => { // call id to find!
    if(!this.state.eatenSushis.includes(id) && this.state.balance >= price){
    this.setState({
      eatenSushis: [...this.state.eatenSushis, id],
      balance: this.state.balance - price
    })}
  }
  nextSushi = () => {
    //reset sushi line when reach 100, create newIndex, setState to newIndex
    const newIndex = (this.state.sushiIndex +4) > 99? 0 : this.state.sushiIndex + 4
    this.setState({
      sushiIndex: newIndex /* this.state.sushiIndex + 4 */
    })
  }

  renderSushi = () => {
    return this.state.sushis.slice(this.state.sushiIndex, 
      this.state.sushiIndex + 4)
  }

  handleAmountChange = (newBalance) => {
    this.setState({
      balance: this.state.balance + newBalance
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          fourSushis={this.renderSushi()}
          nextSushi={this.nextSushi}
          eatSushi={this.eatSushi}
          eatenSushis={this.state.eatenSushis}/>
        <Table 
          eatenSushis={this.state.eatenSushis}
          balance={this.state.balance}/>
        <SushiWallet 
          handleAmountChange={this.handleAmountChange}/>
      </div>
    );
  }
}

export default App;