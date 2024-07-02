import React from 'react'


// {
//     "by": "jamilbk",
//     "id": 35908337,
//     "score": 1,
//     "time": 1683838872,
//     "title": "Firezone (YC W22) is hiring Elixir and Rust engineers",
//     "type": "job",
//     "url": "https://www.ycombinator.com/companies/firezone/jobs"
//   }


const JobCard = ({job}) => {
    console.log(job);
  return (
    <div style={{margin:"20px", backgroundColor:'grey'}}>
        
      <h4>{job.title}</h4>
      <p>{job.by} </p>

    </div>
  )
}

export default JobCard