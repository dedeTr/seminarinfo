import React from 'react'
import './Poster.css'

function CardList({data}) {
    return (
        <div className="Poster__container">
            
            <img src={data.poster_url} width="300x" height="200px"/>
            <p>{data.judul}</p>
            <p>{data.nama}</p>
            <p>{data.jadwal}</p>
            <p>{data.platform}</p>
        </div>
    )
}

export default CardList
