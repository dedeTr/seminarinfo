import React from 'react'
import { Link } from 'react-router-dom'
import './Poster.css'

function CardList({data}) {
    return (
        <div className="Poster__container">
            <div className="img-container">
                <img src={data.poster_url} width="300px" height="200px"/>
            </div>
            <p className="judul">{data.judul}</p>
            <p className="isi">{data.nama}</p>
            <p>{data.jadwal}</p>
            <p>{data.platform}</p>
            <p className="link"><a href={'https://' + data.link}>{data.link}</a></p>
            {/* <a href="google.com"><p className="text-right">Selengkapnya &#8594;</p></a> */}
            <Link to={`/detail/${data.id}`}>
                <p className="text-right">Selengkapnya &#8594;</p>
            </Link>
        </div>
    )
}



export default CardList
