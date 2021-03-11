import React, {useEffect, useState} from 'react'
import{Modal, Spinner} from 'react-bootstrap'

export default function PostModal(props){
    const {postId, show, closePostModal} = props
    //const [post, setPost] = useState(null)
    
    const post = {
        id: 424571,
        title: "Bacon King Burger",
        restaurantChain: "Burger King",
        nutrition: {
            nutrients: [
                {
                    "name": "Fat",
                    "amount": 69,
                    "unit": "g",
                    "percentOfDailyNeeds": 30
                },
                {
                    "name": "Protein",
                    "amount": 57,
                    "unit": "g",
                    "percentOfDailyNeeds": 35
                },
                {
                    "name": "Calories",
                    "amount": 1040,
                    "unit": "cal",
                    "percentOfDailyNeeds": 50
                },
                {
                    "name": "Carbohydrates",
                    "amount": 48,
                    "unit": "g",
                    "percentOfDailyNeeds": 35
                }
            ]},
        
        // images: [
        //     "https://images.spoonacular.com/file/wximages/424571-90x90.png",
        //     "https://images.spoonacular.com/file/wximages/424571-312x231.png",
        //     "https://images.spoonacular.com/file/wximages/424571-636x393.png"
        // ]
    }
    


// useEffect (() =>{
//   setLoading(true)
//   fetch(`https://api.spoonacular.com/food/menuItems/${postId}`)
//   .then(response => response.json())
//   .then((data) => {
//     setPost(data)
//     setLoading(false)
//   })
// }, [setLoading, setPost])

    // useEffect(()=> {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    //     .then(response => response.json())
    //     .then(json => setPost(json))
    // }, [setPost, postId])

    if(!post){
        return <Spinner animation="border" />
    }
    return (
        <Modal show={show} onHide={closePostModal}>
            <Modal.Header closeButton>
                <Modal.Title>{post.title}</Modal.Title>
                <Modal.Body>
                    <h1>{post.restaurantChain}</h1>
                    <img src={"https://images.spoonacular.com/file/wximages/424571-90x90.png"} />
                </Modal.Body>
            </Modal.Header>
            
            {/* // <img src={post?.images[1]} /> */}
            <Modal.Body>{post?.body}</Modal.Body>
        </Modal>
    )
}