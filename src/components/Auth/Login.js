import React from "react";
import {authAPI} from '../../api/api'
import {getAuthorize} from "../../redux/actions/authActions";
import Spinner from "../../common/Spinner";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Login extends React.Component {

    componentDidMount() {
        //debugger
        this.props.getAuthorize();

    }
    /*componentWillUnmount() {
        authAPI.logout();
    }*/

    render() {
        return (<>
            {this.props.auth ? <Redirect to = '/news' /> : <Spinner/>}
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuthorized,
        adminMode: state.auth.adminMode
    }

}

export default connect(mapStateToProps, {getAuthorize})(Login)

/*{console.log('Auth:' + this.props.auth)}*/