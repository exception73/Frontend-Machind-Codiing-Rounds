function debounce(cb, delay){
    let timer;
    
    return function(...args){
        if(timer) clearTimeout(timer);
        
        timer = setTimeout(() => {
            // let context = args[0];
            // console.log(context)
            cb(...args)

        }, delay)
    }
}

export default debounce