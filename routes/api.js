'use strict'

const express = require('express')
const router = express.Router()
const _ = require('lodash')
const Helpers = require('../utils/Helpers')
const ProjectHelper = require('../utils/ProjectHelper')
const EmailHelper = require('../utils/EmailHelper')
const createError = require('http-errors')
const validator = require('email-validator')

module.exports = (dbHelper) => {
  router.post('/referral', async (req, res, next) => {
    try {
      const { referrerEmail, clientEmail } = req.body

      if (!referrerEmail || !validator.validate(referrerEmail))
        throw createError(400, 'Please enter a valid Referrer Email')
      if (!clientEmail || !validator.validate(clientEmail))
        throw createError(400, 'Please enter a valid Client Email')
      if (referrerEmail === clientEmail) throw createError(403, 'You cannot refer yourself!')

      const referralEntity = {
        referrerEmail: referrerEmail,
        clientEmail: clientEmail,
        ipAddress: req.connection.remoteAddress
      }
      const response = await dbHelper.addReferralRequest(referralEntity)

      const emailRecipients = await dbHelper.getEmailRecipients()
      await EmailHelper.sendEmail(emailRecipients, referralEntity, 'Pattern Faire', 'Referral Request', 'Referral')

      res.json(response[0])
    } catch (err) {
      next(err)
    }
  })

  router.post('/activity', async (req, res, next) => {
    try {
      const response = await dbHelper.addActivity(req.connection.remoteAddress)
      res.json(response[0])
    } catch (err) {
      next(err)
    }
  })

  router.post('/project', async (req, res, next) => {
    try {
      const validLocationTypes = await dbHelper.getValidLocationTypes()
      const projectHelper = ProjectHelper(req.body, validLocationTypes)
      projectHelper.validateNewProject()

      const projectEntity = projectHelper.createProjectEntity(req.body)
      const requestsWithOptions = projectHelper.getAllFieldsWithOptions(req.body)
      const spaceOptionsEntity = requestsWithOptions.spaceOptions.filter((x) => x.count > 0)

      const addProjectResponse = await dbHelper.addProject(projectEntity)
      const addInteriorDesignOptionsResponse = await dbHelper.addInteriorDesignOptions(
        'interiorDesignOptionMapping',
        requestsWithOptions.interiorDesignOptions,
        addProjectResponse[0].id
      )
      const addSpaceOptionsResponse = await dbHelper.addSpaceOptions(
        'spaceOptionMapping',
        spaceOptionsEntity,
        addProjectResponse[0].id
      )

      const emailRecipients = await dbHelper.getEmailRecipients()
      const emailEntity = projectHelper.createEmailEntity(
        addProjectResponse[0],
        _.flatten(addInteriorDesignOptionsResponse),
        _.flatten(addSpaceOptionsResponse)
      )
      const clientEmail = [{ email: addProjectResponse[0].email }]

      await EmailHelper.sendEmail(
        clientEmail,
        null,
        'Pattern Faire',
        `Project #${addProjectResponse[0].id} confirmed`,
        'Project-Client'
      )

      const subject = process.env.NODE_ENV === 'production' ? 'New Project Request' : 'New Project Request - DEV'
      await EmailHelper.sendEmail(emailRecipients, emailEntity, 'Pattern Faire', subject, 'Project')

      res.json({ status: 200, message: 'ok' })
    } catch (err) {
      next(err)
    }
  })

  return router
}
