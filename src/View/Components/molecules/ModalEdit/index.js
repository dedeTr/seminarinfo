import React, { useState } from 'react'
import "./ModalEdit.css"
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import uploadPoster from '../../../../Model/uploadPoster';
import updateWebinar from '../../../../Model/updateWebinar';
import { createMuiTheme } from '@material-ui/core';

function ModalEdit({handleClose, open, id}) {
    const [judul, setJudul] = useState("")
    const [nama, setNama] = useState("")
    const [topik, setTopik] = useState("")
    const [platform, setPlatrofm] = useState("")
    const [biaya, setBiaya] = useState("")
    const [jadwal, setJadwal] = useState("")
    const [link, setLink] = useState("")
    const [deskripsi, setDeskripsi] = useState("")
    const [poster_url, setPoster_url] = useState("")
    const [posterUploaded, setPosterUploaded] = useState("")
  
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        const url = await uploadPoster(posterUploaded)
        console.log("urll", url)
        setPoster_url(url)
        const stateToUpadate = {
            id: id,
            judul: judul,
            nama: nama,
            topik:topik,
            platform: platform,
            biaya: biaya,
            jadwal: jadwal,
            link: link,
            deskripsi: deskripsi,
            poster_url: url
        }
        updateWebinar(stateToUpadate)
        handleClose()
    }

    const theme = createMuiTheme({
        typography: {
          fontFamily: ['Montserrat'],
        },
    }); 

  return ( 
      <div className="margin-bottom-2">
        {/* <Button onClick={() => setOpen(true)}>scroll=paper</Button> */}
        <Dialog
          open={open}
          onClose={() => handleClose()}
          scroll={"paper"}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle theme={theme} id="scroll-dialog-title">Edit Webinar</DialogTitle>
          <DialogContent dividers={true}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
             <form onSubmit={e => handleUpdate(e)}>
                    <label for="judul">Judul Webinar</label>
                    <input type="text" id="judul"  onChange={(e) => setJudul(e.target.value)} required/>
                    <label for="nama">Nama Pembicara</label>
                    <input type="text" id="nama"  onChange={(e) => setNama(e.target.value)} required/>
                    <label for="topik">Topik</label>
                    <input type="text" id="topik"  onChange={(e) => setTopik(e.target.value)} required/>
                    <label for="platform">Platform</label>
                    <input type="text" id="platform"  onChange={(e) => setPlatrofm(e.target.value)} required/>
                    <label for="biaya">Biaya</label>
                    <input type="text" id="biaya"  onChange={(e) => setBiaya(e.target.value)} required/>
                    <label for="jadwal">Jadwal</label>
                    <input type="text" id="jadwal"  onChange={(e) => setJadwal(e.target.value)} required/>
                    <label for="link">Link Pendaftaran</label>
                    <input type="text" id="link"  onChange={(e) => setLink(e.target.value)} required/>
                    <label for="deskripsi">Deskripsi</label>
                    <textarea placeholder="Deskripsi..." id="deskripsi" onChange={(e) => setDeskripsi(e.target.value)} required/>
                    <label for="poster">Poster</label>
                    <input type="file" id="poster" required onChange={e => setPosterUploaded(e.target.files[0])} />
                    <input type="submit" value="SUBMIT" id="submit-btn submit-btn-edit" />
                </form>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose()} color="primary" variant="contained">
              Kembali
            </Button>
            {/* <Button onClick={(e) => handleUpdate(e)} color="primary">
              Simpan
            </Button> */}
          </DialogActions>
        </Dialog>
      </div>

  )   
}

export default ModalEdit
