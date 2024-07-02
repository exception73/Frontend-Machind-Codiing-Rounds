import React from 'react'

const useAddNew = (name, id, explorer, isFolder) => {

    console.log(explorer)

    let newExplorer;

    const addNewItem = (explorer) => {
        if (explorer.id === id && explorer.isFolder) {
            const newObj = { id: Date.now(), name, isFolder };
            if (isFolder) newObj["items"] = [];
            explorer.items.unshift(newObj)
            return explorer;
        }
        let latestItems = []
        latestItems = explorer.items?.map((val) => {
          return  useAddNew(name, id, val, isFolder)
        })

        return {...explorer, items:latestItems};

    };

    newExplorer = addNewItem(explorer);

    return newExplorer;
   

}


export default useAddNew;
