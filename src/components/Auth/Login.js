import React from "react";
import {authAPI} from '../../api/api'
import {getAuthorize} from "../../redux/actions/authActions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Login extends React.Component {

    componentDidMount() {
        debugger
        this.props.getAuthorize();

    }

    render() {
        return (<>
            {console.log('Auth:' + this.props.auth)}
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuthorized
    }

}

export default connect(mapStateToProps, {getAuthorize})(Login)