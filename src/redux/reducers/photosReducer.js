import {SET_PHOTO_ALBUMS, SET_PHOTOS, SET_PHOTO} from "../actions/types";

let initialState = {
    sets: [],
    photos: [],
    photo: [],
    primaryPhotoURL: null
}

const photos_reducer = (state = initialState, action) => {
//debugger
    switch (action.type) {
        case SET_PHOTO_ALBUMS: {
            /*копия МАССИВОВ в КВАДРАТНЫХ СКОБКАХ
            * копия  ПРИМИТИВОВ в ФИГУРНЫХ СКОБКАХ
            * копия ОБЪЕКТОВ И ПОДОБЪЕКТОВ в ФИГУРНЫХ СКОБКАХ*/
            return {
                ...state, sets: action.payload
            };
        }
        case SET_PHOTOS: {
            /*копия МАССИВОВ в КВАДРАТНЫХ СКОБКАХ
            * копия  ПРИМИТИВОВ в ФИГУРНЫХ СКОБКАХ
            * копия ОБЪЕКТОВ И ПОДОБЪЕКТОВ в ФИГУРНЫХ СКОБКАХ*/
            return {
                ...state, photos: action.payload.photoset.photo
            };
        }
        case SET_PHOTO: {
            /*копия МАССИВОВ в КВАДРАТНЫХ СКОБКАХ
            * копия  ПРИМИТИВОВ в ФИГУРНЫХ СКОБКАХ
            * копия ОБЪЕКТОВ И ПОДОБЪЕКТОВ в ФИГУРНЫХ СКОБКАХ*/
            let primaryPhoto = null;
            //debugger
            if (action.payload.sizes.size.length > 0) {
                primaryPhoto = action.payload.sizes.size.find(ph => ph.label == "Medium")
            }
            return {
                ...state, photo: action.payload.sizes.size, primaryPhotoURL: primaryPhoto.source
            };
        }
        default:
            return state;
    }

    //let copyState;// = {...state};
    //debugger
}

export default photos_reducer;

/* [{__id:'123', title: 'title', text: 'text', project: 'project', createAt:'26.11.2019'},
        {__id:'1234', title: 'title', text: 'text', project: 'project', createAt:'26.11.2019'}]*/