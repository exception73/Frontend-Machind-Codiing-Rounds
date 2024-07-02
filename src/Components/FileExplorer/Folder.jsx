
import React, { useState } from 'react'

const Folder = ({explorer, addNew, handleUpdateFolder, handleDeleteFolder}) => {


    const [expand, setExpand] = useState(true);
    const [showUpdate, setShowUpdate] = useState({
      visible : false,
      newName : ""
    })
  
   const [showInput, setShowInput] = useState({
    visible : false,
    isFolder : null,  
   })

   const handleNewFolder = (e, isFolder) => {
    setShowInput({
      visible : true,
      isFolder
    })

   }

    if(explorer?.isFolder){
      return <div style={{margin:12}}>
        <div  className='folder' style={{width:"100vw"}} >
   {   showUpdate.visible ?  <input autoFocus onBlur={(e) => {setShowUpdate({...showUpdate, visible:false}); handleUpdateFolder(e.target.value, explorer.id); }} onChange={(e) => setShowUpdate({visible:true, newName : e.target.value})}  />  :  <span  onClick={() => setExpand(!expand)}> 📁 {explorer.name}  </span>}    
         <span className='button'>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder + </button>
            <button  onClick={(e) => handleNewFolder(e, false)} >File + </button>
            <button  onClick={(e) => { setShowUpdate({visible:true, newName:explorer.name})}}> Update </button>
            <button  onClick={(e) => handleDeleteFolder(explorer.id)} >Delete </button>
          </span>
        </div>

        {
          showInput.visible && (
            <div style={{paddingLeft : 20}}>
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input autoFocus onBlur={(e) =>  { e.target.value && addNew(e.target.value, explorer.id, showInput.isFolder); setShowInput({...showInput ,visible:false})}} />
            </div>
          )
        }
          <div   style={{display : expand ? 'block' : 'none', paddingLeft : 20}}>
            {
              explorer.items.map((val, ind) => {
                return <Folder style={{ marginLeft : 10}} key = {ind} explorer={val}  addNew={addNew} handleUpdateFolder={handleUpdateFolder} handleDeleteFolder={handleDeleteFolder}/>
              })
            }
          </div>
      
      </div>
    }else if(explorer?.isFolder == false){
      return <span className='file'>
       📄 {explorer.name}
     </span>
    }
  
}

export default Folder