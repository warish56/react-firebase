import axios from 'axios'
import * as actions from '../actions/actionType'

 const SignUpurl='https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDKXm4K3ytgdipg-75PjXoKXMkx44Xr5pk';
 const LogInUrl ='https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDKXm4K3ytgdipg-75PjXoKXMkx44Xr5pk';

let payload =(email,password)=>{
    return {
        email: email,
        password: password,
        returnSecureToken: true
    }
};

   let LogInSuccessResponse = (type,response) =>{
    return{
        type: type,

        id: response.data.idToken,
        email:response.data.email,

    }
  };

   export const signUp = (email,password,props) =>{

        return dispatch =>{
         axios.post(SignUpurl,payload(email,password))
             .then((response)=>{
                 console.log(response);
                 dispatch({type:actions.SIGN_UP,signUp:true});
                 props.history.push('/login');
             })
             .catch((error)=>{
                 console.log('error: '+error);
             })}

   };

   export const Login = (email,password,props) =>{

       return dispatch => {
           axios.post(LogInUrl, payload(email, password))
               .then((response) => {
                   console.log(response);
                   dispatch(LogInSuccessResponse(actions.LOGIN, response));
                   props.history.push('/welcome');
               })
               .catch((error)=>{
                   console.log('error: '+error);

               })
       }

   };



