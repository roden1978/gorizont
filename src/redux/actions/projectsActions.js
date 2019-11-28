import {mongodbAPI} from '../../api/api'
import {SET_PROJECTS, SET_PROJECT} from "../actions/types";

/*Создаем объект action с обязательным свойством type*/
export const setProjects = (projects) => {
    return {
        type: SET_PROJECTS,
        payload: projects
    }
}

export const setProject = (project) => {
    return {
        type: SET_PROJECT,
        payload: project
    }
}

/*Thunk Creators*/
export const getProjects = () => {
    return async (dispatch) => {
        const projects = await mongodbAPI.getProjects();
        dispatch(setProjects(projects));
    }
}

export const getProject = (id) => {
    return async (dispatch) => {
        const project = await mongodbAPI.getProject(id);
        dispatch(setProject(project));
    }
}
