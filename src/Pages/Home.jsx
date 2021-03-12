import React, {useState}  from 'react'
import NavBar from '../Components/NavBar'
import SearchBar from '../Components/SearchBar'
import bgPic from '../Images/eggs-toast.jpg'
import {useHistory} from 'react-router-dom'


export default function Home(){
  let history = useHistory()
  const [title, setTitle] = useState('')
  function handleSubmit(event){
    event.preventDefault()
    history.push(`/results?query=${title}`)
    setTitle('')
  }

    return(
        <div style={{fontFamily: 'Rammetto One', height:'100vh', backgroundPosition:'center', backgroundImage:`url(${bgPic})`, backgroundSize: 'cover'}}>
        <div style={{backgroundColor: 'rgba(176, 186, 118, 0.3)', height:'100%'}}>
            <NavBar />
            <div style={{opacity: '1', display: 'flex', alignItems: 'center',  paddingTop: 200, flexDirection: 'column', width:'100%'}}>
              <div style={{width: '60%' }}>
                <SearchBar />
              </div>
              <div >
              </div>
            </div>
        </div>
        </div>
    )
}