import React, {useEffect, useState}  from 'react'
import PostForm from '../Components/PostForm'
import PostList from '../Components/PostList'
import PostModal from '../Components/PostModal'
import NavBar from '../Components/NavBar'
import {Container, Row, Col, Button} from 'react-bootstrap'
import SearchBar from '../Components/SearchBar'
//import bgPic from '../Images/eggs-toast.jpg'
import {useHistory} from 'react-router-dom'


export default function Home(){
  let history = useHistory()
  const [title, setTitle] = useState('')
  function handleSubmit(event){
    event.preventDefault()
    history.push(`/results?query=${title}`)
    setTitle('')
  }
  function getTitle(event){
    event.preventDefault()
    history.push(`/results?query=${title}`)
    setTitle('')
  }
  //backgroundImage:`url(${bgPic})`

    return(
        <div style={{fontFamily: 'Rammetto One', height:'100vh', backgroundPosition:'center', backgroundSize: 'cover'}}>
        <div style={{backgroundColor: 'rgba(176, 186, 118, 0.3)', height:'100%'}}>
            <NavBar />
            <div style={{opacity: '1',display: 'flex', alignItems: 'center',  paddingTop: 200, flexDirection: 'column', width:'100%'}}>
              <div style={{width: '60%' }}>
                <SearchBar />
              </div>
              <div >
                <Button getTitle = {getTitle} onClick={handleSubmit} style={{ marginTop: 80, borderRadius: 20, border: 0, backgroundColor: "#EBD489", color:'black', fontWeight:'bold', width: '250px', height: '70px', fontSize: 30}}>Search</Button>
              </div>
            </div>
        </div>
        </div>
    )
}