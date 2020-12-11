import React, { useEffect, useState } from 'react';
import { getWebinar } from '../../../Model';
import { BtnAdd, ListCard } from '../molecules';
import {db} from "../../../Controller/Firebase";
import './AddWebinar.css';
import { Link } from 'react-router-dom';

function AddWebinar() {
    const [listCard, setListCard] = useState([])

    useEffect(() => {
        db.collection("webinar").onSnapshot((snapshot) => {
            setListCard(snapshot.docs.map((doc) => {
                const info = doc.data()
                const id = doc.id
                return {id, ...info}
            }))
        })
    },[])
    return (
        <div className="AddWebinar__container">
            <div className="nav-container">
                <h1 className="header-text">SEMINARINFO Admin</h1>
                <BtnAdd />
            </div>
            <p className="title">Webinar yang telah Ditambah</p>
                <table>
                    <tr>
                        <th className="poster ta-center fw-bold">Poster</th>
                        <th className="info ta-center fw-bold">Info Singkat</th>
                        <th className="deskripsi ta-center fw-bold">Deskripsi</th>
                        <th className="aksi ta-center fw-bold">Aksi</th>
                    </tr>
                </table>
               {
                   listCard.map((card) => {
                       return <ListCard key={card.id} data={card}/>
                    })
               }
               
        </div>
    )
}

export default AddWebinar
