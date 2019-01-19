import React from "react";
import './index.css'

//React.memo makes the fn skip re-rendering if props are the same
const Child = React.memo((props) => {
	console.log('Rendering child');
  return (
    <div className='frozenChild'>
      <p>This is a child fn component.</p>
      <p>This will not update unless the props are different.</p>
      <p>This is a pureComponent.</p>
      <p>This gets a prop value of {props.thisCount}</p>
    </div>
  );
});
export default Child;