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
            <div className="header-detail">
                        <a href="/dashboard"><span className="icon-back"></span></a>
                        <h1 className="detail-webinar-judul">Detail Webinar</h1>
                    </div>
            <div className="image__container">
                <img src={data.poster_url} />
            </div>
            <h1 className="judul-webinar">{data.judul}</h1>
            <div className="info__detail">
                <div className="margin-top-2 sect-pembicara">
                    Pembicara: <span className="font-weight-bold">{data.nama}</span>
                </div>
                <div className="margin-top-2 sect-topik">
                    Topik: <span className="font-weight-bold">{data.topik}</span>
                </div>
                <div className="margin-top-2 sect-biaya">
                    Biaya: <span className="font-weight-bold">{data.biaya}</span>
                </div>
                <div className="margin-top-2 sect-platoform">
                    Platform: <span className="font-weight-bold">{data.platform}</span>
                </div>
                <div className="margin-top-2 sect-jadwal">
                    Jadwal: <span className="font-weight-bold">{data.jadwal}</span>
                </div>
                <div className="margin-top-2 sect-link">
                    <span className="font-weight-bold"><a target="_blank" href={'https://' + data.link}>{data.link}</a></span>
                </div>
            </div>
            <div className="deskripsi-detail">
                {data.deskripsi}
            </div>
            
        </div>
    )
    
}

export default Detail