import {authAPI} from '../../api/api'
import {SET_AUTHORIZED} from "../actions/types";

/*Создаем объект action с обязательным свойством type*/
export const setAuthorized = (isAuthorized) => {
    return {
        type: SET_AUTHORIZED,
        payload: isAuthorized
    }
}

/*Thunk Creators*/
export const getAuthorize = () => {
    return  (dispatch) => {
        debugger
        const result = authAPI.handleAuthentication()
        dispatch(setAuthorized(result));
    }
}
