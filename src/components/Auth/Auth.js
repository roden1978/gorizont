import React from "react";
import {authAPI} from '../../api/api'

const Auth =() => {

        //debugger
        authAPI.authorizeAuth0();
}
export default Auth;
/*

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        if(!this.props.isAuthorized) {
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

/!*функция принимает state созданный в redux при помощи reducers
* и возвращает требуемые нам данные из state*!/
let mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuthorized
    }
}

export default connect(mapStateToProps, {getAuthorize})(Auth);*/
