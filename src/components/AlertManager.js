import React, {useReducer} from 'react'
import AlertComponent from './AlertComponent'
import '../css/AlertManager.css'

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            const addState = {...state}
            addState[action.payload.alertType].push(action.payload) 
            return addState
        case 'remove':
            const removeState = {...state}
            removeState[action.payload.alertType] = state[action.payload.alertType].filter((alert) => alert.id !== action.payload.id )
            return removeState
        case 'fade':
            const fadeState = {...state}
            fadeState[action.payload.alertType].forEach((alert) => {
                if(alert.id === action.payload.id) {
                    alert.className = "fade"
                }} )
            return fadeState
        default:
            return state
    }
}

export function useAlertReducer() {
    return useReducer(reducer, {info:[],success:[],error:[],warning:[]})
}

function AlertManager({alerts}) {
    
    return (
        
        <div id="alertManager">
            {/*keep alerts grouped together by type and in order of importance*/}
            {Object.keys(alerts).map((alertType) => 
                alerts[alertType].map((alert) => 
                    <AlertComponent alert={alert} key={alert.id}/>
            ))}
        </div>
    )
}

export default AlertManager
