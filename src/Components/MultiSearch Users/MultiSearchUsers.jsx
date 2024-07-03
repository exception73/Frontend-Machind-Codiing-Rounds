import React, { useRef, useState } from 'react'

import debounce from '../../hooks/Debounce/useDebounce';

const MultiSearchUsers = () => {

    const [users, setUsers] = useState([])
    const [searchedUsers, setSearchedUsers] = useState([]);
    const [error, setError] = useState(null);

    const inputRef = useRef(null);

   async function fetchUsers(e){
    console.log(e)
        const data = await fetch(`https://dummyjson.com/users/search?q=${e.target.value}`)
        const res = await data.json();

        const na = res.users.map((val) => {
            return val.firstName;
        })
        
       na.length ?  (setSearchedUsers(na.slice(1, 5)), setError(null)) : (setError('No user found'), setSearchedUsers([]))
    }



    const handleInput =  debounce(fetchUsers, 300)


    const handleAddUser =(val) => {
        setUsers([...users, val])
        setSearchedUsers([]);
       
        inputRef.current.value = "";
        inputRef.current.focus();
    }

    const handleKeyDown = (e) => {
        if(e.key  == 'Backspace'){
            if(e.target.value) return;
            setUsers(users.slice(0, users.length-1))
        }
    }

  return (
    <div>

        <p>Search user name here and you can select multipe users here</p>
        <div style={{backgroundColor:'#000907'}}>
        {
            users.map((val, ind)=>{
                return <span key={ind} style={{backgroundColor:'gray', borderRadius:20, padding:"10px 20px", margin:2}}>{val}</span>
            })
        }
        <input autoFocus onKeyDown={handleKeyDown} style={{padding:"10px 20px",  backgroundColor:'grey' ,fontSize:20, border:'none', outline:'none'}} ref={inputRef} type='text' onInput={handleInput}/>

        </div>

        <div>
            {searchedUsers.map((val, ind) => {
                return <p onClick={() => handleAddUser(val)} key = {ind}>{val}</p>
            })}
        </div>

        {error? <p style={{color:'red'}}>{error}</p>: null}

    </div>
  )
}

export default MultiSearchUsers