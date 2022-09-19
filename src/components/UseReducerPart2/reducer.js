import { actionAddJob, actionDeleteJob, actionSetJob } from './constans.js'

export const initState = {
    job: '',
    jobs: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionAddJob:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break;
        case actionDeleteJob:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)

            return {
                ...state,
                jobs: newJobs
            }
            break;
        case actionSetJob:
            return {
                ...state,
                job: action.payload
            }
            break;
    
        default:
            throw Error('input invalid');
    }
}

export default reducer