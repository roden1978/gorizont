import React from 'react';
import {getPhoto} from '../../redux/actions/photosActions';
import PhotoAlbums from "../PhotoAlbums/PhotoAlbums";
import {connect} from "react-redux";

class PhotoAlbumsContainer extends React.Component {

    constructor() {
        super();
        this.result = null;
        this.size = null;
        this.url = null;
    }
    //this.size  = null;
    /* updatePrimary(){
         this.props.primary ? this.props.getPhoto(this.props.primary)
    : this.props.getPhotos(this.props.id);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.primary !== prevProps.primary)
            this.updatePrimary()
    }*/
    componentDidMount() {
        debugger
        //this.props.getPhotos(this.props.match.params.photosetId)
        //this.props.photoset.every(()=>{
        this.props.getPhoto(this.props.primary);
        //})
        //this.updatePrimary();
    }


    render() {
        debugger
        //props.photos.photo
        if(this.props.photos.photo.length > 0)
        this.result = this.props.photos.photo.filter(ph => this.props.photos.sets.every(
            set => ph.primary === set.primary)
        )

        if (this.result)
        {
            this.size = this.result.sizes.size.find(ph => ph.label === "Medium");
        }

        if(this.size){
            this.url  = this.size.source;
        }
        return (<PhotoAlbums title={this.props.title}
                             description={this.props.description}
                             url={this.url}/>)
    }
}

/*функция принимает state созданный в redux при помощи reducers
* и возвращает требуемые нам данные из state*/
let mapStateToProps = (state) => {
    return {
        photos: state.photos,
        photo: state.photo,
        primaryPhotoURL: state.primaryPhotoURL
    }
};

/*Создаем контейнерную кмпоненту MyNewsContainer*/
/*Двойные скобки обозначют что мы вызвали фукцию connect, а она
* в свою очередь возвращает нам фукцию во вторых скобках*/
export default connect(mapStateToProps, {getPhoto})(PhotoAlbumsContainer);


/*id={this.props.id}
                             photos={this.props.photos}
                             photo={this.props.photo}*/