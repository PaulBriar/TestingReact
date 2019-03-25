import React from 'react';

class Counter extends React.Component {
	state = { count: 0 };

	makeIncrementer = amount => () =>
		this.setState(prevState => ({
				count: prevState.count + amount,
		}));

  render() {
    return (
			<div>
				<p>Current Count: {this.state.count}</p>
				<button className="inc" onClick={this.makeIncrementer(1)}>Increment</button>
				<button className="dec" onClick={this.makeIncrementer(-1)}>Decrement</button>
			</div>
    )
  }
}

export default Counter;