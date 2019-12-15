import {flickrAPI} from '../../api/api'
import {SET_PHOTO_ALBUMS, SET_PHOTOS, SET_PHOTO, SET_PHOTO_WITH_URL} from "../actions/types";

/*Создаем объект action с обязательным свойством type*/
export const setPhotosets = (photosets) => {
    return {
        type: SET_PHOTO_ALBUMS,
        payload: photosets
    }
}

export const setPhotos = (photos) => {
    return {
        type: SET_PHOTOS,
        payload: photos
    }
}

export const setPhoto = (photo) => {
    return {
        type: SET_PHOTO,
        payload: photo
    }
}

export const setPhotoWithUrl = (photo, set) => {
    return {
        type: SET_PHOTO_WITH_URL,
        payload: photo,
        set: set
    }
}

/*Thunk Creators*/
export const getPhotosets = () => {
    return async (dispatch) => {
        const photosets = await flickrAPI.getAlbums();
        //debugger
        dispatch(setPhotosets(photosets));
    }
}

export const getPhotos = (id) => {
    return async (dispatch) => {
        const photos = await flickrAPI.getPhotos(id);
        dispatch(setPhotos(photos));
    }
}

export const getPhoto = (id) => {
    return async (dispatch) => {
        const photo = await flickrAPI.getPhoto(id);
        dispatch(setPhoto(photo));
    }
}

export const getPhotoWithUrl = (id, set) => {
    return async (dispatch) => {
        const photo = await flickrAPI.getPhoto(id);
        dispatch(setPhotoWithUrl(photo, set));
    }
}