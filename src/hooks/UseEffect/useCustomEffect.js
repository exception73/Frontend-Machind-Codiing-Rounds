
import { useRef } from "react";


function isEqual(curr, prev){

    if(prev === null) return true;
    if(prev.length !== curr.length) return true;

    for(let i = 0; i <prev.length; i++){

        if(prev[i] != curr[i]) return true;
    }

    return false;
}


function useCustomEffect(cb, deps = []){

    const isFirstRender = useRef(null);
    if(!isFirstRender.current || isEqual(deps, isFirstRender.current.deps)){
        isFirstRender.current = {
            value : cb(),
            deps
        };

        console.log('hiihihi')
    }
}

export default useCustomEffect;