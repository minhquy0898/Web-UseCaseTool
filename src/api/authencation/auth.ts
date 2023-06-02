import { auth, app } from '../../firebaseConfig'
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";



export const CreateUserWithEmailAndPassword = async(email: string, password: string) => {
    return await createUserWithEmailAndPassword( auth, email, password);
}

export const SignInWithEmailAndPassword = async(email: string, password: string) => {
    return await signInWithEmailAndPassword( auth, email, password);
}

export const SignOut = async()=>{
    return await signOut(auth)
}