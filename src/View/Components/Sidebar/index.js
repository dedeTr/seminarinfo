import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="title__app">
                <h1>Admin Dashboard</h1>
            </div>
            <div className="menu__sidebar">
                <div className="button__webinar">
                    <Link to="/admin">
                        <p>Webinar</p>
                    </Link>
                </div>
            </div>
            <div className="logout__sidebar">
                <div className="button__webinar">
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
