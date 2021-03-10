import React, {useState} from 'react'
import {Card, Button, CardColumns} from 'react-bootstrap'
export default function PostList(props){
    const { posts, deletePost, displayPostInModal, image } = props
    return ( 
        <div style={{paddingTop: 0}}>
            <CardColumns>
                {posts && 
                    posts.map((post) =>(
                    <Card key ={post.id} className="text-center" style={{cursor: 'pointer'}} >
                        <Card.Body onClick = {() => displayPostInModal(post.id)}>
                            {/* <Card.Title> {post.title.toUpperCase()}</Card.Title> */}
                            <img style ={{marginBottom:20}} src={image} alt="description"></img>
                            <Card.Title style={{fontWeight: 'bold', textAllign: 'center'}}>The Burger</Card.Title>
                            <Card.Text>{`${post.body.slice(0,20)}...`}</Card.Text>
                        </Card.Body>
                    </Card>
                    ))}
            </CardColumns>
        </div>
    )
}
