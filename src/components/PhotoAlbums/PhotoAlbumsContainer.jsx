import React from 'react';
import {getPhotos, getPhoto} from '../../redux/actions/photosActions';
import PhotoAlbums from "../PhotoAlbums/PhotoAlbums";
import {connect} from "react-redux";

class PhotoAlbumsContainer extends React.Component {

     updatePrimary(){
         this.props.primary ? this.props.getPhoto(this.props.primary)
    : this.props.getPhotos(this.props.id);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.primary !== prevProps.primary)
            this.updatePrimary()
    }
    componentDidMount() {
        //debugger
        //this.props.getPhotos(this.props.match.params.photosetId)
        //this.props.photoset.every(()=>{
        //this.props.getPhotos(this.props.id);
        //})
        this.updatePrimary();
    }


    render() {
    //debugger
        return (<PhotoAlbums title={this.props.title}
                             description={this.props.description}
                             id={this.props.id}
                             photos={this.props.photos}
                             photo={this.props.photo}
        primary = {this.props.primary}/>)
    }
}

/*функция принимает state созданный в redux при помощи reducers
* и возвращает требуемые нам данные из state*/
let mapStateToProps = (state) => {
    return {
        photos: state.photos,
        photo: state.photo
    }
};

/*Создаем контейнерную кмпоненту MyNewsContainer*/
/*Двойные скобки обозначют что мы вызвали фукцию connect, а она
* в свою очередь возвращает нам фукцию во вторых скобках*/
export default connect(mapStateToProps, {getPhotos, getPhoto})(PhotoAlbumsContainer);