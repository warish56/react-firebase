
import React from 'react'
import {connect} from 'react-redux'

class welcome extends React.Component{

    render(){
        return(
            <div>
                <h2>
                    Welcome {this.props.name}
                </h2>
                <p>
                    Your email is: {this.props.email}
                </p>
            </div>
        )
    }
}

let mapStateToProps =(state) =>{

    return{
        name:state.name,
        email:state.email
    }
}




export default connect(mapStateToProps)(welcome);