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

export const generateFile = (query) => {
    const link = document.createElement("a");
    const complete = query;
    const file = new Blob([complete], {type: 'text/plain'});
    link.href = URL.createObjectURL(file);
    link.download = "database.sql";
    link.click();
    URL.revokeObjectURL(link.href);
}