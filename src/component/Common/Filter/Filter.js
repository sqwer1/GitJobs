import React from 'react';
import {createField, Input} from "../FormControl/FormControl";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {filter} from "../../../redux/jobs-reducers";

const FilterForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField ("Filter by description", "description", [], Input)}
            {createField ("Filter by location", "location", [], Input)}
            {createField (null, "time", [], Input, {type: "checkbox"}, "Full time only")}
            <button>Search</button>
            {error &&
            <div>
                {error}
            </div>}
        </form>
    )
};

const FilterReduxForm = reduxForm({form: 'filter'}) (FilterForm);

const Filter  = (props) => {
    const onSubmit = (formData) => {
        props.filter(formData.description, formData.location, formData.time);
    };
    return <div>
        <FilterReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => ({

});

export default connect (mapStateToProps, {filter}) (Filter)