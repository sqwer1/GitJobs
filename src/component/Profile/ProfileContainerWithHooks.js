import React, {useState, useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfile, setProfile} from "../../redux/profile-reducers";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";

const ProfileContainerWithHooks = (props) => {
    const refreshProfile = () => {
        let profileId = props.match.params.profileId;
        props.getProfile(profileId);
    };
    useEffect(() => {
        refreshProfile();
    }, []);
    useEffect(() => {
        props.setProfile(null);
    }, []);
    return (
        <div>
            <Profile {...props} profile={props.profile}/>
        </div>
    )
};

let mapStateToProps = (state) => ({
    profile: state.profile.profile
});

export default compose(
    connect (mapStateToProps, {getProfile, setProfile}),
    withRouter
)(ProfileContainerWithHooks);
