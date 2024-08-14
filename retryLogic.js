const sendEmail = require("./emailService");

// Utility function to create a delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sendWithRetry(emailOptions, maxRetries = 3) {
  let attempts = 0;
  let isBackup = false;
  let delayTime = 1000;

  while (attempts < maxRetries) {
    try {
      await sendEmail(emailOptions, isBackup);
      console.log("Email sent successfully!");
      return;
    } catch (error) {
      attempts++;
      console.log(`Attempt ${attempts} failed: ${error.message}`);

      if (attempts === maxRetries && !isBackup) {
        console.log("Switching to backup service...");
        isBackup = true;
        attempts = 0; // Reset attempts for backup service
      } else {
        console.log(
          `Waiting ${delayTime / 1000} seconds before next attempt...`
        );
        // Calculate the delay time in exponential backoff
        await delay(delayTime);
        delayTime = attempts * 5 * 1000;
      }
    }
  }
  console.log("All attempts failed. Email could not be sent.");
}

module.exports = sendWithRetry;
