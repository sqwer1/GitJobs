import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {requestJobs, setName, setTotalJobsCount} from "../../redux/jobs-reducers";
import Jobs from "./Jobs";
import FilterPage from "../Common/Filter/Filter";

class JobsContainer extends React.Component {
    componentDidMount() {
        this.props.getJobs(this.props.currentPage, this.props.description, this.props.location, this.props.isTime);
    }
    onPageChanged = (pageNumber) => {
        this.props.getJobs(pageNumber, this.props.description, this.props.location, this.props.isTime);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.description != prevProps.description || this.props.location != prevProps.location || this.props.isTime != prevProps.isTime) {
            this.props.setTotalJobsCount(0);
            this.props.getJobs(this.props.currentPage, this.props.description, this.props.location, this.props.isTime);
        }
    }
    render() {
       return <>
               <FilterPage description={this.props.description} location={this.props.location}/>
               <Jobs jobs={this.props.jobs} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} totalJobsCount={this.props.totalJobsCount}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        name: state.jobs.name,
        jobs: state.jobs.jobs,
        currentPage: state.jobs.currentPage,
        totalJobsCount: state.jobs.totalJobsCount,
        description:  state.jobs.description,
        location: state.jobs.location,
        isTime: state.jobs.isTime
    }
}

export default compose(
    connect(mapStateToProps, {setName, getJobs: requestJobs, setTotalJobsCount})
)(JobsContainer);