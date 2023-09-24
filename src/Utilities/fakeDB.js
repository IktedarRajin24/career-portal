const getAppliedJobs = ()=>{
    let appliedJobs = {}

    const jobs = localStorage.getItem('applied-jobs');
    if(jobs){
        appliedJobs = JSON.parse(jobs);
    }
    return appliedJobs;
}

const addToDb = (id, job)=>{
    console.log(id, job)
    let appliedJobs = getAppliedJobs();

    let added = appliedJobs[id];

    if (!added){
        appliedJobs[id] = job;
        
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
    }

    
}

const removeFromDb = id=>{
    let appliedJobs = getAppliedJobs();
    if(id in appliedJobs){
        delete appliedJobs[id];
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
    }
}


const deleteAppliedJobs = () =>{
    localStorage.removeItem('applied-jobs');
}



export{
    addToDb,
    removeFromDb,
    getAppliedJobs,
    deleteAppliedJobs
}