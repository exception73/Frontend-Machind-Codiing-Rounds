import React, { useEffect, useRef, useState } from 'react';
import JobCard from './Card';

const JobBoard = () => {
    const [jobsId, setJobId] = useState([]);
    const [jobs, setJobs] = useState([]);
    const jobListRef = useRef(null);

    async function handleLoadMore(){
        const newJobs = [];
        async function fetchJob(id){
            const data = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
            const res = await data.json();
            newJobs.push(res);
        }

        for(let i = jobs.length; i < Math.min(jobsId.length, jobs.length + 6); i++){
            await fetchJob(jobsId[i]);
        }

        setJobs(prevJobs => [...prevJobs, ...newJobs]);
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json');
            const res = await data.json();
            setJobId(res.slice(0, 20));
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (jobsId.length > 0) {
            handleLoadMore();
        }
    }, [jobsId]);

    useEffect(() => {
        if (jobListRef.current) {
            jobListRef.current.scrollTop = jobListRef.current.scrollHeight;
        }
    }, [jobs]);

    return (
        <div>
            <div ref={jobListRef} style={{ height: '700px', overflow: 'scroll' }}>
                {jobs.length ? jobs.map((val, ind) => (
                    <JobCard bgcolor = {ind&1 ? 'darkgrey' : 'grey'} key={ind} job={val} />
                )) : <p>Loading Jobs....</p>}
            </div>
            {jobs.length !== jobsId.length ? <button onClick={handleLoadMore}> Show More</button> : <p>No More Jobs :(</p>}
        </div>
    );
}

export default JobBoard;
