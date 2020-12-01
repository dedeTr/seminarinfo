import React from 'react'
import { db } from '../../../../Controller/Firebase';
import './ListCard.css'

function ListCard({data}) {

    const handleDelete = () => {
        db.collection("webinar").doc(data.id).delete().then(function() {
            alert("Document successfully deleted!");
        }).catch(function(error) {
            alert("Error removing document: ", error);
        });
    }

    return (
        <div className="row__list">
            <div className="image__list">
                <img src={data.poster_url} />
            </div>
            <div className="info__list">
                <p>{data.nama}</p>
                <p>{data.jadwal}</p>
                <p>{data.platform}</p>
            </div>
            <div className="deskripsi__list">
                <p>{data.deskripsi}</p>
            </div>
            <div className="aksi__list">
                <button onClick={handleDelete}>Hapus</button>
            </div>
        </div>
    )
}

export default ListCard
