import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { db } from '../../../Controller/Firebase';
import './Detail.css'

const Detail = () => {
    const [data, setData] = useState(  {
        judul: "",
        nama: "",
        topik:"",
        platform: "",
        biaya: "",
        jadwal: "",
        link: "",
        deskripsi: "",
        poster_url: ""
    }) 
    const [id, setId] = useState(useParams().id)
    
    useEffect(() => {
        console.log(id)
        db.collection("webinar").doc(id)
        .get()
        .then(function(doc) {
            if (doc.exists) {
                setData(doc.data())
                console.log("state", data)
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");

            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    },[id]) 

    return (
        <div className="detail__container">
            <div className="nav-container">
                <a href="/dashboard">
                    <h1 className="header-text log-text">SEMINARINFO</h1>
                </a>
            </div>
            <div className="image__container">
                <img src={data.poster_url} />
            </div>
            <div className="info__detail">
                Judul: {data.judul}<br/>
                Nama: {data.nama}<br/>
                Topik: {data.topik}<br/>
                Biaya: {data.biaya}<br/>
                Platform: {data.platform}<br/>
                Jadwal: {data.jadwal}<br/>
                Link: {data.link}<br/>
            </div>
            <div className="deskripsi__detail">
                {data.deskripsi}
            </div>
            
        </div>
    )
    
}

export default Detail