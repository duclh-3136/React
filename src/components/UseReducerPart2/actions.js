import { actionAddJob, actionDeleteJob, actionSetJob } from './constans.js'

export function setJob(payload) {
    return {
        type: actionSetJob,
        payload
    }
}

export function addJob(payload) {
    return {
        type: actionAddJob,
        payload
    }
}

export function deleteJob(payload) {
    return {
        type: actionDeleteJob,
        payload
    }
}