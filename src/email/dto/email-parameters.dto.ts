export class EmailParametersDTO {
    from?: string;

    to: string;

    subject?: string;

    text?: string;

    html?: string;

    context?: {
        [name: string]: any;
    };
}
