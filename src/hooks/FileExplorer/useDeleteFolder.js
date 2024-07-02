
export default function useDeleteFolder( id, explorer){

    console.log(id);
    function delet(explorer){
        if(explorer.id == id){
            return {};
        }
        let list = [];

        list = explorer.items?.map((val) => {
            return delet(val);
        })

        return {...explorer, items:list};
        

    }

    return delet(explorer);

}