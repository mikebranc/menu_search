import React, {useEffect, useState}  from 'react'
import PostForm from '../Components/PostForm'
import PostList from '../Components/PostList'
import PostModal from '../Components/PostModal'
import NavBar from '../Components/NavBar'
import {Container, Row, Col, Button} from 'react-bootstrap'
import SearchBar from '../Components/SearchBar'
import bgPic from '../Images/eggs-toast.jpg'

export default function Home(){
    const [posts, setPosts] = useState([])
    const[show, setShow] = useState(false)
    const[postId, setPostId] = useState('')
    const[loading, setLoading] = useState(false)

  useEffect (() =>{
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((json) => {
      setPosts(json)
      setLoading(false)
    })
  }, [setLoading, setPosts])
  function addPostToList(newPost){
    setPosts([newPost, ...posts])
  }
  function deletePost(postId){
    setPosts((prevPosts) => prevPosts.filter((post)=> post.id !== postId))
  }
  function displayPostInModal(postId){
    setPostId(postId)
    setShow(true) 
  }
  function closePostModal(){
    setShow(false)
  }
 
  
    return(
        <div style={{height:'100vh', backgroundPosition:'center', backgroundImage:`url(${bgPic})`, backgroundSize: 'cover'}}>
        <div style={{backgroundColor: 'rgba(176, 186, 118, 0.3)', height:'100%'}}>
            <NavBar />
            <div style={{opacity: '1',display: 'flex', alignItems: 'center', paddingTop: 200, flexDirection: 'column', width:'100%'}}>
              <div style={{width: '50%' }}>
                <SearchBar />
              </div>
              <div >
                <Button size = 'lg' style={{backgroundColor: "#EBD489"}}>Search</Button>
              </div>
            </div>
            
            {/* <Container>
                <Row className="justify-content-md-center" style={{marginTop: 60 }}>
                    <Col xs lg="12">
                        <h1 style={{textAlign: 'center'}}>Blog Posts</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{marginTop: 20 }}>
                    <Col xs lg="12">
                        <SearchBar/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{marginTop: 20 }}>
                    <Col xs lg="12">
                        <PostList posts={posts} deletePost = {deletePost} displayPostInModal = {displayPostInModal}/>
                    </Col>
                </Row>
                <PostModal closePostModal = {closePostModal} show={show} postId = {postId}/>
            </Container> */}
    </div>
    </div>
    )
}