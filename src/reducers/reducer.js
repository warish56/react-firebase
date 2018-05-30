
import * as actions from '../actions/actionType';


 const initialState={
     signUp:false,
      id:null,
     email:'',
     loggedIn:false,
     saved:false,
     users:''
  };

  let userSignUp = (state,action) =>{

          return{
              ...state,
              signUp:action.signUp
          }

  };

let LogIn = (state,action) =>{

        return{
            ...state,
            id:action.id,
            email:action.email,
            loggedIn:true,
            signUp:false,

        }

};


let saveDatabase = (state,action) =>{

return{
    ...state,
    saved:action.saved
}

};


let getDatabase = (state, action) =>{

    return{
        ...state,
        users:action.users
    }
};

const reducer = (state=initialState,action)=>{

    switch(action.type){
        case actions.SIGN_UP: return userSignUp(state,action);
        case actions.LOGIN : return LogIn(state,action);
        case actions.SAVE_DATABASE :return saveDatabase(state,action);
        case actions.GET_DATABASE : return getDatabase(state,action);

    }

    return state;
};

export default reducer;