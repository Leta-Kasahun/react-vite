import React from 'react'

function Button() {
    const styles={
    backgroundColor: "#6e8efb",
    borderRadius: "8px",
    border: "none",
    padding: "8px",
    maxWidth: "20%",
    margin:"20%",
    color:"white",
    fontSize: "large"
    }
  return (
    <div>

<button style={styles}>subscribe</button>
    </div>
  )
}

export default Button