import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';
import { EmailParametersDTO } from './dto/email-parameters.dto';

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService) {}

    async sendEmail(parameters: EmailParametersDTO): Promise<any> {
        try {
            return await this.mailerService.sendMail(parameters);
        } catch (error) {
            throw error;
        }
    }
}
