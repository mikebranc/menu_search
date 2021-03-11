import React, {useEffect, useState} from 'react'
import{Modal, Spinner} from 'react-bootstrap'
import '../style.css'

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
                    name: "Fat",
                    amount: 69,
                    unit: "g",
                    percentOfDailyNeeds: 30
                },
                {
                    name: "Protein",
                    amount: 57,
                    unit: "g",
                    percentOfDailyNeeds: 35
                },
                {
                    name: "Calories",
                    amount: 1040,
                    unit: "cal",
                    percentOfDailyNeeds: 50
                },
                {
                    name: "Carbohydrates",
                    amount: 48,
                    unit: "g",
                    percentOfDailyNeeds: 35
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
        <Modal size='xl' show={show} onHide={closePostModal} >
            <Modal.Header style={{ backgroundColor: '#EEEBE6'}} closeButton>
                <Modal.Title style={{ color: 'black', width: '100%',display:'flex', justifyContent:'center', fontSize: '50px', fontFamily:'Roboto'}}>{post.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ color: 'black', fontFamily:'Roboto', fontWeight: '300', display: 'flex', justifyContent: 'center',alignItems:'center', backgroundColor: '#EEEBE6', width: '100%', flexDirection: 'column'}}>
                    <h1 style={{textAlign: 'center'}}>{post.restaurantChain}</h1>
                    <div style={{width:'100%', display: 'flex'}}>
                        <div>
                            <img style={{ backgroundColor: 'white', borderRadius:'20px'}} src={"https://images.spoonacular.com/file/wximages/424571-636x393.png"} />
                        </div>
                        <div style={{backgroundColor: '#4249E7', width:'100%', height: '100%'}}>
                            <h1 style={{ paddingTop: '20px',paddingBottom: '20px', color: 'white', textAlign: 'center'}}>Nutritional Info</h1>
                            <div>
                            <table style={{fontSize:'30px', padding:'45px', width:'100%'}}>
                                <tr>
                                    <th></th>
                                    <th>Amount</th>
                                    <th>% of Daily Needs</th>
                                </tr>
                                <tr>
                                    <td className='nutritionLabel'>Fat</td>
                                    <td>{post.nutrition.nutrients[0].amount}</td>
                                    <td>
                                        <div className='dailyValue'>
                                        <div style={{borderRadius: '10px', backgroundColor: '#EBD489', height: '100%', width:`${post.nutrition.nutrients[0].percentOfDailyNeeds}%`}}></div> 
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='nutritionLabel'>Carbs</td>
                                    <td>{post.nutrition.nutrients[1].amount}</td>
                                    <td>
                                        <div className='dailyValue'>
                                        <div style={{borderRadius: '10px', backgroundColor: '#EBD489', height: '100%', width:`${post.nutrition.nutrients[1].percentOfDailyNeeds}%`}}></div> 
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='nutritionLabel'>Calories</td>
                                    <td>{post.nutrition.nutrients[2].amount}</td>
                                    <td>
                                        <div className='dailyValue'>
                                        <div style={{borderRadius: '10px', backgroundColor: '#EBD489', height: '100%', width:`${post.nutrition.nutrients[2].percentOfDailyNeeds}%`}}></div> 
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='nutritionLabel'>Protien</td>
                                    <td>{post.nutrition.nutrients[3].amount}</td>
                                    <td>
                                        <div className='dailyValue'>
                                        <div style={{borderRadius: '10px', backgroundColor: '#EBD489', height: '100%', width:`${post.nutrition.nutrients[3].percentOfDailyNeeds}%`}}></div> 
                                        </div>
                                    </td>
                                </tr>
                                </table>
                            </div>

                        </div>
                    </div>
                    
            {/* <img src={post?.images[1]} /> */}
            </Modal.Body>
        </Modal>
    )
}