import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import { app } from '../../../config/firebase-config';


const auth = getAuth(app);

// register a auth
export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        const user = userCredential.user;
        alert("User Created Successfully...")

    }
    catch (err) {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log((errorCode, errorMessage))

    }
}
// log in
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        const user = userCredential.user;
        return user.reloadUserInfo.email;

    }
    catch (err) {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log((errorCode, errorMessage))

    }
}
// Sign out a user:
export const logoutUser = async () => {
    try {
        const isSignOut = await signOut(auth);
        console.log("Signed out Successfully...")

    }
    catch (err) {
        console.log(err)

    }
}