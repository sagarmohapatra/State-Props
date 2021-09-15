import React from 'react';





class Welcome extends React.Component {
	state = {
		name: 'sagar',
		roll: this.props.roll
	};
	render() {
		return (
			<h1>hello,{this.state.name} my roll number is {this.state.roll}</h1>
		)
	}
}

export default Welcome;