import React from 'react'

const App = () => {
  console.log("VITE_TEMP_API_KEY: ", import.meta.env.VITE_TEMP_API_KEY);
  return (
    <div>
      <h1>Vite + React</h1>
      <h2>Hello world</h2>
    </div>
  )
}

export default App