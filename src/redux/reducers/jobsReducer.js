import {SET_JOBS} from "../actions/types";

let initialState = {
    jobs: []
}

const jobs_reducer = (state = initialState, action) => {

    //let copyState;// = {...state};

    //debugger
    switch (action.type) {
        case SET_JOBS: {
            /*копия МАССИВОВ в КВАДРАТНЫХ СКОБКАХ
            * копия  ПРИМИТИВОВ в ФИГУРНЫХ СКОБКАХ
            * копия ОБЪЕКТОВ И ПОДОБЪЕКТОВ в ФИГУРНЫХ СКОБКАХ*/
            return {
                ...state, jobs: action.payload
                //...state, news:[ ...state.news, {__id:'12345', title: 'title', text: 'text', project: 'project', createAt:'26.11.2019'}]//action.payload
            };
        }
        default:
            return state;
    }
}

export default jobs_reducer;

/* [{__id:'123', title: 'title', text: 'text', project: 'project', createAt:'26.11.2019'},
        {__id:'1234', title: 'title', text: 'text', project: 'project', createAt:'26.11.2019'}]*/