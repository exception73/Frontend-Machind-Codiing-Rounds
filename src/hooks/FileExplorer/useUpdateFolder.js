import explorer from "../../data/data"

export default function useUpdateFolder(nam, id, explorer){

    console.log(explorer);

    function update(explorer){

        if(explorer.id == id){
            explorer.name = nam;
            return explorer;
        }

        let list = [];

        list = explorer.items?.map((val) => {
            return update(val);
        })

        return {...explorer, items : list};
        

    }

    // console.log(update(explorer))

    return update(explorer);


}