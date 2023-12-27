import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const List = () => {
    const [book, setBook] = useState([])

    async function getData() {
        const result = await axios.get("http://localhost:7001/bookList")
        setBook(result.data)
        console.log(result.data)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <table className ="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">BOOK TITLE</th>
                        <th scope="col">BOOK AUTHER</th>
                        <th scope="col">BOOK PUBLICATION</th>
                        <th scope="col">BOOK PRICE</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                         book.map(bk => {
                            return (


                                <tr key={bk.id}>
                                    <td>{bk.id}</td>
                                    <td>{bk.btitle}</td>
                                    <td>{bk.bauther}</td>
                                    <td>{bk.bpublication}</td>
                                    <td>{bk.bprice}</td>
                                    <td>
                                        <NavLink to={`/bookList/update/${bk.id}`}><button className='btn btn-warning'>Update</button></NavLink>
                                        <NavLink to={`/bookList/delete/${bk.id}`}> <button className='btn btn-warning'>Delete</button></NavLink>
                                    </td>
                                </tr>
                            )
                        }) 
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List
