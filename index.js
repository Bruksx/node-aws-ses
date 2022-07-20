const AWS = require("aws-sdk")
const SES_CONFIG = {
    accessKeyId: '<****>',
    secretAccessKey: '<**********>',
    region: 'us-east-1',
}

const AWS_SES = new AWS.SES(SES_CONFIG)
let sendEmail = (recipientEmail) => {
    let params = {
      Source: 'jenake8@gmail.com',
      Destination: {
        ToAddresses: [
          recipientEmail
        ],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: 'This is the body of my email!',
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `Hello, test!`,
        }
      },
    }
    return AWS_SES.sendEmail(params).promise();
}

sendEmail("bbruks07@gmail.com")