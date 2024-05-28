export class MailSender {
    constructor(transport) {
      this.transport = transport;
    }
  
    sendMail(message) {
        this.transport.sendMail({
          host: message.host,
          port: message.port,
          from: message.from,
          to: message.to,
          subject: message.subject,
          text: message.text,
        });
      }
  }