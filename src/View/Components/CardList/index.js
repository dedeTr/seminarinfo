import React from 'react'
import './Poster.css'

function CardList({data}) {
    return (
        <div className="Poster__container">
            <div className="img-container">
                <img src={data.poster_url} width="300x" height="200px"/>
            </div>
            <p className="judul">{data.judul}</p>
            <p className="isi">{data.nama}</p>
            <p>{data.jadwal}</p>
            <p>{data.platform}</p>
            <p className="link"><a href={'https://' + data.link}>{data.link}</a></p>
            <a href="google.com"><p className="text-right">Selengkapnya &#8594;</p></a>
        </div>
    )
}



export default CardList
