import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged, signOut,} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication(); 
const useFirebase = () =>{
    const [user, setUser] = useState({})
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInUsingGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({})
        })
    }

    useEffect( () =>{
        onAuthStateChanged(auth, (user) =>{
            if(user ){
                setUser(user)
            }
        })
    },[])
    return {
        user,
        singInUsingGoogle,
        logOut
    }
}
export default useFirebase;