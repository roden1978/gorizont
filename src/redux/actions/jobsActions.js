import {mongodbAPI} from '../../api/api'
import {SET_JOBS} from "../actions/types";

/*Создаем объект action с обязательным свойством type*/
export const setJobs = (jobs) => {
    return {
        type: SET_JOBS,
        payload: jobs
    }
}

/*Thunk Creators*/
export const getJobs = () => {
    return async (dispatch) => {
        const jobs = await mongodbAPI.getJobs();
        dispatch(setJobs(jobs));
    }
}
