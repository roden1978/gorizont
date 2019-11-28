import {SET_NEWS} from "../actions/types";

let initialState = {
    news: [],
    projectTitle: ''
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
        default:
            return state;
    }
}

export default news_reducer;

/* [{__id:'123', title: 'title', text: 'text', project: 'project', createAt:'26.11.2019'},
        {__id:'1234', title: 'title', text: 'text', project: 'project', createAt:'26.11.2019'}]*/