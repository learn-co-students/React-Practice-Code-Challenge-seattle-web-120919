import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiList: [],
    currentSushi: [],
    money: 200,
    eaten: []
  }

  fourSushi = () => {
    this.setState({
      ...this.state,
      currentSushi: this.state.sushiList.splice(0, 4)
    })
  }

  eatSushi = (id) => {
    let eatenSushi = null
    const eated = this.state.currentSushi.map(sushi => {
      if (sushi.id === id){
        // sushi.img_url = ''
        eatenSushi = sushi
        return sushi
      }
      return sushi
    })
    this.setState({
      ...this.state,
      currentSushi: eated,
      money: this.state.money - eatenSushi.price,
      eaten: [
        ...this.state.eaten,
        eatenSushi
      ]
    })
  }

  isSushiEaten = (sushi) => {
    if(this.state.eaten.includes(sushi)){
      return true
    }
    return false
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.money < 0) {
      console.log("Broke boys")
      return false
    }
    return true
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => this.setState({
      sushiList: data
    }))
    .catch(err => console.log(err))
  }



  render() {
    return (
      <div className="app">
        <SushiContainer currentSushi={this.state.currentSushi} fourSushi={this.fourSushi} eatSushi={this.eatSushi} isSushiEaten={this.isSushiEaten}/>
        <Table money={this.state.money} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;