import React, {useEffect, useState}  from 'react'
import {Container, Row, Col, Spinner} from 'react-bootstrap'
import NavBar from '../Components/NavBar'
import SearchBar from '../Components/SearchBar'
import PostForm from '../Components/PostForm'
import PostList from '../Components/PostList'
import PostModal from '../Components/PostModal'
import { useLocation} from 'react-router-dom'


//import {posts, deletePost, displayPostInModal} from '../Components/PostList'

export default function Results(){
  const [posts, setPosts] = useState([])
  const[show, setShow] = useState(false)
  const[postId, setPostId] = useState('')
  const[loading, setLoading] = useState(false)
  const[image, setImage] = useState(null)
  let location = useLocation();
  const menuQuery = new URLSearchParams(location.search).get('query')

  //add menuQuery below
// useEffect (() =>{
//   setLoading(true)
//   fetch(`https://api.spoonacular.com/food/menuItems/search?number=8&query=${menuQuery}&apiKey=26e16444248b4f4ab270b86a4f128fd9`)
//   .then(response => response.json())
//   .then((data) => {
//     setPosts(data.menuItems)
//     setLoading(false)
//   })
// }, [setLoading, setPosts])


useEffect(() => {
  setLoading(true)
  fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => {
  setPosts(json)
  setLoading(false)
 })
},[setLoading, setPosts])

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

// if(!image){
//   return <Spinner animation="border" />
// }

    return (
        <>
        <NavBar />
             <Container>
                <Row className="justify-content-md-center" style={{marginTop: 60 }}>
                    <Col xs lg="12">
                        <h1 style={{textAlign: 'center', fontFamily: 'Rammetto One'}}>Search Results</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{marginTop: 20 }}>
                    <Col xs lg="12">
                        <SearchBar/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{marginTop: 20 }}>
                    <Col xs lg="12">
                        <PostList posts={posts} displayPostInModal = {displayPostInModal} />
                    </Col>
                </Row>
                <PostModal closePostModal = {closePostModal} show={show} postId = {postId}/>
            </Container>
        
        </>
      )
}