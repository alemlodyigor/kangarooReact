import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export const fetchData = async (dbname) => {
    try {
        const docRef = doc(db, 'data', dbname);
        const docDoc = await getDoc(docRef);
        return docDoc.data();
    } catch (error) {
        console.log('error', error);
    }
}