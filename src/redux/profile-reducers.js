import {jobsAPI} from "../api/api";

const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        default: return state;
    }
}

export const setProfile = (profile) => ({
    type: SET_PROFILE,
    profile
})

export const getProfile = (profileId) => async (dispatch) => {
        let data = await jobsAPI.getProfile(profileId);
        dispatch(setProfile(data));
}

export default profileReducer;



