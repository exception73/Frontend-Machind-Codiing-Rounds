import { useState } from 'react'

import handlePassGenerate from './GeneratePassword';



function PasswordGenerator() {

  const checkboxes = [
    {title:"number", state:false},
    {title:"upperCase", state:false},
    {title:"SpecialChar", state:false}
  ]

  const [passSettings, setPassSettings] = useState(checkboxes);
  const [passlen, setpasslen] = useState(10);

  const [pass, setPass] = useState('');

  
  return (
    <div style={{width : 400}}>

      <div style={{backgroundColor:'grey', display:'flex', justifyContent:'space-between'}}>
        <p>{pass}</p>
        <button>Copy</button>
      </div>

      <div style={{width : 400, display: 'flex', flexDirection: 'column'}}>
        <span>Length</span>
        <input type="range" value={passlen} onChange ={(e) => setpasslen(e.target.value)} min={6} max={20} />
        <div style={{display:'flex', justifyContent: 'space-between'}}>
          <span>6</span>
          <span>20</span>
        </div>
      </div>


      <div>
        { 
        passSettings.map((val, key) => {
          // console.log(val);
          return (
            <div key={key}>
                <input onChange={() => {
                  const nset = [...passSettings];
                  nset[key].state = !nset[key].state;
                  setPassSettings(nset)
                  console.log(passSettings)

                  

                }} type="checkbox" checked={val.state} />
                <label>{val.title}</label>
             </div>
          )
        })
        }

      </div>





      <button onClick={() => handlePassGenerate(passSettings,passlen, setPass)}>Generate</button>

    </div>
  )
}

export default PasswordGenerator
