import React, {useState} from 'react' 
import {Form} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

export default function SearchBar(props){
    const {getTitle} = props
    const [title, setTitle] = useState('')
    let history = useHistory()

    function handleSubmit(event){
        event.preventDefault()
        history.push(`/results?query=${title}`)
        window.location.reload()
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
                onChange = {(event) => setTitle(event.target.value)}/>
        </Form.Group>
        <div style={{display:'flex', justifyContent:'center'}}>
        {history.location.pathname == '/results' ? null : <button onClick={handleSubmit} style={{ marginTop: 80, borderRadius: 20, border: 0, backgroundColor: "#EBD489", color:'black', fontWeight:'bold', width: '250px', height: '70px', fontSize: 30}}>Search</button> }
        </div>
        </>
    )}  
    </Form>
)
}
