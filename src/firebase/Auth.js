import firebase from 'firebase'


firebase.initializeApp({
    apiKey: "AIzaSyBOJwx3pKj--PkRrGJWKKoyCbnfeeu4X0o",
    authDomain: "recipe-46932.firebaseapp.com",
    databaseURL: "https://recipe-46932.firebaseio.com",
    projectId: "recipe-46932",
    storageBucket: "recipe-46932.appspot.com",
    messagingSenderId: "159950088877"
});

let authRef =firebase.auth();



//returns  a promise after a user is successfully created in database using email and password
export const createUserWithEmailAndPassword = (email,password) =>{
  return authRef.createUserWithEmailAndPassword(email,password);
};

//returns  a promise after a user is successfully signed In using email and password
//presistance for user to log in or log out
// LOCAL ----  session remains until when explicitly not Signed-out
//SESSION ---- session ends when the page is refreshed or window is closed
export const signInWithEmailAndPassword = (email,password,presistance) =>{

    let Presistance=null;
    switch (presistance){
        case 'LOCAL' : Presistance=firebase.auth.Auth.Persistence.LOCAL;
        break;

        case 'SESSION' : Presistance=firebase.auth.Auth.Persistence.SESSION;
            break;

        case 'NONE' : Presistance=firebase.auth.Auth.Persistence.NONE;
            break;
    }

   return authRef.setPersistence(Presistance).then(()=>{
       return authRef.signInWithEmailAndPassword(email,password);
    });

};

// requires a provider name as a string eg-('GOOGLE') [all in CAPS]
//returns a promise after a user is successfully signed in with google account
// token = response.credential.accessToken
// userInfo = response.user


//presistance for user to log in or log out
// LOCAL ----  session remains until when explicitly not Signed-out
//SESSION ---- session ends when the page is refreshed or window is closed

export const signInWithProvider = (provider,presistance) =>{

    let Provider=null;
    switch (provider){

        case 'GOOGLE': Provider = new firebase.auth.GoogleAuthProvider();
            break;
        case 'FACEBOOK':Provider = new firebase.auth.FacebookAuthProvider();
            break;
        case 'TWITTER': Provider = new firebase.auth.TwitterAuthProvider();
            break;
        case 'GITHUB': Provider = new firebase.auth.GithubAuthProvider();
            break;

    }

    let Presistance=null;
    switch (presistance){
        case 'LOCAL' : Presistance=firebase.auth.Auth.Persistence.LOCAL;
            break;

        case 'SESSION' : Presistance=firebase.auth.Auth.Persistence.SESSION;
            break;

        case 'NONE' : Presistance=firebase.auth.Auth.Persistence.NONE;
            break;
    }

    return authRef.setPersistence(Presistance).then(()=>{
        return authRef.signInWithPopup(Provider);
    });

};


//returns a promise after the user is successfully signedOut
export const signOut =() =>{
    return authRef.signOut();
};


// used to check the user is signed in or not
//returns current user
// if user is null then user is not signedIn
export const getUser = () =>{

    return authRef.currentUser;
};