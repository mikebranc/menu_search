import React, {useState} from 'react' 
import {Form, Button, Card} from 'react-bootstrap'

export default function SearchBar(){
    const [title, setTitle] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        setTitle('')
    }
return(
    <Form onSubmit = {handleSubmit}>
    {(
        <>
        <Form.Group>
        <Form.Control 
            type='input' 
            placeholder='Search from over 115,000 menu items' 
            value={title}
            onChange= {(event) => setTitle(event.target.value)}/>
    </Form.Group>
    <Button variant='primary' type='submit'>Search</Button>
    </>
    )}
    <hr></hr>
</Form>
)
}