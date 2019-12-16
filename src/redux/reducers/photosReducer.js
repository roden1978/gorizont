import {SET_PHOTO_ALBUMS, SET_PHOTOS, SET_PHOTO, SET_PHOTO_WITH_URL} from "../actions/types";

let initialState = {
    sets: [],
    setsWithUrl: [],
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
           /* let primaryPhoto = null;
            //debugger
            if (action.payload.sizes.size.length > 0) {
                primaryPhoto = action.payload.sizes.size.find(ph => ph.label == "Medium")
            }*/
            return {
                //...state, photo: [...state.photo,{...action.payload.sizes, primary: action.primary}]
                ...state, photo: action.payload.sizes.size
            };
        }
        case SET_PHOTO_WITH_URL:{
            debugger
            const size = action.payload.sizes.size.find(ph => ph.label == "Medium")
            return {
                ...state,
                setsWithUrl: [...state.setsWithUrl, {...action.set, primary: size.source}]
                }

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