import {mongodbAPI} from '../../api/api'
import {SET_NEWS,
    LOAD_PROJECTS,
    CHANGE_NEWS_ITEM,
    GET_ALL_NEWS,
    SET_NEWS_ITEM,
SET_CURRENT_NEWS_ID} from "../actions/types";

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

export const saveNews = (id, title, text, project, projectTitle, status, createAt) =>{
    debugger
    return async (dispatch) =>{
        const data = await mongodbAPI.updateNews({id, title, text, project, projectTitle, status, createAt});
        if (data.resultCode === 0) {
            dispatch(getNews());
        }
    }
}

export const setLoadProjects = (loadProjects) =>{
    return{
        type: LOAD_PROJECTS,
        payload: loadProjects
    }
}

export const setChangeNewsItem = () =>{
    return{
        type: CHANGE_NEWS_ITEM
    }
}

export const setAllNews = (allNews) =>{
    return{
        type: GET_ALL_NEWS,
        payload: allNews
    }

}

export const  setNewsItem = (newsItem) =>{
    return {
        type: SET_NEWS_ITEM,
        payload: newsItem
    }
}

export const  setCurrentNewsId = (id) =>{
    return {
        type: SET_CURRENT_NEWS_ID,
        payload: id
    }
}