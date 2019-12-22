import React from 'react';
import {getAbout} from '../../redux/actions/aboutActions';
import AboutUs from "./AboutUs";
import {connect} from "react-redux";

class AboutUsContainer extends React.Component{

    componentDidMount() {
    //debugger
        this.props.getAbout();
    }

    render() {
        return (<AboutUs about = {this.props.about}/>)
    }
}
/*функция принимает state созданный в redux при помощи reducers
* и возвращает требуемые нам данные из state*/
let mapStateToProps = (state) => {
    return {
        about: state.about.about
    }
};

/*Создаем контейнерную кмпоненту MyNewsContainer*/
/*Двойные скобки обозначют что мы вызвали фукцию connect, а она
* в свою очередь возвращает нам фукцию во вторых скобках*/
export default connect(mapStateToProps, {getAbout})(AboutUsContainer);