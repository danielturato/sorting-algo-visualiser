import React from 'react';

const Bar = ({value, idx}) => {
    return (
        <div 
          className = "list-bar"
          key={idx}
          style={{
            backgroundColor: 'turquoise',
            height: `${value}px`
        }}></div>
    );
}

export default Bar;