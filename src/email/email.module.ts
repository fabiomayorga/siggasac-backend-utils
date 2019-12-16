import { Module } from '@nestjs/common';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';
import { EmailService } from './email.service';
// app.module.ts

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: 'email-smtp.us-east-1.amazonaws.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'AKIAIAPGK57JXNG2CKHA',
                    pass: 'AsIeeUsfKcyRmOuhodH4K2YSjuMrV0zzMVdrrRsmOoVm'
                },
                tls: {
                    rejectUnauthorized: false
                }
            },
            defaults: {
                from: 'info@ekosave.co'
            },
            template: {
                dir: 'no',
                adapter: new HandlebarsAdapter(), // or new PugAdapter()
                options: {
                    strict: true
                }
            }
        })
    ],
    providers: [EmailService],
    exports: [EmailService]
})
export class EmailModule {}
