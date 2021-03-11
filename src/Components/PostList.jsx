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
                    <Card key ={post.id} className="text-center" style={{height: '400px', cursor: 'pointer'}} >
                        <Card.Body onClick = {() => displayPostInModal(post.id)}>
                            {/* <Card.Img variant="top" src={post.image}/> */}
                            <Card.Img variant='top' style={{height:'250px', width:'300px', objectFit: 'cover'}} src='https://images.spoonacular.com/file/wximages/424571-636x393.png'/>
                            <Card.Title style={{fontWeight: 'bold', textAllign: 'center'}}>{post.title}</Card.Title>
                            <Card.Body>In-N-Out</Card.Body>
                            <Card.Text>{post.restaurantChain}</Card.Text>
                        </Card.Body>
                    </Card>
                    ))}
            </CardColumns>
        </div>
    )
}
