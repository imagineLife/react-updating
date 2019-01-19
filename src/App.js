import React from "react";
import ReactDOM from "react-dom";
import ChildFn from './childFn'
class App extends React.Component{
	constructor(props){
		super(props)
		// this.updateStateCount = this.updateStateCount.bind(this);
		this.state = {count: 1}
	}

	// updateStateCount(){
	// 	this.setState({count: (this.state.count+1)})
	// }

	render(){
		return (
			<div>
				<p>Parent Count: {this.state.count}</p>
				<ChildFn />
				<button onClick={() => this.setState({count: (this.state.count+1)})}>UpdateParentCount</button>
			</div>
		);
	}
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));