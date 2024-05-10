import { initializeApp } from "firebase/app";
import { getFirestore, query,where, collection, getDocs, doc, getDoc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB6ZaiZ-2ZKcKve7xnZb4md1jmGEyS5Pok",
  authDomain: "vanlife-c53ad.firebaseapp.com",
  projectId: "vanlife-c53ad",
  storageBucket: "vanlife-c53ad.appspot.com",
  messagingSenderId: "712924770472",
  appId: "1:712924770472:web:078227814e225cb6b3929d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans(){
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id : doc.id
    }))
    console.log(typeof dataArr[0].id)
    return dataArr
}

export async function getVan(id){
    console.log(typeof id);
    const stringedId = id.toString();
    const docRef = doc(db,"vans",stringedId)
    const vanSnapshot = await getDoc(docRef)
    
    console.log(vanSnapshot)
    return {
        ...vanSnapshot.data(),
        id : vanSnapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    console.log("FIREBASE!");
    console.log(dataArr);
    return dataArr
}
// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }


export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}