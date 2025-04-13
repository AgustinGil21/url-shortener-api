import sgMail from '@sendgrid/mail';
import { EMAIL_ADDRESS, SENDGRID_API_KEY } from '../../config/dotenv-config';
import { TEmailAddress } from '../types/interfaces';
import ResponseErrors from './ResponseErrors';
import SuccessMessageHandler from './SuccessMessageHandler';

interface IGenerateEmail {
  to: TEmailAddress;
  subject?: string;
  html: string;
  text?: string;
}

sgMail.setApiKey(SENDGRID_API_KEY as string);

export default class EmailHandler {
  static async generateEmail({ to, html, subject, text }: IGenerateEmail) {
    const email = {
      to,
      from: EMAIL_ADDRESS as string,
      subject,
      text,
      html,
    };

    try {
      const message = SuccessMessageHandler.email();
      await sgMail.send(email);
      console.log(message);
    } catch (err) {
      const { message } = ResponseErrors.email();
      throw new Error(message);
    }
  }

  static async sendAuthEmail(to: TEmailAddress) {
    await this.generateEmail({
      to,
      html: `
      <main>
        <h1>  </h1>
      </main>
      `,
      subject: 'Two factor authentication',
    });
  }

  static async sendNotificationEmail() {}
}
