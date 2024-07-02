import { useRef } from "react";

function isEqual(curr, prev){

    if(prev == null) return true;
    if(prev.length != curr.length) return true;

    for(let i = 0; i <prev.length; i++){

        if(prev[i] != curr[i]) return true;
    }

    return false;
}

const useCustomMemo = (cb, deps) => {

    const prevMemoizedValued = useRef(null);
    if(!prevMemoizedValued.current || isEqual(deps, prevMemoizedValued.current.deps)){
        prevMemoizedValued.current = {
            value : cb(),
            deps
        };

        console.log('hiihihi')
    }


    return prevMemoizedValued.current.value;
}

export default useCustomMemo