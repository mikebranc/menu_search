import React, {useEffect, useState} from 'react'
import{Modal, Spinner} from 'react-bootstrap'

export default function PostModal(props){
    const {postId, show, closePostModal} = props
    const [post, setPost] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(json => setPost(json))
    }, [setPost, postId])

    useEffect(() => { 
        fetch(`https://jsonplaceholder.typicode.com/photos/${postId}`)
    .then(response => response.json())
    .then(json => setImage(json))
     },[setImage, postId])

    if(!post || !image){
        return <Spinner animation="border" />
    }
    return (
        <Modal show={show} onHide={closePostModal}>
            <Modal.Header closeButton>
                <Modal.Title>{post?.title}</Modal.Title>
            </Modal.Header>
            <img src={image.url} alt="description"></img>
            <Modal.Body>{post?.body}</Modal.Body>
        </Modal>
    )
}