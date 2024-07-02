import React, { useMemo, useState } from 'react'
import useCustomMemo from '../../hooks/useMemo/useMemo';


const CustomMemoHook = () => {


    const [count, setCount] = useState(0);
    const [res, setRes] = useState(0);

    const timeTakingFunction = () => {
        let time = Date.now();
        while(Date.now()-time<400){
        }
        return res*2;
    }

    let val = useCustomMemo(timeTakingFunction, [res]);

    
  return (
    <div>


        <div>
             <span style={{margin:'10px'}}>Counter : {count}</span>

             <button onClick={() => setCount(count+1)}>Increase</button>
        </div>
        <div>
             <span style={{margin:'10px'}}>Result : {res}</span>

             <button onClick={() => setRes(res+1)}>Increase</button>
        </div>


        <div>
        <span style={{margin:'10px'}}>Time Taking Function Value : {val}</span>
        </div>



    </div>
  )
}

export default CustomMemoHook