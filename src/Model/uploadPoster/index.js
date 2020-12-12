import {storage} from '../../Controller/Firebase'
import firebase from 'firebase'


const uploadPoster = (image) => new Promise((resolve, reject) => {
    if(image != null){
        // const file = e.target.files[0]
        // const bucketName = Math.random().toString(36).substring(7)
        const storageRef = storage.ref()
        let uploadTask = storageRef.child(`poster/${image.name}.jpg`).put(image);
        uploadTask.on('state_changed', (snapshot) => {
        //   setLoad((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        }, function(error) {
          console.log(error)
        }, function() {
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            resolve(downloadURL) 
            console.log(downloadURL)
            alert("Entri berhasil ditambahkan!")
            // window.location.assign("/admin");
          });
        });
      }
})

export default uploadPoster