import {db} from "../../Controller/Firebase"

// const getWebinar = () => new Promise((resolve) => {
//     db.collection("webinar").onSnapshot((snapshot) => {
//         // snapshot.docs.map((doc) => console.log(doc.data()))
//         resolve(snapshot.docs)
//     })
// })

const docRef = db.collection("webinar");
const getWebinar = () => new Promise((resolve, reject) =>{
    docRef.get().then(function(doc) {
        // doc.docs.map((doc) => console.log(doc.data()))
        resolve(doc.docs)
        // if (doc.exists) {
        //     console.log("Document data:", doc.data());
        // } else {
        //     // doc.data() will be undefined in this case
        //     console.log("No such document!");
        // }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
})



export default getWebinar