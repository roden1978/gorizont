import React from "react";
import auth0 from 'auth0-js'
import {connect} from "react-redux";
import {getAuthorize} from "../../redux/actions/authActions";

class Auth extends React.Component{

    componentDidMount() {
        //debugger
        this.authorize();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.isAuthorized !== prevProps.isAuthorized){
            this.authorize()
        } else {
            this.handleAuthentication()
        }
    }


    auth = new auth0.WebAuth({
        domain: 'dev-8e4ti4s2.auth0.com',
        clientID: 'bOS225UZ986RtJmRgZCZG2SzZPGPJGJZ',
        redirectUri: 'http://localhost:3000/login',
        responseType: 'token id_token',
        scope: 'openid'
    })

    authorize = () => {
        this.auth.authorize();
    }

    handleAuthentication = () => {
        this.auth.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken) {
                this.props.getAuthorize(true);
            }else if(err){
                console.log(err);
            }
        })
    }

    render() {
        return( <>
            </>);
    }
}

/*функция принимает state созданный в redux при помощи reducers
* и возвращает требуемые нам данные из state*/
let mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuthorized
    }
}

export default connect(mapStateToProps, {getAuthorize})(Auth);