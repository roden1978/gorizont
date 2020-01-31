import {SET_NEWS, LOAD_PROJECTS, CHANGE_NEWS_ITEM,
    IS_ALL_NEWS, SET_NEWS_ITEM, SET_CURRENT_NEWS_ID,
SET_NEWS_COUNT} from "../actions/types";

let initialState = {
    news: [],
    loadProjects: false,
    getNewsItem: false,
    isAllNews: false,
    currentNewsId: null,
    newsCount: null
}

const news_reducer = (state = initialState, action) => {

    //let copyState;// = {...state};

    //debugger
    switch (action.type) {
        case SET_NEWS: {
            /*копия МАССИВОВ в КВАДРАТНЫХ СКОБКАХ
            * копия  ПРИМИТИВОВ в ФИГУРНЫХ СКОБКАХ
            * копия ОБЪЕКТОВ И ПОДОБЪЕКТОВ в ФИГУРНЫХ СКОБКАХ*/
            return {
                ...state, news: action.payload
                //...state, news:[ ...state.news, {__id:'12345', title: 'title', text: 'text', project: 'project', createAt:'26.11.2019'}]//action.payload
            };
        }
        case  LOAD_PROJECTS:{
            return {
                ...state, loadProjects: action.payload
            }
        }
        case  IS_ALL_NEWS:{
            return {
                ...state, isAllNews: action.payload
            }
        }
        case  SET_NEWS_ITEM:{
            return {
                ...state, getNewsItem: action.payload
            }
        }
        case CHANGE_NEWS_ITEM:{
            const newsItem  = state.news.find(item =>item._id === state.currentNewsId)
            return {
                ...state, news: [newsItem]
            }
        }
        case SET_CURRENT_NEWS_ID :{
            return{
                ...state, currentNewsId: action.payload
            }
        }
        case SET_NEWS_COUNT :{
            return{
                ...state, newsCount: action.payload
            }
        }
        default:
            return state;
    }
}

export default news_reducer;

/* [{__id:'123', title: 'title', text: 'text', project: 'project', createAt:'26.11.2019'},
        {__id:'1234', title: 'title', text: 'text', project: 'project', createAt:'26.11.2019'}]*/