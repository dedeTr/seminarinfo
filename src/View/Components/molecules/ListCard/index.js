import React, { useState } from 'react'
import { db } from '../../../../Controller/Firebase';
import './ListCard.css'
import ModalEdit from '../ModalEdit'

function ListCard({data}) {
    const [open, setOpen] = useState(false);

    const handleDelete = () => {
        db.collection("webinar").doc(data.id).delete().then(function() {
            alert("Entri berhasil dihapus.");
        }).catch(function(error) {
            alert("Error removing document: ", error);
        });
    }


    const hideModal = () => setOpen(false);
    const showModal = () => setOpen(true);

    

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

            <ModalEdit handleClose={hideModal} open={open} id={data.id}/>
      
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
                        <button className="btn-hapus" onClick={handleDelete}>Hapus</button>
                        <button className="btn-edit" onClick={showModal}>Edit</button>
                        
                    </th>
                </tr>
            </table>
        </div>
    )
}

export default ListCard
