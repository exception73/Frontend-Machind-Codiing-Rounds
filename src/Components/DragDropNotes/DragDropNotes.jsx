import React, { useEffect, useState } from 'react'
import NoteCard from './NoteCard'

const Notes = ["I'm gautam khatri a frontend developer", "Drag this note and then drop it anywhere you want it to be"]

const DragDropNotes = () => {


    const posSaved = JSON.parse(localStorage.getItem('positions'));
   
    const [pos, setpos] = useState([]);
    const [newnote, setnewNote]  = useState();
    const [notes, setNotes] = useState(Notes)

    useEffect(() => {
        if(posSaved){
            setpos(posSaved);
            
        }else{
            let np = []
        let h = window.innerHeight, w = window.innerWidth;
        Notes.forEach(()=>{
            let obj = {};
            obj['x'] = Math.random()*(w-200);
            obj['y'] = Math.random()*(h-200);
            np.push(obj);
        })

        setpos(np);
        localStorage.setItem('positions', JSON.stringify(np));
  
    }
    }, [])


    const handleDragEnd = (ind, npos) => {
        const np = [...pos];
        np[ind] = npos;
        setpos(np);
        localStorage.setItem('positions', JSON.stringify(np));
    }

    const handleAddNew = () => {
        let np = [...pos]
        let h = window.innerHeight, w = window.innerWidth;
        let obj = {};
        obj['x'] = Math.random()*(w-200);
        obj['y'] = Math.random()*(h-200);
        np.push(obj);
        setpos(np);
        setNotes([...notes, newnote])
        
    }

  return (
    <div>

        <div  style={{position:'absolute', top:'30px', left:'10px', display : 'flex'}}>
        <span style={{margin:20}}>Add New Note</span>
       
        <textarea  onInput={(e) => {setnewNote(e.target.value)}} />

        <button onClick={handleAddNew} style={{margin:20}}>Add</button>

        </div>
        {
           pos.length && notes.map((val, ind) => {
                return <NoteCard key={ind} data={val} position={pos[ind]}  handleDragStop={(npos) => handleDragEnd(ind,npos)} />
            })
        } 

      </div>
  )
}

export default DragDropNotes