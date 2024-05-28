import { EmployeesRepository } from "./EmployeesRepository";
import { MailSender } from "./MailSender";

export class BirthdayService {
  constructor() {
  }

  sendGreetings(ourDate, fileName, smtpUrl, smtpPort, transport) {
    const employeesRepository = new EmployeesRepository(fileName);
    const mailSender = new MailSender(transport)
    const employees = employeesRepository.getEmployeesByBirthDate(ourDate);

    employees.forEach(employee => {
      const message = {
        host: smtpUrl,
        port: smtpPort,
        from: "sender@here.com",
        to: [employee.getEmail()],
        subject: "Happy Birthday!",
        text: `Happy Birthday, dear ${employee.getFirstName()}!`,
      };
      mailSender.sendMail(message);
    });
  }
}