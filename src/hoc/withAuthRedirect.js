import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
    //debugger
    let mapStateToPropsForRedirect = (state) => ({
        auth: state.auth.isAuthorized
    });

    class RedirectComponent extends React.Component {
        render() {
            if (this.props.auth === false){
                return (<Redirect to ='/auth'/>);
            }
            return <Component {...this.props} />
        }
    }


    let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}