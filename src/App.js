import './App.css'
import AlertManager, { useAlertReducer } from './components/AlertManager'
import AlertExample from './components/AlertExample'
import React from 'react'


function App() {
  const [state, dispatch] =  useAlertReducer()

  return (
    <div className="App">
      <AlertManager alerts={ state }/>
      <AlertExample dispatch={ dispatch }/>
    </div>
  )
}

export default App
