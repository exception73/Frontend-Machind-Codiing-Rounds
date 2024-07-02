import { useCallback, useState } from "react"
import explorer from "../../data/data"

// import './App.css'
import useAddNew from "../../hooks/FileExplorer/AddNew";
import useUpdateFolder from "../../hooks/FileExplorer/useUpdateFolder";
import useDeleteFolder from "../../hooks/FileExplorer/useDeleteFolder";
import Folder from './Folder'

function FileExplorer() {

  const [folders, setFolders] = useState(explorer);
  console.log(folders)

  const addNew = (name, id, isFolder) => {
      const newExplorer = useAddNew(name, id, explorer, isFolder)
     
      setFolders(newExplorer);
      
  }

  const updateFolder = (nam, id) => {
    console.log(nam, id);
    const newExplorer = useUpdateFolder(nam, id, folders);
    // setFolders(newExplorer);
  }
  
  const deleteFolder = (id) => {
    const newExplorer = useDeleteFolder( id, folders);
    setFolders(newExplorer);
    console.log(folders)
  }


  return (
    <>

      <Folder explorer={folders} addNew={addNew} handleDeleteFolder={deleteFolder} handleUpdateFolder = {updateFolder}/>

    </>
  )
}

export default FileExplorer
