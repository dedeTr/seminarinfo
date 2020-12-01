import React, { useEffect, useState } from 'react'
import { getWebinar } from '../../../Model'
import { BtnAdd, ListCard } from '../molecules'
import {db} from "../../../Controller/Firebase"
import './AddWebinar.css'
import { Link } from 'react-router-dom'

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
                <BtnAdd />
            <p className="title">Daftar Webinar yang Telah Ditambahkan</p>
            <div className="list__container">
                <div className="title__row">
                    <div className="title__foto">
                        <p>Foto</p>
                    </div>
                    <div className="info__singkat">
                        <p>Info Singkat</p>
                    </div>
                    <div className="deskripsi">
                        <p>Deskripsi</p>
                    </div>
                    <div className="aksi">
                        <p>Aksi</p>
                    </div>
                </div>
               {
                   listCard.map((card) => {
                       return <ListCard key={card.id} data={card}/>
                    })
               }
            </div>
        </div>
    )
}

export default AddWebinar
