import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export interface IInituser{
    DisplayName?: string | null;
    Email?: string | null;
    FullName:string;
    PhoneNumber:string;
    PhotoUrl:string;
}
const CollectionName = "Users"

export const addUser = async(user:IInituser)=>{
    const colRef = collection(db,CollectionName);
    return await addDoc(colRef,user);
}

export const getUser = async({uid}:{uid:string})=>{
    const colRef = doc(db,CollectionName,uid);
    return await getDoc(colRef);
}




