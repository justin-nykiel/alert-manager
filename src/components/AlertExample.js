import {React,useState} from 'react'
import {Button, TextField} from '@material-ui/core'
import {v4 as uuidv4} from 'uuid'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import '../css/AlertExample.css'

const DEFAULT_ALERT = {
    timeLimit: 10,
    text: "",
    link: "",
    alertType: "info",
    id: "",
    alertTitle: ""
}

function AlertExample({dispatch}) {
    const [formData, setFormData] = useState({ ...DEFAULT_ALERT })

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
 

    const onSubmit = (e) => {
        e.preventDefault()
        if(!formData.id) {
            formData.id = uuidv4()
        }
        dispatch({type: 'add', payload: formData})
        setTimeout(() => {
            dispatch({ type: 'remove', payload: formData.id })
        }, formData.timeLimit * 1000)
        setFormData({ ...DEFAULT_ALERT })
    }

    return (
        <div id="alertExample">
            <form autoComplete="off" onSubmit={onSubmit} >
                <TextField name="timeLimit" label="Time Limit in seconds" type="number" min="1" variant="outlined" value={formData.timeLimit} onChange={handleChange}/>
                <TextField name="text" label="Text" type="search" variant="outlined" value={formData.text} onChange={handleChange}/>
                <TextField name="link" label="Link" type="search" variant="outlined" value={formData.link} onChange={handleChange}/>
                <InputLabel >Alert Type</InputLabel>
                    <Select
                        name="alertType"
                        value={formData.alertType || "info"}
                        onChange={handleChange}
                    >
                        <MenuItem value={"error"}>error</MenuItem>
                        <MenuItem value={"warning"}>warning</MenuItem>
                        <MenuItem value={"info"}>info</MenuItem>
                        <MenuItem value={"success"}>success</MenuItem>
                    </Select>
                <TextField name="id" label="ID" type="search" variant="outlined" value={formData.id} onChange={handleChange}/>
                <TextField name="alertTitle" label="Alert Title" type="search" variant="outlined" value={formData.alertTitle} onChange={handleChange}/>
                <Button type="submit" variant="contained" color="primary" disableElevation>Create Alert</Button>
            </form>
        </div>
    )
}

export default AlertExample
