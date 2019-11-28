import {SET_PROJECTS, SET_PROJECT} from "../actions/types";

let initialState = {
    projects: []
}

const projects_reducer = (state = initialState, action) => {
debugger
    switch (action.type) {
        case SET_PROJECTS: {
            /*копия МАССИВОВ в КВАДРАТНЫХ СКОБКАХ
            * копия  ПРИМИТИВОВ в ФИГУРНЫХ СКОБКАХ
            * копия ОБЪЕКТОВ И ПОДОБЪЕКТОВ в ФИГУРНЫХ СКОБКАХ*/
            return {
                ...state, projects: action.payload
            };
            // break
        }
        case SET_PROJECT: {
            /*копия МАССИВОВ в КВАДРАТНЫХ СКОБКАХ
            * копия  ПРИМИТИВОВ в ФИГУРНЫХ СКОБКАХ
            * копия ОБЪЕКТОВ И ПОДОБЪЕКТОВ в ФИГУРНЫХ СКОБКАХ*/
            return {
                ...state, projects: [action.payload]
            };
            // break
        }

        default:
            return state;
    }
}

export default projects_reducer;


/*case SET_PROJECT: {
            /*копия МАССИВОВ в КВАДРАТНЫХ СКОБКАХ
            * копия  ПРИМИТИВОВ в ФИГУРНЫХ СКОБКАХ
            * копия ОБЪЕКТОВ И ПОДОБЪЕКТОВ в ФИГУРНЫХ СКОБКАХ*/
/*return {
    ...state, projects: [...state.projects, action.payload]
};
}*/