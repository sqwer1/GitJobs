import {jobsAPI} from "../api/api";

const SET_NAME = 'SET_NAME';
const SET_JOBS = 'SET_JOBS';
const SET_TOTAL_JOBS_COUNT = 'SET_TOTAL_JOBS_COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const SET_LOCATION = 'SET_LOCATION';
const SET_ISTIME = 'SET_ISTIME';


let initialState = {
    jobs: [],
    currentPage: 1,
    name: 'vasya',
    totalJobsCount: 0,
    description: undefined,
    location: undefined,
    isTime: false
};

const jobsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NAME: {
            return {
                ...state, name: state.name
            }
        }
        case SET_JOBS:
        case SET_TOTAL_JOBS_COUNT:
        case SET_CURRENT_PAGE:
        case SET_DESCRIPTION:
        case SET_LOCATION:
        case SET_ISTIME:
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }
};

export const setName = (name) => ({
    type: SET_NAME,
    name
});
export const setJobs = (jobs) => ({
    type: SET_JOBS,
    payload: {jobs}
});
export const setTotalJobsCount = (totalJobsCount) => ({
    type: SET_TOTAL_JOBS_COUNT,
    payload: {totalJobsCount}
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    payload: {currentPage}
});
export const setDescription = (description) => ({
    type: SET_DESCRIPTION,
    payload: {description}
});
export const setLocation = (location) => ({
    type: SET_LOCATION,
    payload: {location}
});
export const setIsTime = (isTime) => ({
    type: SET_ISTIME,
    payload: {isTime}
});

export const requestJobs = (currentPage, description, location, isTime) => {
    return async (dispatch) => {
        let data = [];
        dispatch(setJobs(data));
        dispatch(setCurrentPage(currentPage));
        data = await jobsAPI.getJobs(currentPage, description, location, isTime);
        dispatch(setJobs(data));
        let countJobs = 0;
        for (let i = 1; ; i++) {
            let dataFor = await jobsAPI.getJobsLength(i, description, location, isTime);
            if (dataFor !== 0) {
                countJobs = countJobs + dataFor;
            } else {
                dispatch(setTotalJobsCount(countJobs));
                break;
            }
        }
    }
};
export const filter = (description, location, isTime) => {
    return async (dispatch) => {
        dispatch(setDescription(description));
        dispatch(setLocation(location));
        dispatch(setCurrentPage(1));
        dispatch(setIsTime(isTime));
    }
}


export default jobsReducer;