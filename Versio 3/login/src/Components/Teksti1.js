
import React from 'react';

const Jono = props => {
  const { teksti, divi } = props;
  return (
    <div className={divi}>
        {teksti}
        
    </div>
  );
};


export default Jono