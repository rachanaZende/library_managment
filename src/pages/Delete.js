import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Delete = () => {
  const{bookId} = useParams()
  const navigate = useNavigate()
  const[book,setBook]= useState([])

  async function fetchData(){
    const result = await axios.get(` http://localhost:7001/bookList/get/${bookId}`)
    setBook(result.data)
  }
  useEffect(()=>{
    fetchData()
  },[])

  function deletebook(){
    axios.delete(`http://localhost:7001/bookList/delete/${bookId}`)
    alert("Data Deleted..!!")
    navigate('/list')
  }
  return (
    <div>
      <h1 className='text-center'>Delete Data</h1>
      <form onSubmit={()=>deletebook()}>
      <h2 className='text-danger'>Do you really want to delete data...??</h2>
      <span className='text-danger'>{book.btitle}-{book.id}</span>
      <input type='submit' value='yes' className='btn btn-outline-danger'/>
      <NavLink to={'/list'}><button className='btn btn-outline-warning'>NO</button></NavLink>
      </form>
    </div>
  )
}

export default Delete
