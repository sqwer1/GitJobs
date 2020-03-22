import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {getProfile, setProfile} from "../../redux/profile-reducers";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let profileId = this.props.match.params.profileId;
        this.props.getProfile(profileId);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.profileId != prevProps.match.params.profileId) {
            this.refreshProfile();
        }
    }
    componentWillUnmount() {
        this.props.setProfile(null);
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile
});

export default compose(
    connect (mapStateToProps, {getProfile, setProfile}),
    withRouter
)(ProfileContainer);
