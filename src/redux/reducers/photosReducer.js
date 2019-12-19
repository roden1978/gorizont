import {
    SET_PHOTO_ALBUMS,
    SET_PHOTOS,
    SET_PHOTO,
    SET_URL_TO_ALBUMS,
    SET_URL_TO_PHOTOS,
    IS_CLICKED,
    SET_URL
} from "../actions/types";

let initialState = {
    sets: [],
    setsWithUrl: [],
    photos: [],
    photosWithUrl: [],
    photo: [],
    isClicked: false,
    url: ''
}

const photos_reducer = (state = initialState, action) => {
debugger
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
            return {
                ...state, photo: action.payload.sizes.size
            };
        }
        case SET_URL_TO_ALBUMS:{
            //debugger
            const size = action.payload.sizes.size.find(ph => ph.label == "Medium")
            return {
                ...state,
                setsWithUrl: [...state.setsWithUrl, {...action.set, primary: size.source}]
                }

        }
        case SET_URL_TO_PHOTOS:{
        //debugger
            const size = action.payload.sizes.size.find(ph => ph.label == "Large")
            return {
                ...state,
                photosWithUrl: [...state.photosWithUrl, {...action.card, url: size.source}]
            }

        }
        case IS_CLICKED:{
            return {...state, isClicked: action.payload}
        }
        case SET_URL:{
            return {...state, url: action.payload}
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