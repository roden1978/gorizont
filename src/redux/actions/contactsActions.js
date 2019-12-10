import {mongodbAPI} from '../../api/api'
import {SET_CONTACTS} from "../actions/types";

/*Создаем объект action с обязательным свойством type*/
export const setContacts = (contacts) => {
    return {
        type: SET_CONTACTS,
        payload: contacts
    }
}

/*Thunk Creators*/
export const getContacts = () => {
    return async (dispatch) => {
        const contacts = await mongodbAPI.getContacts();
        dispatch(setContacts(contacts));
    }
}
