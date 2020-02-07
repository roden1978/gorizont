import {mongodbAPI} from '../../api/api'
import {SET_USERS,CHANGE_USERS_ITEM,SET_USERS_ITEM,
    SET_CURRENT_USERS_ID, SET_USERS_COUNT, IS_ALL_USERS
} from "../actions/types";

/*Создаем объект action с обязательным свойством type*/
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    }
}

/*Thunk Creators*/
export const getUsers = () => {
    return async (dispatch) => {
        const users = await mongodbAPI.getUsers();
        dispatch(setUsers(users));
    }
}


export const createUser = (title, text, project, projectTitle, status) =>{
    //debugger
    return async (dispatch) =>{
        const data = await mongodbAPI.createUser({title, text, project, projectTitle, status});
        if (data.resultCode === 0) {
            dispatch(getUsers());
        }
    }
}

export const updateUser = (id, title, text, project, projectTitle, status, createAt) =>{
    //debugger
    return async (dispatch) =>{
        const data = await mongodbAPI.updateUser({id, title, text, project, projectTitle, status, createAt});
        if (data.resultCode === 0) {
            dispatch(getUsers());
        }
    }
}

export const deleteUser = (id) =>{
    //debugger
    return async (dispatch) =>{
        const data = await mongodbAPI.deleteUser({id});
        if (data.resultCode === 0) {
            dispatch(getUsers());
        }
    }
}

export const setIsAllUsers = (isAllUsers) =>{
    return{
        type: IS_ALL_USERS,
        payload: isAllUsers
    }
}

export const setChangeUsersItem = () =>{
    return{
        type: CHANGE_USERS_ITEM
    }
}

export const  setUser = (user) =>{
    return {
        type: SET_USERS_ITEM,
        payload: user
    }
}

export const  setCurrentUsersId = (id) =>{
    return {
        type: SET_CURRENT_USERS_ID,
        payload: id
    }
}
export const  setUsersCount = (count) =>{
    return {
        type: SET_USERS_COUNT,
        payload: count
    }
}