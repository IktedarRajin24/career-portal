import { getAppliedJobs } from "./fakeDB";

const appliedJobs = async () =>{
    const jobs = await fetch('data/jobs.json')
    const allJobs = await jobs.json()
    const appliedJobs = getAppliedJobs();
    const savedJobs = []
    for(const id in appliedJobs){
        const addedJob = allJobs.find(job => job.id === parseInt(id));
        if(addedJob){
            savedJobs.push(addedJob);
        }
    }
    return savedJobs
}

export {appliedJobs};