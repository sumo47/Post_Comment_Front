import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function CreatePost() {

  let [post, setPost] = useState('')
  let navigate = useNavigate()

  const create = function (event) {
    event.preventDefault()
    let token = localStorage.getItem('x-api-key')
    axios.post('http://postcommentbackend-production.up.railway.app/CreatePost', { post }, { headers: { 'x-api-key': token } })
      .then((res) => {
        alert('Post has successfully created')
        navigate('/getPost')
      })
      .catch((err) => {
        alert(err.response.data.message + " Error")
      })
  }
  return (
    <div align="center">
      <form onSubmit={create}>
        <input class="container" placeholder='Write something' onChange={(e) => setPost(e.target.value)} /><br /><br />
        <input className="btn btn-primary" type="submit" placeholder="SUBMIT" /><br />
      </form>
    </div>
  )
}