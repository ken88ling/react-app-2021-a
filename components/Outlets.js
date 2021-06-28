import React from 'react';

function Outlets(props) {
  console.log('data', props.data);
  return (
    <>
      <div>
        {props.data.map((item) => (
          <div key={'outlet' + item.id} className='btn'>
            <span>
              {item.id} - {item.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Outlets;
