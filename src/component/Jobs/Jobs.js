import React from 'react';
import Job from "./job";
import Paginator from "../Common/Paginator/Paginator";

let Jobs = ({jobs, onPageChanged, currentPage, totalJobsCount, ...props}) => {
   if(jobs.length === 0) {
       return <div>Loading...</div>
   }
   return <div>
            <Paginator totalItemsCount={totalJobsCount} onPageChanged={onPageChanged} currentPage={currentPage}/>
            <div>
                {jobs.map(j => <Job job={j} key={j.id}/>)}
            </div>
   </div>
}

export default Jobs;