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
    const [data, setData] = useState([]);

    useEffect( () =>{
        fetch('https://immense-stream-65020.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return {
        user,
        singInUsingGoogle,
        logOut,
        data
    }
}
export default useFirebase;