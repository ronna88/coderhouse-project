import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../services/firebase";
import { createContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const [userName, setUserName] = useState('');
    const [userPhoto, setUserPhoto] = useState('');

    const signIn = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: "select_account",
        });

        const auth = getAuth(app);
        const response = await signInWithPopup(auth, provider);
        const { user } = response;
        setUserName(user.displayName);
        setUserPhoto(user.photoURL);

        console.log(response);
    }

    const authContextData = {
        signIn, userName, userPhoto
    }

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }