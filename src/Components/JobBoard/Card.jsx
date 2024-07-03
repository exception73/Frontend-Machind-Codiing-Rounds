import React from 'react'

const JobCard = ({job, bgcolor}) => {
    console.log(job);
  return (
    <div style={{margin:"20px", backgroundColor:bgcolor}}>
        
      <h4>{job.title}</h4>
      <p>{job.by} </p>

    </div>
  )
}

export default JobCard