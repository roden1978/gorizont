import React from 'react';
import {getPhotosets} from '../../redux/actions/photosActions';
import {connect} from "react-redux";
import Gallery from "./Gallery";

class GalleryContainer extends React.Component{

    componentDidMount() {
        //debugger
        this.props.getPhotosets();
    }

    render() {
        //debugger
        return (<Gallery sets = {this.props.sets}/>)
    }
}
/*функция принимает state созданный в redux при помощи reducers
* и возвращает требуемые нам данные из state*/
let mapStateToProps = (state) => {
    return {
        sets: state.photos
    }
};

/*Создаем контейнерную кмпоненту MyNewsContainer*/
/*Двойные скобки обозначют что мы вызвали фукцию connect, а она
* в свою очередь возвращает нам фукцию во вторых скобках*/
export default connect(mapStateToProps, {getPhotosets})(GalleryContainer);