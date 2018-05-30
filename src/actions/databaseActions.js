
import axios from 'axios'
import firebase from 'firebase'
import  * as Actions from '../actions/actionType'


firebase.initializeApp({
    apiKey: "AIzaSyBOJwx3pKj--PkRrGJWKKoyCbnfeeu4X0o",
    authDomain: "recipe-46932.firebaseapp.com",
    databaseURL: "https://recipe-46932.firebaseio.com",
    projectId: "recipe-46932",
    storageBucket: "recipe-46932.appspot.com",
    messagingSenderId: "159950088877"
});
let db=firebase.firestore();
let authRef= firebase.auth();

export const storeToDatabase = (name,email,phone) =>{


    let payload= {
      name:name,
      email:email,
      phone:phone
    };

    return dispatch =>{

     let user =authRef.currentUser;
     console.log('user: :'+user);

     authRef.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=>{


         authRef.signInWithEmailAndPassword('a@gmail.com','123456').then(()=>{
             console.log('User Signed In');
         })
     });

        db.collection('users').doc('employees').get()
            .then((empleyee)=>{

                console.log(empleyee.data());
                db.collection('users').add(payload)
                    .then(()=>{
                        dispatch({type:Actions.SAVE_DATABASE , saved:true})
                    })
                    .catch((error)=>{
                        console.log('could not save: '+error);
                    })
            });


    }
};


export const getUsers = () =>{

    return dispatch =>{

        db.collection('users').get()
            .then((users)=>{
                users.forEach((user)=>{
                   // console.log(user.id);
                    //console.log(user.data());

                })
                dispatch({users:users, type:Actions.GET_DATABASE})


            })
    }
};