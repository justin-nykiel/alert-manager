import React from 'react'
import {Link} from '@material-ui/core'
import {Alert, AlertTitle} from '@material-ui/lab'

function AlertComponent({ alert }) {
  const component = <Alert severity={alert.alertType || "info"}><AlertTitle>{alert.alertTitle}</AlertTitle>{alert.text}</Alert>
  if(alert.link){
    return (
      <Link target="_blank" rel="nofollow" href={alert.link}>{component}</Link>
    )
  } 
  return component
}

export default AlertComponent
