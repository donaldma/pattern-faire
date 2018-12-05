require('dotenv').config({ silent: true })
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const createError = require('http-errors')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD
  }
})

transporter.use(
  'compile',
  hbs({
    viewPath: 'config/templates',
    extName: '.hbs'
  })
)

const sendEmail = async (recipients, context, from, subject, template) => {
  recipients.map(async (recipient) => {
    const mailOptions = {
      from: `"${from}" <${process.env.GMAIL_ADDRESS}>`,
      to: recipient.email,
      subject: subject,
      template: template,
      context
    }
    try {
      await transporter.sendMail(mailOptions)
      console.log(`Email sucessfully sent to ${recipient.email}`)
    } catch (err) {
      return createError(500, 'Error sending email.')
    }
  })
}

module.exports = {
  sendEmail
}
