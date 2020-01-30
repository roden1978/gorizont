import {mongodbAPI} from '../../api/api'
import {SET_CONTACTS, SET_IS_CHANGED_CONTACTS} from "../actions/types";

/*Создаем объект action с обязательным свойством type*/
export const setContacts = (contacts) => {
    return {
        type: SET_CONTACTS,
        payload: contacts
    }
}

export const setIsChangedContacts = (isChangedContacts) => {
    return {
        type: SET_IS_CHANGED_CONTACTS,
        payload: isChangedContacts
    }
}
/*Thunk Creators*/
export const getContacts = () => {
    return async (dispatch) => {
        const contacts = await mongodbAPI.getContacts();
        dispatch(setContacts(contacts));
    }
}

export const updateContacts = (id, companyName, companyAddress, companyEmail, companyPhone,
                               phoneOwner01, phone01, phoneOwner02, phone02,
                               phoneOwner03, phone03, phoneOwner04, phone04,
                               phoneOwner05, phone05) => {
    //debugger
    return async (dispatch) => {
        const data = await mongodbAPI.updateContacts({
            id, companyName, companyAddress, companyEmail, companyPhone,
            phoneOwner01, phone01, phoneOwner02, phone02,
            phoneOwner03, phone03, phoneOwner04, phone04,
            phoneOwner05, phone05
        });
        if (data.resultCode === 0) {
            dispatch(getContacts());
        }
    }
}

/*
* companyName: contactsData.companyName,
        companyAddress: contactsData.companyAddress,
        companyEmail: contactsData.companyEmail,
        companyPhone: contactsData.companyPhone,
        phoneOwner01: contactsData.phoneOwner01,
        phone01: contactsData.phone01,
        phoneOwner02: contactsData.phoneOwner02,
        phone02: contactsData.phone02,
        phoneOwner03: contactsData.phoneOwner03,
        phone03: contactsData.phone03,
        phoneOwner04: contactsData.phoneOwner04,
        phone04: contactsData.phone04,
        phoneOwner05: contactsData.phoneOwner05,
        phone05: contactsData.phone05,*/