import React, {useEffect, useState}  from 'react'
import PostForm from '../Components/PostForm'
import PostList from '../Components/PostList'
import PostModal from '../Components/PostModal'
import NavBar from '../Components/NavBar'
import {Container, Row, Col} from 'react-bootstrap'
import SearchBar from '../Components/SearchBar'

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
        <div>
            <NavBar />
            <Container>
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
            </Container>
    </div>
    )
}