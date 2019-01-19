import React from "react";
import ReactDOM from "react-dom";
import ChildFn from './childFn'
import ChildClass from './childClass'

class App extends React.Component{
	constructor(props){
		super(props)
		// this.updateStateCount = this.updateStateCount.bind(this);
		this.state = {
			count: 1,
			otherCount:1
		}
	}

	// updateStateCount(){
	// 	this.setState({count: (this.state.count+1)})
	// }

	render(){
		return (
			<div>
				<ChildFn name="showState" thisCount={this.state.count}/>
				<ChildFn thisCount={this.state.otherCount}/>
				<ChildClass thisCount={this.state.otherCount}/>
				<button onClick={() => this.setState({count: (this.state.count+1)})}>UpdateParentCount</button>
			</div>
		);
	}
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));