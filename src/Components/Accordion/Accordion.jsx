import React, { useState } from 'react'
import Child1 from './Child1'

const message = [
    'hello my name is gautam, a frontend developer with 2+ years of expreice', 
    "I'm a btech 2025 graduate in computer scince with a 8.9 cgpa",
    "unwilling i had also done cp in my life, but can't reach 1600 :( "

]

const Accordion = () => {

    const [id, setId] = useState(-1);


  return (
    <div>
        <h4>Accordian</h4>
        {
            message.map((val, ind) => {
                return (
                    <div key={ind}  onClick = {() => setId(ind)} style={{width: 500, margin:30, backgroundColor:'#0e1111', padding:20, borderRadius:10}}>
                        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', cursor:'pointer'}}>
                            <span>
                            Number : {ind}
                            </span>
                            <span>
                            ⌄
                            </span>
                        </div>
                        {id == ind && <Child1 data={val} /> }
                     </div>
                )
            })
        }
        
    </div>
  )
}

export default Accordion