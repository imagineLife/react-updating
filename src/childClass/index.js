import React from "react";
import './index.css'
class ChildClass extends React.PureComponent{
	constructor(props){
		super(props)
		this.state = {innerState : 0}
	}

	render(){
		//destructure props
		let { thisCount } = this.props;
		return (
			<div className='frozenClassChild'>
				<p>This will not update unless the props are different.</p>
				<p>This has an 'innerState' value of {this.state.innerState}</p>
				<p>This gets a prop value of {thisCount}</p>
				<p>This is a react <b>'pureComponent'.</b></p>
			</div>
		);
	}
};
export default ChildClass;