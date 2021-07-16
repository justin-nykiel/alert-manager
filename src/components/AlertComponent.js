import React, {useContext} from 'react'
import {Link, Zoom} from '@material-ui/core'
import {Alert, AlertTitle} from '@material-ui/lab'
import  {DispatchContext}  from '../App.js'
import '../css/AlertComponent.css'

function AlertComponent({ alert }) {
  
  if(alert.link){
    return (
      <Zoom in={true}><Alert onClose={() => {alertDispatch({ type: 'remove', payload: {id:alert.id, alertType:alert.alertType }})}} className={alert.className} severity={alert.alertType || "info"} ><AlertTitle className={"alert"}><Link target="_blank" rel="nofollow" href={alert.link}>{alert.alertTitle}</Link></AlertTitle>{alert.text}</Alert></Zoom>
    )
  } 
  return <Zoom in={true}><Alert onClose={() => {alertDispatch({ type: 'remove', payload: {id:alert.id, alertType:alert.alertType }})}} className={alert.className} severity={alert.alertType || "info"} ><AlertTitle>{alert.alertTitle}</AlertTitle>{alert.text}</Alert></Zoom>
}

export default AlertComponent
