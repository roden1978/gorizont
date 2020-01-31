import {
    SET_PROJECTS,
    SET_PROJECT,
    SET_ID,
    LOAD_ALBUMS,
    CHANGE_PROJECTS_ITEM,
    SET_PROJECTS_ITEM,
    IS_ALL_PROJECTS,
    SET_PROJECTS_COUNT
} from "../actions/types";

let initialState = {
    projects: [],
    id: null,
    loadAlbums: false,
    getProjectsItem: false,
    isAllProjects: false,
    projectsCount: null
}

const projects_reducer = (state = initialState, action) => {
//debugger
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
            case SET_ID: {
                return{
                    ...state, id: action.payload
                }
            }
        case  LOAD_ALBUMS:{
            return {
                ...state, loadAlbums: action.payload
            }
        }
        case  IS_ALL_PROJECTS:{
            return {
                ...state, isAllProjects: action.payload
            }
        }
        case  SET_PROJECTS_ITEM:{
            return {
                ...state, getProjectsItem: action.payload
            }
        }
        case CHANGE_PROJECTS_ITEM:{
            const projectsItem  = state.projects.find(item =>item._id === state.id)
            return {
                ...state, projects: [projectsItem]
            }
        }
        case SET_PROJECTS_COUNT :{
            return{
                ...state, projectsCount: action.payload
            }
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