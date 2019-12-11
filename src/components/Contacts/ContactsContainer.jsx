import React from 'react';
import {getContacts} from '../../redux/actions/contactsActions';
import Contacts from "./Contacts";
import {connect} from "react-redux";

class ContactsContainer extends React.Component{

    componentDidMount() {
    //debugger
        this.props.getContacts();
    }

    render() {
        return (<Contacts contacts = {this.props.contacts.contacts}/>)
    }
}
/*функция принимает state созданный в redux при помощи reducers
* и возвращает требуемые нам данные из state*/
let mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
};

/*Создаем контейнерную кмпоненту MyNewsContainer*/
/*Двойные скобки обозначют что мы вызвали фукцию connect, а она
* в свою очередь возвращает нам фукцию во вторых скобках*/
export default connect(mapStateToProps, {getContacts})(ContactsContainer);