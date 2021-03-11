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
                    <Card key ={post.id} className="text-center" style={{boxShadow: '10px 10px 10px', height: '400px', cursor: 'pointer', backgroundColor: '#EEEBE6', borderRadius:20}} >
                        <Card.Body onClick = {() => displayPostInModal(post.id)}>
                            {/* <Card.Img variant="top" src={post.image}/> */}
                            <Card.Img variant='top' style={{height:'250px', width:'300px', objectFit: 'cover', borderRadius:20}} src={post.image}/>
                            <Card.Title style={{fontWeight: 'bold', textAllign: 'center', fontSize:'200%' }}>{`${post.title.slice(0,25)}...`}</Card.Title>
                            <Card.Text style={{fontSize: '150%'}}>{post.restaurantChain}In-b-out</Card.Text>
                        </Card.Body>
                    </Card>
                    ))}
            </CardColumns>
        </div>
    )
}
