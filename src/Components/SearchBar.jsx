import React, {useState} from 'react' 
import {Form, Button, Card} from 'react-bootstrap'

export default function SearchBar(){
    const [title, setTitle] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        setTitle('')
        
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
            onChange= {(event) => setTitle(event.target.value)}/>
    </Form.Group>
    </>
    )}
    <hr></hr>
</Form>
)
}