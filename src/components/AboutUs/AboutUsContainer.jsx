import React from 'react';
import {getAbout, setIsChangedAbout, updateAbout} from '../../redux/actions/aboutActions';
import AboutUs from "./AboutUs";
import {connect} from "react-redux";

class AboutUsContainer extends React.Component{

    componentDidMount() {
    //debugger
        this.props.getAbout();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        if (this.props.isChangedAbout) {
            setTimeout(null,2000);
            this.props.getAbout();
            this.props.setIsChangedAbout(false);
        }
    }

    render() {
        return (<AboutUs about = {this.props.about}
                         adminMode={this.props.adminMode}
                         setIsChangedAbout = {this.props.setIsChangedAbout}
                         updateAbout = {this.props.updateAbout}/>)
    }
}
/*функция принимает state созданный в redux при помощи reducers
* и возвращает требуемые нам данные из state*/
let mapStateToProps = (state) => {
    return {
        about: state.about.about,
        adminMode: state.auth.adminMode,
        isChangedAbout: state.about.isChangedAbout
    }
};

/*Создаем контейнерную кмпоненту MyNewsContainer*/
/*Двойные скобки обозначют что мы вызвали фукцию connect, а она
* в свою очередь возвращает нам фукцию во вторых скобках*/
export default connect(mapStateToProps, {getAbout, setIsChangedAbout, updateAbout})(AboutUsContainer);