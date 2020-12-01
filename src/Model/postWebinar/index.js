import {db} from '../../Controller/Firebase'
import firebase from 'firebase'

const postWebinar = (data) => {
    db.collection("webinar").add({
        judul: data.judul,
        nama: data.nama,
        topik: data.topik,
        deskripsi: data.deskripsi,
        platform: data.platform,
        biaya: data.biaya,
        jadwal: data.jadwal,
        link: data.link,
        poster_url: data.poster_url,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
}

export default postWebinar