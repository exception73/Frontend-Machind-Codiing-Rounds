import React, { useContext } from 'react'

import { Theme } from '../../Contexts/ThemeContext';
const MultiTheme = () => {

  const {theme, setTheme} = useContext(Theme);

  return (
    <div>

        <button onClick={() => setTheme(!theme)}> Change Theme </button>

    </div>
  )
}

export default MultiTheme