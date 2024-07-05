import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';

const InfiniteScroll = () => {

    const [memes, setMemes] = useState([]); 
    const [showShimmer, setShowShimmer] = useState(true);

    const fetchData = async() => {
        setShowShimmer(true);
        const data = await fetch('https://meme-api.com/gimme/20');
        const res = await data.json();

        setMemes((memes) => [...memes, ...(res.memes)]);
        setShowShimmer(false);
    }

    const handleScroll =() => {
        if(window.scrollY + window.innerHeight >= document.body.scrollHeight-20){
            fetchData();

        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        fetchData();

        return () => window.removeEventListener('scroll', handleScroll);
        
    }, [])

  return (
    <div style={{width:'100vw', height:'100vh', margin:'auto'}}>

        <h1>MEMES</h1>

        {   
            memes.map((val, ind) => {
                return <MemeCard key={ind} data={val.author} img={val.url}/>
            })
        } 

        {showShimmer && (new Array(20).fill()).map((val, ind) => {
            console.log(val)
            return <Shimmer key={ind}/>
        })}

        

    </div>
  )
}

export default InfiniteScroll