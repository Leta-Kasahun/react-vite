import React from 'react'

function ThemeToggle() {
   const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div style={{ background: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#333' }}>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>buttton
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  )
}

export default ThemeToggle