import React from "react";
import styles from "./jobs.module.css";
import {NavLink} from "react-router-dom";

const Job = ({job,...props}) => {

    return <div className={styles.job}>
            <div className={styles.jobA}>
                <NavLink to={'/profile/'+ job.id}>
                    <span><div>{job.title}</div></span>
                 </NavLink>
                <span><div>{job.company} - {job.type}</div></span>
            </div>
            <div className={styles.jobB}>
                <span><div>{job.location}</div></span>
            </div>
    </div>
}

export default Job;