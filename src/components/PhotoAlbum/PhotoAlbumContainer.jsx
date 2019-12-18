import React from 'react';
import {getPhotos, getPhotoWithUrl} from '../../redux/actions/photosActions';
import {connect} from "react-redux";
import PhotoAlbum from "./PhotoAlbum";

class PhotoAlbumContainer extends React.Component{

    updatePrimary(){
        this.props.photos.length > 0 ? this.props.photos.every((card) => this.props.getPhotoWithUrl(card.id, card))
            : this.props.getPhotos(this.props.match.params.albumId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    debugger
        if(prevProps.photos.length === 0){
            this.updatePrimary();
        }

    }


    componentDidMount() {
        this.updatePrimary();
    }

    componentWillUnmount() {
        this.props.photosWithUrl.length = 0;
        this.props.photos.length = 0;
    }

    render() {
    debugger
        return (<PhotoAlbum cards = {this.props.photosWithUrl}/>)
    }
}
/*функция принимает state созданный в redux при помощи reducers
* и возвращает требуемые нам данные из state*/
let mapStateToProps = (state) => {
    return {
        photos: state.photos.photos,
        photosWithUrl: state.photos.photosWithUrl
    }
};

/*Создаем контейнерную кмпоненту MyNewsContainer*/
/*Двойные скобки обозначют что мы вызвали фукцию connect, а она
* в свою очередь возвращает нам фукцию во вторых скобках*/
export default connect(mapStateToProps, {getPhotos, getPhotoWithUrl})(PhotoAlbumContainer);