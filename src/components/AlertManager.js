import {React, useReducer} from 'react'
import AlertComponent from './AlertComponent'
import '../css/AlertManager.css'

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        case 'remove':
            const newState = state.filter((alert) => alert.id !== action.payload )
            return newState
        default:
            return state
    }
}

export function useAlertReducer() {
    return useReducer(reducer, [])
}

function AlertManager({ alerts }) {
    return (
        <div id="alertManager">
            {alerts.map((alert) => {
                return <AlertComponent alert={alert} key={alert.id}/>
            })}
        </div>
    )
}

export default AlertManager
