import React from "react";
import './index.css'

//React.memo makes the fn skip re-rendering if props are the same
const Child = React.memo(({thisCount, name}) => {
	console.log(`Rendering ${name}`);
  return (
    <div className='frozenChild'>
      <p>This is a child fn component.</p>
      <p>This will not update unless the props are different.</p>
      <p>This gets a prop value of {thisCount}</p>
      {(!name) && <p>This is a <b>pure function</b></p>}
    </div>
  );
});
export default Child;