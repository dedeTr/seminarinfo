import React from 'react'
import { Sidebar } from '../../Components'
import AddWebinar from '../../Components/AddWebinar'
import './Admin.css'

function Admin() {
    return (
        <div className="admin__container">
            {/* <Sidebar /> */}
            <AddWebinar />
        </div>
    )
}

export default Admin
