import React from 'react'
import { Link } from 'react-router-dom'
import './BtnAdd.css'

function BtnAdd() {
    return (
        <Link to="/create" className="btn-link"><p>Tambah Webinar</p></Link>
    )
}

export default BtnAdd
