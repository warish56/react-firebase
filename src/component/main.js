import React from 'react';
import {connect} from 'react-redux';
import SignUp from '../component/login/signUp'
import Login from '../component/login/login'
import Welcome from '../component/welcome'

import {Route,Redirect} from 'react-router-dom';


let component=null;

class main extends React.Component{






    render(){

        return(
        <div>

            <Route path="/" exact component={SignUp}/>
            {this.props.isSignUp ?  <Route path="/login" exact component={Login}/> : null}
            {this.props.isLoggedIn ? <Route path="/welcome" exact component={Welcome}/> : null}
             <Redirect from="" to="/"/>
            </div>
    )
    }
}

let mapStateToProps = (state) =>{
    return{
        isSignUp:state.signUp,
        isLoggedIn:state.loggedIn
    }
}

export default connect(mapStateToProps)(main);