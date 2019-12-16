import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';
import { EmailParametersDTO } from './dto/email-parameters.dto';

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService) {}

    async sendEmail(emailParametersDTO: EmailParametersDTO): Promise<any> {
        try {
            this.mailerService.sendMail(emailParametersDTO);
            return 1;
        } catch (error) {
            throw error;
        }
    }
}
