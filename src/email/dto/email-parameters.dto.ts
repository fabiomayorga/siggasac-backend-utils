export class EmailParametersDTO {
    to: string;

    from: string;

    subject?: string;

    text?: string;

    html?: string;

    context?: {
        [name: string]: any;
    };
}
