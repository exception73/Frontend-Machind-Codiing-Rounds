import React from 'react'

const MemeCard = ({img, data}) => {
  return (
    <div style={{margin:4, display:'inline-block', padding:4, border:'2px solid white', }}>

        <img style={{ width:300, height:300,}}src={img} alt="" />
        <p>{data}</p>


    </div>
  )
}

export default MemeCard