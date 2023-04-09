import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useParams } from 'react-router'

export default function getPostById(event) {
    const [post, setPost] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        let token = localStorage.getItem("x-api-key")
        // let postId = req.params.postId
        let { postId } = useParams()
        console.log(postId)

        axios.get(`http://postcommentbackend-production.up.railway.app/getPost/${postId}`, { headers: { "x-api-key": token } })

            .then((res) => {
                setPost(res.data.message)
            })
            .catch((err) => {
                alert(err.response.data.message + " Error")
            })
    }, [])

    return (
        <div className='container'>
            <div className='container' align="center">
                <button className="btn btn-primary" onClick={() => { navigate("/CreatePost") }}>Create new Post</button>
                <button className="btn btn-primary" onClick={() => { navigate("/getPost") }}>See All Post</button>
            </div>

            {post.map(({ _id, userId, post, comment, reply }, i) => {

                // if(comment == []){
                //     return(
                //         <div>
                //             <input placeholder='Comment here'>Comment Section</input>
                //         </div>
                //     )
                // }
                return (

                    <div className='books shadow p-3 mb-5 bg-white rounded'>
                        <li>{_id}</li>
                        <li>userId: {userId}</li>
                        <li>post: {post}</li>
                        <li>comment: {comment}</li>
                    </div>

                )
            })}
        </div>
    )

}