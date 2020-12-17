import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    eatenSushis: [],
    index: 0,
    money: 100
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({sushis: sushis}))
  }

  handleButton = () => {
    if (this.state.index === (this.state.sushis.length - 4)) {
      this.setState({
        index: 0
      })      
    } else {
      this.setState({
        index: this.state.index + 4
      })
    }
  }

  handleClick = (sushi) => {
    if(!this.state.eatenSushis.includes(sushi) && this.state.money >= sushi.price) {
      this.setState({
        eatenSushis: [...this.state.eatenSushis, sushi],
        money: this.state.money - sushi.price
      })
    }    
  }

  render() {
    // console.log(this.state.sushis);
    const sushis = this.state.sushis.slice(this.state.index, this.state.index + 4);
    return (
      <div className="app">
        <SushiContainer
          sushis={sushis}
          handleButton={this.handleButton}
          handleClick={this.handleClick}
          eatenSushis={this.state.eatenSushis}
        />
        <Table money={this.state.money} eatenSushis={this.state.eatenSushis}/>
      </div>
    );
  }
}

export default App;