import React from 'react'
import { Link } from 'react-router-dom'
import './BtnAdd.css'

function BtnAdd() {
    return (
        
        <div className="BtnAdd__container">
            <Link to="/create"><p>Tambah Webinar</p></Link>
        </div>
    )
}

export default BtnAdd
