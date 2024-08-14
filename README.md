# Email Notification Service

A Node.js service for sending emails with retry logic and a backup SMTP service. The service attempts to send an email using the primary SMTP server. If it fails, it retries up to three times with exponential backoff. After three failed attempts, it switches to a backup SMTP service and retries the email delivery.

## Features

- **SMTP Email Sending:** Sends emails using the primary SMTP server.
- **Retry Logic:** Retries failed email deliveries with exponential backoff (1s, 3s, 9s).
- **Backup SMTP Service:** Automatically switches to a backup SMTP service after three consecutive failures.
- **Configuration via `.env` file:** Easy configuration using environment variables.

## Prerequisites

- [Node.js](https://nodejs.org/) (v12.x or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- An email account with SMTP access (e.g., Gmail, SendGrid, etc.)

## Getting Started

### 1. Clone the Repository

git clone git@github.com:shivam-2002/pearl_thoughts.git
cd pearl_thoughts

### 2. Install dependencies

npm install

### 3. Setup Environment Variables

modify .env file

### 4. Run the Service

npm start

### 5. Send Email

open http://localhost:3000 on any browerser (change 3000 if you are using different port)
