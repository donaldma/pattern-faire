const _ = require('lodash')
const moment = require('moment-timezone')
const EmailHelper = require('../utils/EmailHelper')

const runUniqueUsersReport = async (dbHelper) => {
  try {
    const uniqueUsers = await dbHelper.getUniqueUsers()
    const emailRecipients = await dbHelper.getEmailRecipients()

    const today = moment().tz('America/Los_Angeles').format('dddd, MMMM Do, YYYY')
    const groupedByDate = _.groupBy(uniqueUsers, x => moment(x.created_at).tz('America/Los_Angeles').format('YYYY-MM-DD'))
    const uniqueUsersByDate = Object.keys(groupedByDate).map(key => {
      return {
        date: key,
        uniqueUsers: groupedByDate[key].length
      }
    })
    const sortedUniqueUsersByDate = _.sortBy(uniqueUsersByDate, x => moment(x.date).tz('America/Los_Angeles'))
    const finalizedData = sortedUniqueUsersByDate.map(x => {
      const formattedDate = moment(x.date).format('dddd, MMMM Do, YYYY')
      return {
        ...x,
        date: formattedDate === today ? `${formattedDate} <b>(Today)</b>` : formattedDate
      }
    })

    await EmailHelper.sendEmail(emailRecipients, { uniqueUsersByDate: finalizedData.reverse() }, 'Pattern Analytics', `Daily Report: ${today}`, 'DailyReports')
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  runUniqueUsersReport
}