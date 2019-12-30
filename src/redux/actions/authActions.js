import {authAPI, mongodbAPI} from '../../api/api'
import {SET_AUTHORIZED} from "../actions/types";
import {setNews} from "./newsActions";

/*Создаем объект action с обязательным свойством type*/
export const setAuthorized = (isAuthorized) => {
    return {
        type: SET_AUTHORIZED,
        payload: isAuthorized
    }
}

/*Thunk Creators*/
export const getAuthorize = () => {
    return  async (dispatch) => {
        await authAPI.handleAuthentication()
            .then(result => {
                dispatch(setAuthorized(result))
            });


    }
}

/*
export const getNews = () => {
    return async (dispatch) => {
        const news = await mongodbAPI.getNews();
        dispatch(setNews(news));
    }
}*/
