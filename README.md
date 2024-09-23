# NextSMS API Client Documentation

This package provides a simple interface for interacting with NextSMS services, including sending single/bulk SMS messages, fetching reports, logs, and checking the balance of your account. The package integrates seamlessly with the NextSMS API, offering intuitive functions for common operations.

## Requirements

To use this package, the following environment variables are required for authentication:

- **NEXTSMS_USERNAME**: Your NextSMS account username.
- **NEXTSMS_PASSWORD**: Your NextSMS account password.
- **NEXTSMS_FROM** (optional): The default sender ID. If not provided in the payload, it will use this value from the environment variable.

## Installation

First, install the package via npm or yarn:

```bash
npm install your-package-name
# or
yarn add your-package-name
```

Ensure you have your environment variables set up in your `.env` file:

```bash
NEXTSMS_USERNAME=your-username
NEXTSMS_PASSWORD=your-password
NEXTSMS_FROM=your-default-sender-id
```

## Usage

### 1. Send a Single SMS

Use the `sendMessage` function to send a single SMS. If the `from` field is not provided in the payload, it will automatically use the value from the `NEXTSMS_FROM` environment variable (if set).

```typescript
import { sendMessage } from 'your-package-name';

const messagePayload = {
  to: '+255123456789',
  message: 'Hello, this is a test message!',
  from: 'YourSenderID' // Optional if NEXTSMS_FROM is set
};

sendMessage(messagePayload)
  .then(response => {
    console.log('Message sent successfully:', response);
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });
```

### 2. Send Bulk SMS

You can send multiple messages at once using the `sendMessages` function. Similar to `sendMessage`, the `from` field can be omitted if `NEXTSMS_FROM` is set in the environment variables.

```typescript
import { sendMessages } from 'your-package-name';

const bulkPayload = {
  messages: [
    { to: '+255123456789', message: 'Hello, User 1!' },
    { to: '+255987654321', message: 'Hello, User 2!' }
  ]
};

sendMessages(bulkPayload)
  .then(response => {
    console.log('Bulk messages sent successfully:', response);
  })
  .catch(error => {
    console.error('Error sending bulk messages:', error);
  });
```

### 3. Get Reports

To retrieve the delivery reports for the messages you've sent, use the `getReports` function. The payload can include filter options such as date range or message IDs.

```typescript
import { getReports } from 'your-package-name';

const reportsPayload = {
  startDate: '2024-01-01',
  endDate: '2024-01-31'
};

getReports(reportsPayload)
  .then(response => {
    console.log('Delivery Reports:', response);
  })
  .catch(error => {
    console.error('Error fetching reports:', error);
  });
```

### 4. Get Logs

The `getLogs` function allows you to fetch logs related to messages, such as sent messages, delivery statuses, and more.

```typescript
import { getLogs } from 'your-package-name';

const logsPayload = {
  startDate: '2024-01-01',
  endDate: '2024-01-31'
};

getLogs(logsPayload)
  .then(response => {
    console.log('Logs:', response);
  })
  .catch(error => {
    console.error('Error fetching logs:', error);
  });
```

### 5. Check Balance

To check your current balance with NextSMS, use the `getBalance` function. This will return the available balance in your account.

```typescript
import { getBalance } from 'your-package-name';

getBalance()
  .then(response => {
    console.log('Current Balance:', response);
  })
  .catch(error => {
    console.error('Error fetching balance:', error);
  });
```

## Environment Variable: `NEXTSMS_FROM`

The `from` parameter in SMS payloads is optional **only if** the `NEXTSMS_FROM` environment variable is set. If `NEXTSMS_FROM` is not set, you will need to provide the `from` field explicitly in each payload when sending messages.

- **Without `NEXTSMS_FROM`**: You must provide `from` in the payload.
- **With `NEXTSMS_FROM`**: The `from` field is optional in the payload, and it will default to the value of `NEXTSMS_FROM`.

### Example:

```env
# .env file
NEXTSMS_USERNAME=your-username
NEXTSMS_PASSWORD=your-password
NEXTSMS_FROM=YourDefaultSender
```

With this setup, you can omit the `from` field when sending messages, and it will default to `YourDefaultSender`.

### Example without `from` in the payload:

```typescript
import { sendMessage } from 'your-package-name';

const messagePayload = {
  to: '+255123456789',
  message: 'Hello, this is a test message!'
  // No 'from' field, will default to NEXTSMS_FROM
};

sendMessage(messagePayload)
  .then(response => {
    console.log('Message sent successfully:', response);
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });
```

## Error Handling

Make sure to handle errors appropriately, as shown in all the examples above. API calls may fail due to network issues, authentication problems, or other reasons, so ensure your application handles these cases gracefully.

## Conclusion

This package simplifies the process of interacting with the NextSMS API. Whether you're sending single or bulk messages, retrieving logs, or checking your balance, the package provides a straightforward interface. Remember to configure your environment variables correctly for smooth operation.