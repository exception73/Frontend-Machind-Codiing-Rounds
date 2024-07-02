import React, { useEffect, useState } from 'react'
import useCustomEffect from '../../hooks/UseEffect/useCustomEffect';

const CustomUseEffect = () => {
    const [count, setCount] = useState(0);

    useCustomEffect(() => {
        console.log('hi')
    }, [count])

  return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}> Increase</button>
        </div>
  )
}

export default CustomUseEffect;