import {mongodbAPI} from '../../api/api'
import {
    SET_PROJECTS,
    SET_PROJECT,
    SET_ID,
    IS_ALL_PROJECTS,
    CHANGE_PROJECTS_ITEM,
    SET_PROJECTS_ITEM,
    SET_PROJECTS_COUNT,
    LOAD_ALBUMS,
    SET_DEFAULT_PROJECT
} from "../actions/types";

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

export const setId = (id) => {
    return {
        type: SET_ID,
        payload: id
    }
}

export const setLoadAlbums = (loadAlbums) =>{
    return{
        type: LOAD_ALBUMS,
        payload: loadAlbums
    }
}
/**
 * Утановка флага для выполнения загрузки всех проектов без фильтров
 * @param isAllProjects
 * @returns {{payload: *, type: string}}
 */
export const setIsAllProjects = (isAllProjects) =>{
    return{
        type: IS_ALL_PROJECTS,
        payload: isAllProjects
    }
}

export const setChangeProjectsItem = () =>{
    return{
        type: CHANGE_PROJECTS_ITEM
    }
}

export const  setProjectsItem = (projectsItem) =>{
    return {
        type: SET_PROJECTS_ITEM,
        payload: projectsItem
    }
}

export const  setProjectsCount = (count) =>{
    return {
        type: SET_PROJECTS_COUNT,
        payload: count
    }
}

export const setDefaultProject = () =>{
    return{
        type: SET_DEFAULT_PROJECT
    }
}

/*Thunk Creators*/
/**
 * Диапатчим в state проекты полученные с сервера
 * @returns {function(...[*]=)}
 */
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

export const getId = (id) => {
    return (dispatch) => {
        dispatch(setId(id));
    }
}

export const getAllProjects = () => {
    return async (dispatch) => {
        const projects = await mongodbAPI.getAllProjects();
        dispatch(setProjects(projects));
    }
}

export const createProject = (title, description, text, albumId, albumName, status) =>{
    debugger
    return async (dispatch) =>{
        const data = await mongodbAPI.createProject({title, description, text, albumId, albumName, status});
        if (data.resultCode === 0) {
            dispatch(getAllProjects());
        }
    }
}

export const updateProject = (id, title, description, text, albumId, albumName, status, createAt) =>{
    debugger
    return async (dispatch) =>{
        const data = await mongodbAPI.updateProject({id, title, description, text, albumId, albumName, status, createAt});
        if (data.resultCode === 0) {
            dispatch(getAllProjects());
        }
    }
}

export const deleteProject = (id) =>{
    debugger
    return async (dispatch) =>{
        const data = await mongodbAPI.deleteProject({id});
        if (data.resultCode === 0) {
            dispatch(getAllProjects());
        }
    }
}


