import { useRef } from "react";


export default function useThrotlle(cb, delay){

    let timer = useRef(0);
   return function(){

    if(Date.now()-timer.current>delay){
        timer.current = Date.now();
 
        cb();
    }
   }

}