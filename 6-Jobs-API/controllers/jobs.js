const Job = require("../models/Job")

const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllJobs = async (req, res) => {
    
    const job = await Job.find({ createdBy: req.user.userId }).sort('createdAt')
    // const job = await Job.find({})
    res.status(StatusCodes.OK).json({ job })

}

const getJob = async (req, res) => {
    res.send('get job')
}

const createJob = async (req, res) => {
    // res.send('create job')
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
}


const updateJob = async (req, res) => {
    res.send('update job')

}

const deleteJob = async (req, res) => {
    res.send('delete job')

}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}