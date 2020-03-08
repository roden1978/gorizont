import {mongodbAPI} from '../../api/api'
import {
    SET_NEWS,
    LOAD_PROJECTS,
    CHANGE_NEWS_ITEM,
    IS_ALL_NEWS,
    SET_NEWS_ITEM,
    SET_CURRENT_NEWS_ID,
    SET_NEWS_COUNT,
    SET_DEFAULT_NEWS,
    SET_PROJECT_ID_FOR_REDIRECT
} from "../actions/types";

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

export const getAllNews = () => {
    return async (dispatch) => {
        const news = await mongodbAPI.getAllNews();
        dispatch(setNews(news));
    }
}

export const createNews = (title, text, project, projectTitle, status) =>{
    //debugger
    return async (dispatch) =>{
        const data = await mongodbAPI.createNews({title, text, project, projectTitle, status});
        if (data.resultCode === 0) {
            dispatch(getAllNews());
        }
    }
}

export const updateNews = (id, title, text, project, projectTitle, status, createAt) =>{
    //debugger
    return async (dispatch) =>{
        const data = await mongodbAPI.updateNews({id, title, text, project, projectTitle, status, createAt});
        if (data.resultCode === 0) {
            dispatch(getAllNews());
        }
    }
}

export const deleteNews = (id) =>{
    //debugger
    return async (dispatch) =>{
        const data = await mongodbAPI.deleteNews({id});
        if (data.resultCode === 0) {
            dispatch(getAllNews());
        }
    }
}

export const checkProject=(id) =>{
    return async (dispatch) =>{
        const data = await mongodbAPI.getProject(id);
        if (data) {
            dispatch(setProjectIdForRedirect(data._id))
        }
    }
}

export const setLoadProjects = (loadProjects) =>{
    return{
        type: LOAD_PROJECTS,
        payload: loadProjects
    }
}

export const setIsAllNews = (isAllNews) =>{
    return{
        type: IS_ALL_NEWS,
        payload: isAllNews
    }
}

export const setChangeNewsItem = () =>{
    return{
        type: CHANGE_NEWS_ITEM
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
export const  setNewsCount = (count) =>{
    return {
        type: SET_NEWS_COUNT,
        payload: count
    }
}

export const setDefaultNews = () =>{
    return{
        type: SET_DEFAULT_NEWS
    }
}

export const  setProjectIdForRedirect = (id) =>{
    return {
        type: SET_PROJECT_ID_FOR_REDIRECT,
        payload: id
    }
}
