import React from "react";
import styles from "../../Profile/profile.module.css";
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const showError = touched && error;
    return (
        <div>
            <div>
                {children}
            </div>
            {showError && <span>{error}</span>}
        </div>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div className={styles.test}>
        <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/> {text}
    </div>
)
