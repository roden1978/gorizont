import {mongodbAPI} from '../../api/api'
import {SET_ABOUT} from "../actions/types";

/*Создаем объект action с обязательным свойством type*/
export const setAbout = (about) => {
    return {
        type: SET_ABOUT,
        payload: about
    }
}

/*Thunk Creators*/
export const getAbout = () => {
    return async (dispatch) => {
        const about = await mongodbAPI.getAbout();
        dispatch(setAbout(about));
    }
}
