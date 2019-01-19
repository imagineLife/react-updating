import React from "react";
import './index.css'
const Child = () => {
  return (
    <div className='frozenChild'>
      <p>This is a child fn component.</p>
      <p>This will not update unless the props are different.</p>
      <p>This is a pureComponent.</p>
    </div>
  );
};
export default Child;