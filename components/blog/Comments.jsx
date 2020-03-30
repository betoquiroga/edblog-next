import React, { useState, useEffect } from "react"
import Axios from "axios"

const Comments = ({ id }) => {
  const [ comments, setComments ] = useState()
  const [ number, setNumber ] = useState(0)

  useEffect( () => {
    if(number > 0) {
      Axios.get(`${process.env.API_BLOG}/posts/${id}/comments`)
      .then( resp => {
        setComments(resp.data)
      })
    }
  } , [number])

  if (!comments) return (
    <div>
      <a onClick={ () => setNumber(number + 1) }>Cargar comentarios</a>
    </div>
  )

  return (
    <div>
      <h2>Comentarios</h2>
      {
        comments.map(c => (
          <div key={c.id}>
            <h3>{c.email}</h3>
            <p>{c.body}</p>
          </div>
        ))
      }
    </div>
  )

}

export default Comments