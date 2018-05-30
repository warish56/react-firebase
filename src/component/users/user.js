
import React from 'react';
import {connect} from 'react-redux'
import * as DatabaseActions from '../../actions/databaseActions'

class User extends React.Component{

    state={
        name:'',
        email:'',
        phone:''
    };

   onNameChange = (event) =>{
        let name=event.target.value;
        this.setState({
            ...this.state,
            name:name
        })
    };


    onEmailChange = (event) =>{
        let email=event.target.value;
        this.setState({
            ...this.state,
            email:email
        })
    };

    onPhoneChange = (event) =>{
        let phone=event.target.value;
        this.setState({
            ...this.state,
            phone:phone
        })
    };

 onSubmit = (name,email,phone)=>{
     this.props.saveData(name,email,phone);
     this.props.getData();
};


    render() {
        let alert= this.props.submitted ?
            <div className="alert alert-success">Saved SuccessFully</div> : null;
        return (

            <div className="container">
                <div className="row p-3">
                    {alert}
                    <div className="col-6 p-4 m-auto border border-success">
                        <form>

                            <div className="form-group">
                                <label>Name</label>
                                <input value={this.state.name} onChange={(event)=>this.onNameChange(event)} type="text" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input value={this.state.email} onChange={(event)=>this.onEmailChange(event)} type="email" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label>Phone</label>
                                <input value={this.state.phone} onChange={(event)=>this.onPhoneChange(event)} type="number" className="form-control"/>
                            </div>


                             <button onClick={() =>this.onSubmit(this.state.name,this.state.email,this.state.phone)} type="button" className="btn btn-success btn-block">Save</button>

                        </form>
                    </div>
                </div>

            </div>

        )
    }


}


let mapStateToProps = state =>{

    return{
    submitted:state.saved,
        users:state.users
    }
};

let mapDispatchToProps = (dispatch)=>{
    return{
        saveData: (name,email,phone)=> dispatch(DatabaseActions.storeToDatabase(name,email,phone)),
        getData: () => dispatch(DatabaseActions.getUsers())

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(User);