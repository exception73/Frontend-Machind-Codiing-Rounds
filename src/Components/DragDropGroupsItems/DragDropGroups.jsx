import React from 'react'

const data = [
    {title : 'group1', items :['1', '2', '3']},
    {title : 'group2', items : ['4', '5']}
]

const DragDropGroups = () => {
  return (
    <div>

        {data.map((grp, grpI) => (
            <div>
                {
                    grp.items.map((item, itemI) => (
                        <div style={{}}>
                            {item}
                        </div>
                    ))
                }
            </div>
        ))}

    </div>
  )
}

export default DragDropGroups