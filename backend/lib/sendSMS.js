// require('dotenv').config();

const sendSMS = function(phone,
  message,
  TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER,
  TWILIO_ACCOUT_SID = process.env.TWILIO_ACCOUT_SID,
  TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN) {

  const client = require('twilio')(
    TWILIO_ACCOUT_SID,
    TWILIO_AUTH_TOKEN
  );

  client.messages
    .create({
      body: message,
      from: TWILIO_PHONE_NUMBER,
      to: phone || process.env.ADMIN_PHONE_NUMBER
    })
    .then(message => console.log(message.sid));

};

module.exports = { sendSMS };