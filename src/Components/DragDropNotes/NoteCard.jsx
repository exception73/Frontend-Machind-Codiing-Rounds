import React from 'react'



const NoteCard = ({data, position, handleDragStop }) => {

    const stl = {
        position:'absolute', top:`${position.y}px`, right:`${position.x}px`, padding:10 , useSelect:'none',cursor:'move' , borderRadius:20, backgroundColor:'grey'
    }




    function handleDrag(e){
        handleDragStop({
            x : e.clientX,
            y : e.clientY
        })

    }

  return (  
    <span draggable onDrag={handleDrag} onDragEnd={handleDrag} style={stl}>
        📌  {data}
    </span>
  )
}

export default NoteCard