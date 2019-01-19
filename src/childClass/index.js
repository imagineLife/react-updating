import React from "react";
import './index.css'
class ChildClass extends React.PureComponent{
	constructor(props){
		super(props)
		this.state = {innerState : 0}
	}

	render(){
		return (
			<div className='frozenChild'>
				<p>This is a react 'pureComponent'.</p>
				<p>This will not update unless the props are different.</p>
				<p>This has an 'innerState' value of {this.state.innerState}</p>
				<p>This gets a prop value of {this.props.thisCount}</p>
			</div>
		);
	}
};
export default ChildClass;