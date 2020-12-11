import React from 'react'
import { db } from '../../../../Controller/Firebase';
import './ListCard.css'

function ListCard({data}) {

    const handleDelete = () => {
        db.collection("webinar").doc(data.id).delete().then(function() {
            alert("Entri berhasil dihapus.");
        }).catch(function(error) {
            alert("Error removing document: ", error);
        });
    }

    return (
        <div className="row__list">
            {/* <div className="image__list">
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
            </div> */}
            <table>
                <tr>
                    <th className="poster"><img src={data.poster_url} /></th>
                    <th className="info">
                        <p>{data.nama}</p>
                        <p>{data.jadwal}</p>
                        <p>{data.platform}</p>
                        <p href={data.link}>{data.link}</p>
                    </th>
                    <th className="deskripsi">{data.deskripsi}</th>
                    <th className="aksi">
                        <button class="btn-hapus" onClick={handleDelete}>Hapus</button>
                    </th>
                </tr>
            </table>
        </div>
    )
}

export default ListCard
