import React, {useState} from 'react'
import SearchIcon from '../assets/search.svg'

function SearchPanel() {
  const [inputValue, setInputValue] = useState('')

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "white",
    borderRadius: '40px',
    height: '35px',
  }

  const SeachIconStyle = { 
    width: '35px',
    height: '35px',
    padding: '5px',
    cursor: 'pointer',
    boxSizing: 'border-box',
    flexShrink: 0,
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const inputStyle = {
    border: 'none',
    outline: 'none',
    height: '100%',
    fontSize: '16px',
    boxSizing: 'border-box',
    flexGrow: 1,
    borderRadius: '0 40px 40px 0',
  }

  return (
    <div style={containerStyle}>
      <img 
        src={SearchIcon} 
        alt="search icon"
        style={SeachIconStyle}
      />
      
      <input 
        style={inputStyle}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Поиск..."
        autoFocus
      />
    </div>
  )
}

export default SearchPanel