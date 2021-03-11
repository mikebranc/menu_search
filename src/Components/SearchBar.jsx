import React, {useState, useEfect} from 'react' 
import {Form, Button, Card} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import { matchPath } from "react-router"

   

export default function SearchBar(props){
   
      
    const {getTitle} = props
    const [title, setTitle] = useState('')
    let history = useHistory()
    const query = matchPath(history.location.pathname,{
        path: '/results',
        exact: true,
        strict: false
      })
    //   console.log(query.isExact)


    function handleSubmit(event){
        event.preventDefault()
        history.push(`/results?query=${title}`)
        setTitle('')
    }
    
    function handleChange(event){
        setTitle(event.target.value)
        //getTitle(event.target.value)
    }

return(
    <Form onSubmit = {handleSubmit} style={{width: '100%'}}>
    {(
        <>
        <Form.Group>
            <Form.Control 
                style = {{fontSize:30, padding:10, borderRadius:20 }}
                type='input' 
                placeholder='🔍 Search from over 115,000 menu items' 
                value={title}
                onChange = {handleChange}/>
        </Form.Group>
            <button onClick={handleSubmit} style={{display: query.isExact ? 'null' : 'none', marginTop: 80, borderRadius: 20, border: 0, backgroundColor: "#EBD489", color:'black', fontWeight:'bold', width: '250px', height: '70px', fontSize: 30}}>Search</button> 
        </>
    )}  
    </Form>
)
}
// query ? null :  <button onClick={handleSubmit}>submit</button> 

//<hr></hr>