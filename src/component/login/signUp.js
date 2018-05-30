

import React from 'react';
import {connect} from 'react-redux';
import * as auth from '../../actions/authActions'




class signup extends React.Component{
    state={
       email:'',
        password:''
    }

    onEmailChangeHandler = (event)=>{
        this.setState({
            email:event.target.value
        })
    }

    onPasswordChangeHandler = (event)=>{
        this.setState({
            password:event.target.value
        })
    }


    render()
   {
     return(
      <div className="container">
          <div className="row justify-content-center align-item-center">
              <div className="col-xl-6 p-2 m-auto">
                  <div className="form-group">
                      <input type="text" value={this.state.email} onChange={(event)=>this.onEmailChangeHandler(event)} className="form-control" placeholder="email"/>
                  </div>
                  <div className="form-group">
                      <input type="password" value={this.state.password} onChange={(event)=>this.onPasswordChangeHandler(event)}className="form-control" placeholder="Password"/>

                  </div>
                  <div className="form-group">
                      <button type="button" onClick={()=>this.props.signUp(this.state.email,this.state.password,this.props)} className="btn btn-success btn-block">Sign Up</button>
                  </div>

              </div>
          </div>

      </div>
  )
 }


}




const mapDispatchToProps = dispatch =>{
    return{
        signUp : (email,password,props)=> dispatch(auth.signUp(email,password,props))
    }
}


export default connect(null,mapDispatchToProps)(signup);