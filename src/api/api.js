import * as axios from "axios";
import React from "react";

const instance = axios.create({
    baseURL: 'https://request-forward.herokuapp.com/jobs.github.com/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
}
});
export const jobsAPI = {
    getJobs (currentPage, description, location, isTime) {
        let gettext = `positions.json?page=${currentPage}`;
        if (description != undefined) {
            gettext = gettext + `&description=${description}`;
        }
        if (location != undefined) {
            gettext = gettext + `&location=${location}`;
        }
        if (isTime === true) {
            gettext = gettext + `&full_time=on`;
        }
            return instance.get(gettext)
                .then(response => {
                    console.log(response);
                    return response.data;
                });
    },
    getProfile (profileId) {
        return instance.get(`positions/` + profileId + `.json?markdown=true`)
            .then(response => {
                return response.data;
            });
    },
    getJobsLength (currentPage, description, location, isTime) {
        let gettext = `positions.json?page=${currentPage}`;
        if (description != undefined) {
            gettext = gettext + `&description=${description}`;
        }
        if (location != undefined) {
            gettext = gettext + `&location=${location}`;
        }
        if (isTime === true) {
            gettext = gettext + `&full_time=on`;
        }
        return instance.get(gettext)
            .then(response => {
                return response.data.length;
            });
    }
};
