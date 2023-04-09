import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function getPost(event) {
    const [post, setPost] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        let token = localStorage.getItem("x-api-key")

        axios.get("http://postcommentbackend-production.up.railway.app/getPost", { headers: { "x-api-key": token } })

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
                <button className="btn btn-primary" onClick={() => { navigate("/CreatePost") }}>CreatePost</button>
            </div>
            
            {post.map(({ _id, userId, post }, i) => {
                let url = `/getBook/${_id}`
                return (

                    <div className='books shadow p-3 mb-5 bg-white rounded'>
                        <li><a href={url}  >{_id}</a></li>
                        <li>userId: {userId}</li>
                        <li>post: {post}</li>
                    </div>

                )
            })}
        </div>
    )

}