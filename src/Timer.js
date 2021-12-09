import React, {useEffect, useState} from 'react';

const Timer = () =>
{
    const [value,setValue]=useState(0);
    const colors=[
        'yellow',
        'blue',
        'green',
        'pink',
        'red'
    ]
    useEffect(() => {
        setTimeout(() => {
          setValue((s)=>(s==4?0:s+1));
        }, 5000);
      });
      return(
          document.body.style.backgroundColor=colors[value]
      )
    
}


export default Timer;