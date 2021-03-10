import React, {useEffect, useState}  from 'react'
import PostForm from '../Components/PostForm'
import PostList from '../Components/PostList'
import PostModal from '../Components/PostModal'
import NavBar from '../Components/NavBar'
import {Container, Row, Col, Button} from 'react-bootstrap'
import SearchBar from '../Components/SearchBar'
import bgPic from '../Images/eggs-toast.jpg'

export default function Home(){

  
    return(
        <div style={{fontFamily: 'Rammetto One', height:'100vh', backgroundPosition:'center', backgroundImage:`url(${bgPic})`, backgroundSize: 'cover'}}>
        <div style={{backgroundColor: 'rgba(176, 186, 118, 0.3)', height:'100%'}}>
            <NavBar />
            <div style={{opacity: '1',display: 'flex', alignItems: 'center',  paddingTop: 200, flexDirection: 'column', width:'100%'}}>
              <div style={{width: '60%' }}>
                <SearchBar />
              </div>
              <div >
                <Button  style={{ marginTop: 80, borderRadius: 20, border: 0, backgroundColor: "#EBD489", color:'black', fontWeight:'bold', width: '250px', height: '70px', fontSize: 30}}>Search</Button>
              </div>
            </div>
        </div>
        </div>
    )
}