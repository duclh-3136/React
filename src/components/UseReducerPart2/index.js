import { useRef, useReducer } from "react";
import reducer, {initState} from "./reducer";
import { setJob, addJob,  deleteJob} from './actions'

function UseReducerPart2 () {
    const refFocus = useRef();
    const [stateJob, dispatchJob] = useReducer(reducer, initState)
    const {job, jobs} = stateJob

    const handleAddJob = () => {
        dispatchJob(addJob(job))

        dispatchJob(setJob(''))

        refFocus.current.focus()
    }

    const handleDeleteJob = (index) => {
        dispatchJob(deleteJob(index))
    }

    return (
        <>
            <input
                value={job}
                placeholder="Enter job..."
                onChange={(e) => {dispatchJob(setJob(e.target.value))}}
                ref={refFocus}
            ></input>
            <button onClick={handleAddJob}>add job</button>
            <p>List Job</p>
            <ul>
                {
                    jobs.map((job, index) => {
                        return (
                            <li key={index+1}>{job + index}<button onClick={() => handleDeleteJob(index)}>X</button></li>
                        )
                    })
                }
            </ul>
        </>
    )

}

export default UseReducerPart2