import React, { useEffect, useState } from 'react';

const SelectableGrid = ({ cols = 10 }) => {
    const [isMouseDown, setisMouseDown] = useState(false);
    const [selectedBox, setSelectedBox] = useState([]);
    const [beginBox, setBeginBox] = useState(null);

    const handleMouseDown = (id) => {
        setisMouseDown(true);
        setBeginBox(id);
    };

    

    const handleMouseEnter = (id) => {
        if (isMouseDown) {
            const startBox = beginBox;
            const endBox = id;

            const startRow = Math.floor((startBox - 1) / cols);
            const startCol = (startBox - 1) % cols;
            const endRow = Math.floor((endBox - 1) / cols);
            const endCol = (endBox - 1) % cols;

            const minRow = Math.min(startRow, endRow);
            const maxRow = Math.max(startRow, endRow);
            const minCol = Math.min(startCol, endCol);
            const maxCol = Math.max(startCol, endCol);

            const selected = [];
            for (let row = minRow; row <= maxRow; row++) {
                for (let col = minCol; col <= maxCol; col++) {
                    selected.push(row * cols + col + 1);
                }
            }

            setSelectedBox(selected);
        }
    };

    const handleMouseUp = () => {
        setisMouseDown(false);
        setBeginBox(null);
    };

    return (
        <div>
            <h3>Selectable Grid</h3>

            <div onMouseUp={handleMouseUp} style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, userSelect: 'none' }}>
                {new Array(cols * 10).fill().map((item, id) => {
                    return (
                        <p
                            onMouseDown={() => handleMouseDown(id + 1)}
                            onMouseEnter={() => handleMouseEnter(id + 1)}
                            style={{
                                margin: 2,
                                backgroundColor: selectedBox.includes(id + 1) ? '#4CAF50' : '#2C3E50',
                                color: selectedBox.includes(id + 1) ? '#fff' : '#BDC3C7',
                                width: 60,
                                height: 60,
                                fontSize: '20px',
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                border: '1px solid #34495E',
                                cursor: 'pointer',
                                transition: 'background-color 0.4s, color 0.4s',
                            }}
                            key={id}
                        >
                            {id + 1}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default SelectableGrid;
