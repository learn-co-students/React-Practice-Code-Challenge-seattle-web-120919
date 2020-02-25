import React from 'react';

// create class to implement state, for user to change $ amount
class SushiWallet extends React.Component{
    state = {
        amount: 0
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.handleAmountChange(this.state.amount)
    }
    
    handleAmount=(e)=>{
        // console.log(e.target.value)
        this.setState({
            amount: parseInt(e.target.value, 10)
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="number"
                        onChange={this.handleAmount}/>
                    <button>More Money Please!</button>
                </form>
            </div>
        )
    }
}

export default SushiWallet;