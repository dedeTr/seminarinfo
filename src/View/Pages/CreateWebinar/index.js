import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { postWebinar } from '../../../Model'
import getWebinar from '../../../Model/getWebinar'
import uploadPoster from '../../../Model/uploadPoster'
import { Sidebar } from '../../Components'
import './CreateWebinar.css'

class CreateWebinar extends Component {
    state={
        posterUploaded: "",
        judul: "",
        nama: "",
        topik:"",
        platform: "",
        biaya: "",
        jadwal: "",
        link: "",
        deskripsi: "",
        poster_url: ""
    }

    // componentDidMount(){
    //     getWebinar()
    // }

    uploadPost = async (event) => {
        event.preventDefault();
        const url = await uploadPoster(this.state.posterUploaded)
        this.setState({
            poster_url: url
        })
        postWebinar(this.state)
    }

    handleFormChange = (e) => {
        let newState = this.state
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    render() {
        return (
            <div className="container-create">
                {/* <Sidebar /> */}
                <div className="form__webiner">
                    <div className="header-page">
                        <a href="/admin"><span className="icon-back"></span></a>
                        <h1 className="tambah-webinar-judul">Tambah Webinar</h1>
                    </div>
                    <form onSubmit={e => this.uploadPost(e)}>
                        <label for="judul">Judul Webinar</label>
                        <input type="text" id="judul"  onChange={this.handleFormChange} required/>
                        <label for="nama">Nama Pembicara</label>
                        <input type="text" id="nama"  onChange={this.handleFormChange} required/>
                        <label for="topik">Topik</label>
                        <input type="text" id="topik"  onChange={this.handleFormChange} required/>
                        <label for="platform">Platform</label>
                        <input type="text" id="platform"  onChange={this.handleFormChange} required/>
                        <label for="biaya">Biaya</label>
                        <input type="text" id="biaya"  onChange={this.handleFormChange} required/>
                        <label for="jadwal">Jadwal</label>
                        <input type="text" id="jadwal"  onChange={this.handleFormChange} required/>
                        <label for="link">Link Pendaftaran</label>
                        <input type="text" id="link"  onChange={this.handleFormChange} required/>
                        <label for="deskripsi">Deskripsi</label>
                        <textarea placeholder="Deskripsi..." id="deskripsi" onChange={this.handleFormChange} required/>
                        <label for="poster">Poster</label>
                        <input type="file" id="poster" required onChange={e => this.setState({posterUploaded: e.target.files[0]})} />
                        <input type="submit" value="SUBMIT" id="submit-btn" />
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateWebinar
