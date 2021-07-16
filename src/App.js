import './App.css'
import AlertManager, { useAlertReducer } from './components/AlertManager'
import AlertExample from './components/AlertExample'
import React from 'react'


export const DispatchContext = React.createContext();


function App() {
  const [state, dispatch] =  useAlertReducer()

  return (
    <DispatchContext.Provider value={dispatch}>
          <AlertManager alerts={state}/>
          <AlertExample/>
    </DispatchContext.Provider>
  )
}

export default App
