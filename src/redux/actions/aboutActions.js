import {mongodbAPI} from '../../api/api'
import {SET_ABOUT, SET_IS_CHANGED_ABOUT} from "../actions/types";

/*Создаем объект action с обязательным свойством type*/
export const setAbout = (about) => {
    return {
        type: SET_ABOUT,
        payload: about
    }
}

export const setIsChangedAbout = (isChangedAbout) => {
    return {
        type: SET_IS_CHANGED_ABOUT,
        payload: isChangedAbout
    }
}

/*Thunk Creators*/
export const getAbout = () => {
    return async (dispatch) => {
        const about = await mongodbAPI.getAbout();
        dispatch(setAbout(about));
    }
}

export const updateAbout = (id, text) =>{
    //debugger
    return async (dispatch) =>{
        const data = await mongodbAPI.updateAbout({id, text});
        if (data.resultCode === 0) {
            dispatch(getAbout());
        }
    }
}
