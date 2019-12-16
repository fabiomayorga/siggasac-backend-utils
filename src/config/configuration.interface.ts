export interface Configuration {
    name: string;
    description: string;
    version: string;
    port: number;
    host: string;
    apiBasePath: string;
    subRoutes: {
        [key: string]: string;
    };
}
