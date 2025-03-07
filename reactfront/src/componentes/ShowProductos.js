import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint='http://localhost:8000/api'

export const ShowProductos = () => {
    const [productos,setProductos]=useState([])
    useEffect(()=>{
        getAllProductos()
    },[])
    const getAllProductos=async()=>{
        const response = await axios.get(`${endpoint}/productos`)
        setProductos(response.data)
    }

    const deleteProducto=async(id)=>{
        await axios.delete(`${endpoint}/producto/${id}`)
        getAllProductos()
    }
  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>create</Link>
        </div>
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Descipcion</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((producto)=>(
                    <tr key={producto.id}>
                        <td>{producto.descripcion}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.stock}</td>
                        <td>
                            <Link to={`/edit/${producto.id}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={()=>deleteProducto(producto.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}
