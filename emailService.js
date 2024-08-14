const nodemailer = require("nodemailer");
require("dotenv").config();

function createTransporter(isBackup = false) {
  return nodemailer.createTransport({
    secure: false,
    service: isBackup
      ? process.env.BACKUP_SMTP_SERVICE
      : process.env.SMTP_SERVICE,
    host: isBackup ? process.env.BACKUP_SMTP_HOST : process.env.SMTP_HOST,
    port: isBackup ? process.env.BACKUP_SMTP_PORT : process.env.SMTP_PORT,
    auth: {
      user: isBackup ? process.env.BACKUP_SMTP_USER : process.env.SMTP_USER,
      pass: isBackup ? process.env.BACKUP_SMTP_PASS : process.env.SMTP_PASS,
    },
  });
}

function sendEmail(emailOptions, isBackup = false) {
  const transporter = createTransporter(isBackup);
  return transporter.sendMail(emailOptions);
}

module.exports = sendEmail;
