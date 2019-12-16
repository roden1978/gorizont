import React from 'react';
import {getPhotosets, getPhotoWithUrl} from '../../redux/actions/photosActions';
import {connect} from "react-redux";
import Gallery from "./Gallery";

class GalleryContainer extends React.Component{
    constructor(props) {
        super(props);
    }


    updatePrimary(){
             this.props.sets.length > 0 ? this.props.sets.every((set) => this.props.getPhotoWithUrl(set.primary, set))
        : this.props.getPhotosets();
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
    debugger
            if(prevProps.sets.length === 0){
                this.updatePrimary();
            }

        }


    componentDidMount() {
        debugger
        //this.props.getPhotosets();
        this.updatePrimary();
    }

    componentWillUnmount() {
        this.props.setsWithUrl.length = 0;
    }

    render() {
        debugger
        return (<Gallery sets = {this.props.setsWithUrl}/>)
    }
}
/*функция принимает state созданный в redux при помощи reducers
* и возвращает требуемые нам данные из state*/
let mapStateToProps = (state) => {
    return {
        sets: state.photos.sets,
        setsWithUrl: state.photos.setsWithUrl
    }
};

/*Создаем контейнерную кмпоненту MyNewsContainer*/
/*Двойные скобки обозначют что мы вызвали фукцию connect, а она
* в свою очередь возвращает нам фукцию во вторых скобках*/
export default connect(mapStateToProps, {getPhotosets, getPhotoWithUrl})(GalleryContainer);