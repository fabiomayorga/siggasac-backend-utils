import { IsNotEmpty, IsEmail } from 'class-validator';

export class EmailParametersDTO {
    @IsEmail()
    @IsNotEmpty()
    to: string;

    @IsEmail()
    @IsNotEmpty()
    from: string;

    subject?: string;

    text?: string;

    html?: string;

    context?: {
        [name: string]: any;
    };
}
