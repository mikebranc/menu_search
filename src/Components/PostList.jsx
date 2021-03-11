import React, {useState} from 'react'
import {Card, Button, CardColumns, CardGroup } from 'react-bootstrap'
import SearchBar from './SearchBar'
export default function PostList(props){
    const { posts, displayPostInModal } = props
    
    return ( 
        <div style={{paddingTop: 0}}>
            <CardColumns>
                {posts && 
                    posts.map((post) =>(
                    <Card key ={post.id} className="text-center" style={{cursor: 'pointer'}} >
                        <Card.Body onClick = {() => displayPostInModal(post.id)}>
                            <Card.Img variant="top" src={post.image}/>
                            <Card.Title style={{fontWeight: 'bold', textAllign: 'center'}}>{post.title}</Card.Title>
                            <Card.Text>{post.restaurantChain}</Card.Text>
                        </Card.Body>
                    </Card>
                    ))}
            </CardColumns>
        </div>
    )
}
