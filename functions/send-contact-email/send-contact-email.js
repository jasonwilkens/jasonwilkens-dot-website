require('dotenv').config()
const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_URL, FROM_EMAIL_ADDRESS, CONTACT_TO_EMAIL_ADDRESS } = process.env
const mailgun = require('mailgun-js')({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN, url: MAILGUN_URL })

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed', headers: { 'Allow': 'POST' } }
  }

  const data = JSON.parse(event.body)
  if (!data.message) {
    return { statusCode: 422, body: 'A message is required.' }
  }

  const mailgunData = {
    from: FROM_EMAIL_ADDRESS,
    to: CONTACT_TO_EMAIL_ADDRESS,
    'h:Reply-To': data.contactEmail,
    subject: `New contact from ${data.contactEmail ? data.contactEmail : 'mystery sender'}`,
    text: `Message: ${data.message}`
  }
  return mailgun.messages().send(mailgunData).then(() => ({
    statusCode: 200,
    body: "Message received"
  })).catch(error => ({
    statusCode: 422,
    body: `Error: ${error}`
  }))
}