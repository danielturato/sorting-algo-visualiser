import React from 'react';

import Bar from './Bar.js'

const List = ({list}) => {
    return (
        <div className="list-container">
        {list.map((value, idx) => (
          <Bar value={value} idx={idx}/>
        ))}
      </div>
    );
}

export default List;