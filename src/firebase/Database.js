
import firebase from 'firebase'


firebase.initializeApp({
    apiKey: "AIzaSyBOJwx3pKj--PkRrGJWKKoyCbnfeeu4X0o",
    authDomain: "recipe-46932.firebaseapp.com",
    databaseURL: "https://recipe-46932.firebaseio.com",
    projectId: "recipe-46932",
    storageBucket: "recipe-46932.appspot.com",
    messagingSenderId: "159950088877"
});


let firestore=firebase.firestore();


  //returns a promise after (saving data in  a collection with auto-generated id) with provided collectionName and payload

  export const saveCollection = (collectionName,payload) =>{

      return firestore.collection(collectionName).add(payload);

  };

  //returns a promise after fetching data from a collection
  // return response is a object .[use foreach loop to loop through each documnet and the (use response.id [to get id of the document in collection] and response.data() [to get the data of the document in collection])]

  export const getCollection = (collectionName) =>{

      return firestore.collection(collectionName);

      //use .get() to get static data
      // return firestore.collection(collectionName).get();

      //use .onSnapshot((item) => {} ) to get realtime data so that whenever data changes it is changed in all the places
      //return firestore.collection(collectionName).onSnapshot();

  };

  //returns a promise for (explicitly saving a document without a auto-generated id instead a specific name/ or overriding) a specific document with  a particular name provided by DocumentName in addition to CollectionName and the payload
  export const saveDocument = (colletionName,DocumentName,Payload) =>{

      return firestore.collection(colletionName).doc(DocumentName).set(Payload);
  };

  //returns a promise after fetching the specific document with the specified DocumentName  inside the specified collectionName .(use response.id to get id and response.data() to get the data )

  export const getDocument = (collectionName,DocumentName) => {

      return firestore.collection(collectionName).doc(DocumentName);

      //use .get() to get static data
      // return firestore.collection(collectionName).doc(DocumentName).get();

      //use .onSnapshot((item) => {} ) to get realtime data so that whenever data changes it is changed in all the places
      //return firestore.collection(collectionName).doc(DocumentName).onSnapshot();

  };


  //returns a promise after updating a specific field in a document without overriding the whole document
  // pass the field to update as object named Payload
  export const updateDocument =(collectionName,DocumentName,payload) =>{

      return firestore.collection(collectionName).doc(DocumentName).update(payload);
  };

  //returns a promise after deleting a specific document

  export const deleteDocument = (collectionName,DocumentName) =>{
      return firestore.collection(collectionName).doc(DocumentName).delete();
  };


   //returns a promise after searching for all documents who satisfy the certain condition
  // response is collection of objects use foreach loop to go through each item
  // fieldName , operation , value all are strings eg('age', '>=', '10')

  export const getDocumentWhere = (collectionName,fieldName,operation,value) =>{

      return firestore.collection(collectionName).where(fieldName,operation,value);

      //use .get() to get static data
      // return firestore.collection(collectionName).where(fieldName,operation,value).get();

      //use .onSnapshot((item) => {} ) to get realtime data so that whenever data changes it is changed in all the places
      //return firestore.collection(collectionName).where(fieldName,operation,value).onSnapshot();


  };