import {authAPI, mongodbAPI} from '../../api/api'
import {SET_AUTHORIZED, SET_ADMIN_MODE, SET_IS_USERS} from "../actions/types";
import {getAllNews} from "./newsActions";

/*Создаем объект action с обязательным свойством type*/
export const setAuthorized = (isAuthorized) => {
    return {
        type: SET_AUTHORIZED,
        payload: isAuthorized
    }
}

export const setAdminMode = (adminMode, adminRoot) => {
    return {
        type: SET_ADMIN_MODE,
        payload: adminMode,
        adminRoot: adminRoot
    }
}

export const setIsUsers = (isUsers) => {
    return {
        type: SET_IS_USERS,
        payload: isUsers
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
        console.log(data + '1233');
        if (data) {
            //dispatch(getAllNews());

            dispatch(setAdminMode(true, data.root));
            /*if(data.root)
                dispatch(setRootMode(true))*/
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
