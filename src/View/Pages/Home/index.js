import React, {useState, useEffect} from 'react'
import { CardList } from '../../Components'
import {db} from "../../../Controller/Firebase"
import './Home.css'

function Home() {
    const [listCard, setListCard] = useState([])
    const [search, setSearch] = useState("")
    const [topik, setTopik] = useState("")

    useEffect(() => {
        db.collection("webinar").onSnapshot((snapshot) => {
            setListCard(snapshot.docs.map((doc) => {
                const info = doc.data()
                const id = doc.id
                return {id, ...info}
            }))
        })
    },[])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleTopik = (e,id,event) => {
        let allElements = Array.from(document.querySelectorAll('.tag__bar'))
        for (let element of allElements) {
            element.classList.remove('choosed')           
        }        
        const element = document.getElementById(id);
        element.classList.toggle("choosed");
        if(e === topik){
            setTopik("")
        }else{
            setTopik(e)
        }
        console.log(topik)
    }

    return (
    <div className="container">
        <div className= "home__container">
            <h1 className="top-text">SEMINARINFO</h1>
            <div className="search__bar">
                <input type="text" placeholder="Ketik judul seminar disini..." onChange={e => handleSearch(e)}/>
            </div>
            <h2>Seminar yang tersedia</h2>
            <div className="Tag__line">
                <p className="topik-teks">Topik yang dipilih :</p>
                <div className="tag__bar" id="tag__bar1" onClick={(event)=>handleTopik("Teknologi","tag__bar1",event)}>
                    <p>Teknologi</p>
                </div>
                <div className="tag__bar" id="tag__bar2" onClick={(event)=>handleTopik("Kesehatan","tag__bar2",event)}>
                    <p>Kesehatan</p>
                </div>
                <div className="tag__bar" id="tag__bar3" onClick={(event)=>handleTopik("Ekonomi","tag__bar3",event)}>
                    <p>Ekonomi</p>
                </div>
                <div className="tag__bar" id="tag__bar4"  onClick={(event)=>handleTopik("Pendidikan","tag__bar4",event)}>
                    <p>Pendidikan</p>
                </div>
            </div>
            <div className="card__webinar">
             {
                   listCard.map((card) => {
                        if(search != ""){
                            if(topik != ""){
                                if(card.judul.toUpperCase().includes(search.toUpperCase()) && card.topik == topik){
                                    return (<CardList data={card}/>)
                                }
                            }else{
                                if(card.judul.toUpperCase().includes(search.toUpperCase())){
                                    return (<CardList data={card}/>)
                                }
                            }
                        }else{
                            if(topik == ""){  
                                return (<CardList data={card}/>)
                            }else{
                                if(card.topik== topik){
                                    return (<CardList data={card}/>)
                                }
                            }
                        }
                   })
               }
            </div>
        </div>
        </div>
    )
}

export default Home
