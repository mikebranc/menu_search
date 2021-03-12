import React, {useEffect, useState} from 'react'
import{Modal, Spinner} from 'react-bootstrap'
import '../style.css'

export default function PostModal(props){
    const {postId, show, closePostModal} = props
    const [post, setPost] = useState(null)

useEffect (() =>{  
  fetch(`https://api.spoonacular.com/food/menuItems/${postId}?apiKey=26e16444248b4f4ab270b86a4f128fd9`)
  .then(response => response.json())
  .then((data) => {
    setPost(data) 
  })
}, [setPost, postId])

    if(!post){
        return <Spinner animation="border" />
    }
    return (
    <Modal size='xl' show={show} onHide={closePostModal}>
            <Modal.Header style={{ backgroundColor: '#EEEBE6'}} closeButton>
                <Modal.Title style={{ color: 'black', width: '100%',display:'flex', justifyContent:'center', fontSize: '50px', fontFamily:'Roboto'}}>{post.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ color: 'black', fontFamily:'Roboto', fontWeight: '300', display: 'flex', justifyContent: 'center',alignItems:'center', backgroundColor: '#EEEBE6', width: '100%', flexDirection: 'column', paddingBottom:'20px'}}>
                    <h1 style={{textAlign: 'center', marginBottom:'20px', fontFamily:'Roboto', fontWeight: '300'}}>{post.restaurantChain}</h1>
                    <div style={{width:'100%', display: 'flex'}}>
                        <div>
                            {!post.images ? <Spinner animation="border" /> : <img style={{ height: '640 px', width: '360px',backgroundColor: 'white', borderRadius:'20px'}} src={post.images[2]}></img>}
                        </div>
                        <div style={{backgroundColor: '#4249E7', width:'100%', height: '100%', borderRadius:'10px', marginLeft:'28px'}}>
                            <h1 style={{ paddingTop: '20px',paddingBottom: '10px', color: 'white', textAlign: 'center'}}>Nutritional Info</h1>
                            {!post.nutrition ? <Spinner animation="border" /> : <div>
                            <table style={{fontSize:'30px', padding:'45px', width:'100%'}}>
                                <tr>
                                    <th></th>
                                    <th>Amount</th>
                                    <th>% of Daily Needs</th>
                                </tr>
                                <tr>
                                    <td className='nutritionLabel'>Fat</td>
                                    <td>{post.nutrition.nutrients[0].amount}{post.nutrition.nutrients[0].unit}</td>
                                    <td>
                                        <div className='dailyValue'>
                                        <div style={{borderRadius: '10px', backgroundColor: '#EBD489', height: '100%', width:`${post.nutrition.nutrients[0].percentOfDailyNeeds}%`}}></div> 
                                        </div>
                                    </td>
                                    <td><span className = 'dailyValueDetail'>{post.nutrition.nutrients[0].percentOfDailyNeeds}%</span></td>
                                </tr>
                                <tr>
                                    <td className='nutritionLabel'>Carbs</td>
                                    <td>{post.nutrition.nutrients[1].amount}{post.nutrition.nutrients[1].unit}</td>
                                    <td>
                                        <div className='dailyValue'>
                                        <div style={{borderRadius: '10px', backgroundColor: '#EBD489', height: '100%', width:`${post.nutrition.nutrients[1].percentOfDailyNeeds}%`}}></div> 
                                        </div>
                                    </td>
                                    <td><span className = 'dailyValueDetail'>{post.nutrition.nutrients[1].percentOfDailyNeeds}%</span></td>
                                </tr>
                                <tr>
                                    <td className='nutritionLabel'>Calories</td>
                                    <td>{post.nutrition.nutrients[2].amount}</td>
                                    <td>
                                        <div className='dailyValue'>
                                        <div style={{borderRadius: '10px', backgroundColor: '#EBD489', height: '100%', width:`${post.nutrition.nutrients[2].percentOfDailyNeeds}%`}}></div> 
                                        </div>
                                    </td>
                                    <td><span className = 'dailyValueDetail'>{post.nutrition.nutrients[2].percentOfDailyNeeds}%</span></td>
                                </tr>
                                <tr>
                                    <td className='nutritionLabel'>Protien</td>
                                    <td>{post.nutrition.nutrients[3].amount}{post.nutrition.nutrients[3].unit}</td>
                                    <td>
                                        <div className='dailyValue'>
                                        <div style={{borderRadius: '10px', backgroundColor: '#EBD489', height: '100%', width:`${post.nutrition.nutrients[3].percentOfDailyNeeds}%`}}></div> 
                                        </div>
                                    </td>
                                    <td><span className = 'dailyValueDetail'>{post.nutrition.nutrients[3].percentOfDailyNeeds}%</span></td>
                                </tr>
                                </table>
                            </div>}
                        </div>
                    </div>       
            </Modal.Body>
    </Modal>
    )
}