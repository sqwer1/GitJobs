import React from "react";
import marked from "marked";
import styles from "./profile.module.css";

const Profile = (props) => {
    const getMarkdownText = () => {
        let rawMarkup = marked(props.profile.description, {sanitize: true});
        return {__html: rawMarkup };
    };
    if(!props.profile) {
        return <div>Loading...</div>
    }

    return <div className={styles.profile}>
        <div className={styles.profileA}>
            <div><h5>{props.profile.type} / {props.profile.location}</h5></div>
            <div><h2>{props.profile.title}</h2></div>
            <div dangerouslySetInnerHTML={getMarkdownText()}/>
        </div>
        <div className={styles.profileB}>
            <img className={styles.profileLogo} src={props.profile.company_logo}/>
        </div>
    </div>
};

export default Profile;