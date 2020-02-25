import React, { Component } from 'react'

class Table extends Component {
  
  state = {
    money_input: 0
  }

  renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  handleChange = (e) => {
    console.log("CHANGED THE MONEY", e.target.value)
    this.setState({
      money_input: e.target.value
    })

  }
  render() {
    return (
      <React.Fragment>
        <h1 className="remaining">
          You have: ${ this.props.money } remaining!

        <form className="money-form" onSubmit={(e) => this.props.addMoney(e, this.state.money_input)}> 
          <label>
          Add Money:
          </label>
          <input type="number" name="money" onChange={(e) => this.handleChange(e)}/> 
          <input type="submit" value="Submit" />
        </form>
        </h1>

        <div className="table">
          <div className="stack">
            {
              /* 
                renderPlates takes an array 
                and renders an empty plate
                for every element in the array
              */
              this.renderPlates(this.props.eaten)
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Table