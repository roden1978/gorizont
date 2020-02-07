import {authAPI, mongodbAPI} from '../../api/api'
import {SET_AUTHORIZED, SET_ADMIN_MODE, SET_ROOT_MODE} from "../actions/types";
import {getAllNews} from "./newsActions";

/*Создаем объект action с обязательным свойством type*/
export const setAuthorized = (isAuthorized) => {
    return {
        type: SET_AUTHORIZED,
        payload: isAuthorized
    }
}

export const setAdminMode = (adminMode) => {
    return {
        type: SET_ADMIN_MODE,
        payload: adminMode
    }
}

export const setRootMode = (root) => {
    return {
        type: SET_ROOT_MODE,
        payload: root
    }
}

/*Thunk Creators*/
export const getAuthorize = () => {

    return  async (dispatch) => {
        await authAPI.handleAuthentication()
            .then(result => {
                dispatch(setAdminMode(true))
                dispatch(setAuthorized(result))
            });


    }
}
export const checkUser = (email, password) =>{
    //debugger
    return async (dispatch) =>{
        const data = await authAPI.checkUser({email, password});
        if (data) {
            //dispatch(getAllNews());
            //console.log(data);
            dispatch(setAdminMode(true));
        }
    }
}

/*
export const getNews = () => {
    return async (dispatch) => {
        const news = await mongodbAPI.getNews();
        dispatch(setNews(news));
    }
}

.resultCode === 0
*/
