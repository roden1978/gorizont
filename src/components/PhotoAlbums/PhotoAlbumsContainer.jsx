import React from 'react';
import {getPhotos, getPhoto} from '../../redux/actions/photosActions';
import PhotoAlbums from "../PhotoAlbums/PhotoAlbums";
import {connect} from "react-redux";

class PhotoAlbumsContainer extends React.Component {

/* updateProject (){
     this.props.match.params.projectId ? this.props.getProject(this.props.match.params.projectId)
: this.props.getProjects();
}

componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.match.params.projectId !== prevProps.match.params.projectId)
        this.updateProject()
}*/
    componentDidMount() {
   //debugger
            //this.props.getPhotos(this.props.match.params.photosetId)
        //this.props.photoset.every(()=>{
            this.props.getPhotos(this.props.id);
        //})
    }



    render() {
        debugger
        return (<PhotoAlbums title = {this.props.title}
                             description = {this.props.description}
                             photos={this.props.photos.photo}/>)
    }
}

/*функция принимает state созданный в redux при помощи reducers
* и возвращает требуемые нам данные из state*/
let mapStateToProps = (state) => {
    return {
        photos: state.photos
    }
};

/*Создаем контейнерную кмпоненту MyNewsContainer*/
/*Двойные скобки обозначют что мы вызвали фукцию connect, а она
* в свою очередь возвращает нам фукцию во вторых скобках*/
export default connect(mapStateToProps, {getPhotos, getPhoto})(PhotoAlbumsContainer);