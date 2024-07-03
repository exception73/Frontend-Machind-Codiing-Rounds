import React, { useRef, useState } from 'react'
import useLRUCache from '../../hooks/LRUCache/useLruCache'



const LruCache = () => {

    const [data, setData] = useState([])

   
    const btns = [
        'btn1', 'btn2', 'btn3', 'btn4', 'btn5'
    ]

    const {get, put } = useLRUCache(3);

    console.log(get, put)

    const handleClick = async (ind) => {

        const val = get(ind);
        console.log(val)
        if(val!=-1){

            setData([...data, val]);
            return;
        }

        const fetchData = new Promise((resolve) => {
            setTimeout(()=> {
             setData([...data, `Data from ${ind}`])
             put(ind,  `Data from ${ind}`)
             resolve();
            }, 1000)
        })

       await fetchData;
    }




  return (
    
    <div>


        <h2>Implemented Lru cache of size 3</h2>


        {
            btns.map((btn, ind) => {
                return (<button onClick={() => handleClick(ind+1)} style={{margin:10}} key={ind}>{btn}</button>)
            })
        }

       <ul>
       {
            data.map((res, ind) => {
                return <li key ={ind}>{res}</li>
            })
        }
       </ul>


    </div>

  )
}

export default LruCache