import React, { useEffect, useRef, useState } from 'react'
import useThrotlle from '../../hooks/useThrottle/useThrotlle'

const Throttle = () => {

    const [dimensions, setDimensions] = useState({width:window.innerWidth, height : window.innerHeight})
    const handleResize = () => {
        setDimensions({width: window.innerWidth, height : window.innerHeight})
    }   

    const throtle = useThrotlle(handleResize, 1000);


    useEffect(() => {

        window.addEventListener('resize',throtle)
        return () => {
            window.removeEventListener('resize',throtle);
        }

    }, [])

  return (
    <div>
     Window Size : {dimensions.height} X {dimensions.width}
    </div>
  )
}

export default Throttle