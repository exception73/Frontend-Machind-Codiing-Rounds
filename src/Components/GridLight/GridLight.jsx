import React, { useEffect, useState } from 'react';

const grid = [
    [1 , 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1, 1]
];

const GridLight = () => {
    const [clickedArr, setClickedArr] = useState([]);
    const [maxSize, setMaxSize] = useState(0);
    const [ttl, setTtl] = useState(0);

    useEffect(() => {
        let total = 0;
        let max = 0;

        grid.forEach((val) => {
            val.forEach(value => {
                total += value;
            });
        });

        grid.forEach(arr => {
            if (arr.length > max) {
                max = arr.length;
            }
        });

        setMaxSize(max);
        setTtl(total);
    }, []); 

    const handleRemove = () => {
        let neworders = [...clickedArr];
        const timer = setInterval(() => {
            setClickedArr((clickedArr) => {
                neworders = [...clickedArr]
                neworders.pop();
                if(neworders.length === 0){
                    clearInterval(timer);
                }
                console.log(neworders)
                return neworders;
            })
        }, 400)
        

    }



    return (
        <div>
            <div>
                Click on each cell once each cell turned on then it will automatically gets off.
            </div>
            {grid.map((val, ind) => (
                <div key={ind} style={{ marginBottom: '8px' }}>
                    {val.map((value, index) => {
                        const isSelected = clickedArr.includes(ind * maxSize + index);
                        return (
                            <div
                                onClick={(e) => {
                                    if (isSelected) return;
                                    setClickedArr([...clickedArr, ind * maxSize + index]);
                                    console.log(clickedArr.length+1, ttl);
                                    if(clickedArr.length+1 === ttl){
                                        handleRemove();
                                    }
                                }}
                                key={ind * maxSize + index}
                                style={{
                                    display: 'inline-block',
                                    background: value ? (isSelected ? 'green' : 'white') : '',
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '2px',
                                    margin: '4px'
                                }}
                                className={isSelected ? 'selected' : ''}
                            >
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default GridLight;
