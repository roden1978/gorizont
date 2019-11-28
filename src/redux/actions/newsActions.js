import {mongodbAPI} from '../../api/api'
import {SET_NEWS} from "../actions/types";

/*Создаем объект action с обязательным свойством type*/
export const setNews = (news) => {
    return {
        type: SET_NEWS,
        payload: news
    }
}

/*Thunk Creators*/
export const getNews = () => {
    return async (dispatch) => {
        const news = await mongodbAPI.getNews();
        dispatch(setNews(news));
    }
}
