
// import React, { useEffect, useState } from 'react'

// const btn = [7, 8, 9,, '*', 4, 5, 6, '-', 1, 2, 3,  '+',  '/', 0, '.', '='];
// const btn1 = ['7', '8', '9',, '*', '4', '5', '6', '-', '1', '2', '3',  '+',  '/', '0', '.', '='];

// const Calculator = () => {
    
//     const [expression, setExpression] = useState(0);


//     useEffect(() => {
//         window.addEventListener('keydown', (e) => {
//         if(e.key == '='){
//             console.log(expression)
//             setExpression(eval(() => {return expression;}))
//         }
//         else  if(btn1.slice(0, btn.length-1).includes(e.key)){
//             // console.log('hi')
//             setExpression((x) => {return x + e.key})
//           }
//         })
//     }, [expression])

//     const handleClick = () => {

//     }

//   return (
//     <div>


//         <div style={{backgroundColor:'grey', borderRadius:'4px', height:60, fontSize:'20px', display:'flex', justifyContent:'flex-end', alignItems:'center', margin:10}}>
//             <p style={{padding:10, overflow:'auto'}}>{expression}</p>
//         </div>

//         <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)'}}>
//             {btn.map((val, ind) => {
//                 return <button onClick={handleClick} style={{width:70, height:70,margin:2, color:typeof val != 'number' ? 'orange' : 'white', fontSize:'20px'}}>{val}</button>
//             })}
           
//         </div>
//         <button onClick={()=>setExpression(0)} style={{width:"100%", marginTop:2}}>Clear</button>


//     </div>
//   )
// }

// export default Calculator

import React, { useEffect, useState } from 'react';

const btn = ['7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '/', '0', '.', '='];

const Calculator = () => {
    const [expression, setExpression] = useState('');

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                try {
                    setExpression(eval(expression).toString());
                } catch {
                    setExpression('Error');
                }
            } else if (btn.includes(e.key)) {
                setExpression((prev) => prev + e.key);
            } else if (e.key === 'Backspace') {
                setExpression((prev) => prev.slice(0, -1));
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [expression]);

    const handleClick = (val) => {
        if (val === '=') {
            try {
                setExpression(eval(expression).toString());
            } catch {
                setExpression('Error');
            }
        } else {
            setExpression((prev) => prev + val);
        }
    };

    return (
        <div>
            <div style={{ backgroundColor: 'grey', borderRadius: '4px', height: 60, fontSize: '20px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: 10 }}>
                <p style={{ padding: 10}}>{expression}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                {btn.map((val, ind) => (
                    <button key={ind} onClick={() => handleClick(val)} style={{ width: 70, height: 70, margin: 2, color: isNaN(val) ? 'orange' : 'white', fontSize: '20px' }}>
                        {val}
                    </button>
                ))}
            </div>
            <button onClick={() => setExpression('')} style={{ width: '100%', marginTop: 2 }}>Clear</button>
        </div>
    );
};

export default Calculator;
